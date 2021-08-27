import React, { useState } from "react";
import monster from "../assets/images/medical_2.png";
// import { useDispatch } from "react-redux";
import { signIn } from "../store/actions/auth";

const Login = (props) => {
  // const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onHandleChange = (e) => {
    setState((currentState) => {
      return {
        ...currentState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    // dispatch(signIn({ email, password }));
  };

  return (
    <>
      <div className="section login">
        <div className="left-side">
          <img className="" src={monster} alt="logo" />
        </div>
        <div className="right-side">
          <div className="login-container">
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <label>Email</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="example@gmail.com"
                  value={state.email}
                  onChange={(e) => onHandleChange(e)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  id="Password"
                  placeholder="****"
                  value={state.password}
                  onChange={(e) => onHandleChange(e)}
                />
              </div>

              <div className="form-group">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={(e) => onHandleSubmit(e)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
