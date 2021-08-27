import React from "react";
import { Input } from "../../components/common";
import { add } from "../../services/medicines";
import { isEmpty } from "lodash";

export default function StockForm(props) {
  const [errors, setErrors] = React.useState({
    medicineName: "",
    batchNumber: "",
    batchCost: "",
    expiration: "",
    quantity: "",
  });

  const [
    { medicineName, batchNumber, batchCost, expiration, quantity },
    setState,
  ] = React.useState({
    medicineName: "",
    batchNumber: "",
    batchCost: 0,
    expiration: "",
    quantity: 0,
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

    if (isEmpty(batchNumber)) error.batchNumber = "BatchNumber can't be empty";
    if (isEmpty(medicineName)) error.medicineName = "Name can't be empty";
    if (isEmpty(batchCost)) error.batchCost = "BatchCost can't be empty";
    if (isEmpty(expiration)) error.expiration = "Expiration can't be empty";
    if (isEmpty(quantity)) error.quantity = "Quantity can't be empty";

    if (Object.keys(error).length === 0) {
      await add({
        batchNumber,
        medicineName,
        batchCost,
        expiration,
        quantity,
      });
    } else {
      setErrors((currentState) => {
        return { ...currentState, ...error };
      });
    }
  };

  return (
    <div className="content-container form">
      <h3>Add Medicine Stocks</h3>
      <form className="d-flex" onSubmit={(e) => onHandleSubmit(e)}>
        <div>
          <div className="form-group d-flex-column">
            <label>Batch Number</label>
            <Input
              name="batchNumber"
              type="number"
              onChange={onHandleChangeInput}
              value={batchNumber}
            />
            <div className="error">{errors.batchNumber}</div>
          </div>

          <div className="form-group d-flex-column">
            <label>Batch Cost</label>
            <Input
              name="batchCost"
              type="number"
              onChange={onHandleChangeInput}
              value={batchCost}
            />
            <div className="error">{errors.batchCost}</div>
          </div>

          <div className="form-group d-flex-column">
            <label>Unit Price</label>
            <Input type="number" readOnly value={batchCost / quantity || 0} />
          </div>

          <div className="form-group d-flex-column">
            <label>Expiration Date</label>
            <Input
              name="expiration"
              type="date"
              onChange={onHandleChangeInput}
              value={expiration}
            />
            <div className="error">{errors.expiration}</div>
          </div>
        </div>

        <div>
          <div className="form-group d-flex-column">
            <label>Name</label>
            <Input
              name="medicineName"
              type="text"
              onChange={onHandleChangeInput}
              value={medicineName}
            />
            <div className="error">{errors.medicineName}</div>
          </div>

          <div className="form-group d-flex-column">
            <label>Quantity</label>
            <Input
              name="quantity"
              type="number"
              onChange={onHandleChangeInput}
              value={quantity}
            />
            <div className="error">{errors.quantity}</div>
          </div>
        </div>
      </form>
      <button className="btn btn-primary" onClick={(e) => onHandleSubmit(e)}>
        Submit
      </button>
    </div>
  );
}
