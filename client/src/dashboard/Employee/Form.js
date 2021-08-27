import React from "react";
import { Input } from "../../components/common";
import { add } from "../../services/medicines";
import { isEmpty } from "lodash";

export default function EmployeeForm(props) {
  const [errors, setErrors] = React.useState({
    fullName: "",
    CNIC: "",
    number: "",
    salary: "",
    joinDate: "",
    address: "",
    workHistory: "",
    userName: "",
    password: "",
  });

  const [
    {
      fullName,
      CNIC,

      number,
      salary,
      joinDate,
      address,
      workHistory,
      userName,
      password,
    },
    setState,
  ] = React.useState({
    fullName: "",
    CNIC: "",
    number: "",
    salary: 0,
    joinDate: "",
    address: "",
    workHistory: "",
    userName: "",
    password: "",
  });

  const onHandleChangeInput = (e) => {
    let { name, value } = e.target;

    setErrors((currentState) => ({ ...currentState, [name]: "" }));

    setState((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    let error = {};

    if (isEmpty(fullName)) error.fullName = "Field can't be empty";
    if (isEmpty(CNIC)) error.CNIC = "Field can't be empty";
    if (isEmpty(number)) error.number = "Field can't be empty";
    if (isEmpty(salary)) error.salary = "Field can't be empty";
    if (isEmpty(joinDate)) error.joinDate = "Field can't be empty";
    if (isEmpty(address)) error.address = "Field can't be empty";
    if (isEmpty(userName)) error.address = "Field can't be empty";
    if (isEmpty(password)) error.address = "Field can't be empty";

    if (Object.keys(error).length === 0) {
      await add({
        fullName,
        CNIC,
        number,

        salary,
        joinDate,
        address,
        workHistory,
      });
    } else {
      setErrors((currentState) => {
        return { ...currentState, ...error };
      });
    }
  };

  return (
    <div className="content-container form">
      <h3>Add Employee</h3>
      <form className="d-flex" onSubmit={(e) => onHandleSubmit(e)}>
        <div className="inline">
          <div className="form-group d-flex-column">
            <label>FullName</label>
            <Input
              name="fullName"
              type="text"
              onChange={onHandleChangeInput}
              value={fullName}
            />
            <div className="error">{errors.fullName}</div>
          </div>

          <div className="form-group d-flex-column">
            <label>CNIC</label>
            <Input
              name="CNIC"
              type="text"
              onChange={onHandleChangeInput}
              value={CNIC}
            />
            <div className="error">{errors.CNIC}</div>
          </div>

          <div className="form-group d-flex-column">
            <label>Contact Number</label>
            <Input
              name="number"
              type="number"
              onChange={onHandleChangeInput}
              value={number}
            />
            <div className="error">{errors.number}</div>
          </div>

          <div className="form-group d-flex-column">
            <label>Salary</label>
            <Input
              name="salary"
              type="number"
              onChange={onHandleChangeInput}
              value={salary}
            />
            <div className="error">{errors.salary}</div>
          </div>

          <div className="form-group d-flex-column">
            <label>Join Date</label>
            <Input
              name="joinDate"
              type="date"
              onChange={onHandleChangeInput}
              value={joinDate}
            />
            <div className="error">{errors.joinDate}</div>
          </div>

          <div className="form-group d-flex-column">
            <label>Address</label>
            <textarea
              name="address"
              onChange={onHandleChangeInput}
              value={address}
            />
            <div className="error">{errors.address}</div>
          </div>
          <div>
            <div className="form-group d-flex-column">
              <label>Work History</label>
              <textarea
                name="workHistory"
                onChange={onHandleChangeInput}
                value={workHistory}
              />
              <div className="error">{errors.workHistory}</div>
            </div>
          </div>
          <div>
            <div className="form-group d-flex-column">
              <label>User Name</label>
              <Input
                name="userName"
                type="text"
                onChange={onHandleChangeInput}
                value={userName}
              />
              <div className="error">{errors.userName}</div>
            </div>
          </div>
          <div>
            <div className="form-group d-flex-column">
              <label>Password</label>
              <Input
                name="password"
                type="password"
                onChange={onHandleChangeInput}
                value={password}
              />
              <div className="error">{errors.password}</div>
            </div>
          </div>
        </div>
      </form>
      <button className="btn btn-primary" onClick={(e) => onHandleSubmit(e)}>
        Add
      </button>
    </div>
  );
}
