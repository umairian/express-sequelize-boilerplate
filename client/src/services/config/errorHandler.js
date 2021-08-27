import { isNil } from "lodash";
import { logout } from "../../store/actions/auth";
import { store } from "../../store/store";

const DEFAULT_ERROR_MESSAGE = "Something went wrong!";
const errorResponseHandler = (error) => {
  let errorMessage = {
    isError: true,
    networkError: false,
    status: 500,
    message: DEFAULT_ERROR_MESSAGE,
  };
  try {
    // check for errorHandle config

    if (
      error.config.hasOwnProperty("errorHandle") &&
      error.config.errorHandle === false
    ) {
      return Promise.reject(error);
    }

    if (
      error.message === "Network Error" ||
      error.message === "timeout of 10000ms exceeded" ||
      error.code === "ECONNABORTED"
    ) {
      errorMessage = {
        ...errorMessage,
        networkError: true,
        message: "Network Error",
      };
    } else if (error.message === "Request failed with status code 401") {
      store.dispatch(logout());
    } else if (error.response) {
      errorMessage = {
        ...errorMessage,
        status: error.response.status,
        message: isNil(error.response.data)
          ? DEFAULT_ERROR_MESSAGE
          : error.response.data.message ||
            (typeof error.response.data === "string" && error.response.data) ||
            DEFAULT_ERROR_MESSAGE,
      };
    } else {
      errorMessage = {
        ...errorMessage,
        message: error.data.message,
      };
    }

    return errorMessage;
  } catch (error) {
    console.error(error);
  }
};

export default errorResponseHandler;
