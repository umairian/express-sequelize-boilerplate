import React from "react";
import { Input } from "../../components/common";
import { add } from "../../services/medicines";
import { isEmpty } from "lodash";

export default function UpdateMedicineForm(props) {
  const [errors, setErrors] = React.useState({
    EAN13: "",
    UPCA: "",
    medicineName: "",
    batchNumber: "",
    batchCost: "",
    expiration: "",
    quantity: "",
    company: "",
    composition: "",
    dose: "",
    description: "",
    salePrice: "",
  });

  const [
    {
      EAN13,
      UPCA,
      medicineName,
      batchNumber,
      batchCost,
      expiration,
      quantity,
      company,
      composition,
      dose,
      description,
      salePrice,
    },
    setState,
  ] = React.useState({
    EAN13: "",
    UPCA: "",
    medicineName: "",
    batchNumber: "",
    batchCost: 0,
    expiration: "",
    quantity: 0,
    company: "",
    composition: "",
    dose: "",
    description: "",
    salePrice: "",
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

    if (isEmpty(EAN13)) error.EAN13 = "EAN13 can't be empty";
    if (isEmpty(UPCA)) error.UPCA = "UPCA can't be empty";
    if (isEmpty(batchNumber)) error.batchNumber = "BatchNumber can't be empty";
    if (isEmpty(medicineName)) error.medicineName = "Name can't be empty";
    if (isEmpty(batchCost)) error.batchCost = "BatchCost can't be empty";
    if (isEmpty(expiration)) error.expiration = "Expiration can't be empty";
    if (isEmpty(quantity)) error.quantity = "Quantity can't be empty";
    if (isEmpty(company)) error.company = "Company can't be empty";
    if (isEmpty(composition)) error.composition = "Composition can't be empty";
    if (isEmpty(dose)) error.dose = "Dose can't be empty";
    if (isEmpty(description)) error.description = "Description can't be empty";

    if (Object.keys(error).length === 0) {
      await add({
        EAN13,
        UPCA,
        batchNumber,
        medicineName,
        batchCost,
        expiration,
        quantity,
        company,
        composition,
        dose,
        description,
        salePrice,
      });
    } else {
      setErrors((currentState) => {
        return { ...currentState, ...error };
      });
    }
  };

  return (
    <div className="content-container form">
      <h3>Update Medicine</h3>
      <div className="d-flex align-items-center">
        <h3>Search:</h3>
        <div className="form-group">
          <label>EAN13</label>
          <Input
            name="EAN13"
            type="number"
            onChange={onHandleChangeInput}
            value={EAN13}
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <Input
            name="medicineName"
            type="text"
            onChange={onHandleChangeInput}
            value={medicineName}
          />
        </div>

        <div>
          <button
            className="btn btn-primary"
            onClick={(e) => onHandleSubmit(e)}
          >
            Search
          </button>
        </div>
      </div>

      <form className="d-flex" onSubmit={(e) => onHandleSubmit(e)}>
        <div>
          <div className="form-group d-flex-column">
            <label>EAN13</label>
            <Input
              name="EAN13"
              type="number"
              onChange={onHandleChangeInput}
              value={EAN13}
            />
            <div className="error">{errors.EAN13}</div>
          </div>

          <div className="form-group d-flex-column">
            <label>UPCA</label>
            <Input
              name="UPCA"
              type="number"
              onChange={onHandleChangeInput}
              value={UPCA}
            />
            <div className="error">{errors.UPCA}</div>
          </div>

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
            <label>Composition</label>
            <Input
              name="composition"
              type="text"
              onChange={onHandleChangeInput}
              value={composition}
            />
            <div className="error">{errors.composition}</div>
          </div>
          <div className="form-group d-flex-column">
            <label>Company</label>
            <Input
              name="company"
              type="text"
              onChange={onHandleChangeInput}
              value={company}
            />
            <div className="error">{errors.company}</div>
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

          <div className="form-group d-flex-column">
            <label>Sale Price</label>
            <Input
              name="salePrice"
              type="number"
              onChange={onHandleChangeInput}
              value={salePrice}
            />
            <div className="error">{errors.salePrice}</div>
          </div>

          <div className="form-group d-flex-column">
            <label>Dose</label>
            <Input
              name="dose"
              type="text"
              onChange={onHandleChangeInput}
              value={dose}
            />
            <div className="error">{errors.dose}</div>
          </div>
          <div className="form-group d-flex-column">
            <label>Description</label>
            <textarea
              name="description"
              onChange={onHandleChangeInput}
              value={description}
            />
            <div className="error">{errors.description}</div>
          </div>
        </div>
      </form>
      <button className="btn btn-primary" onClick={(e) => onHandleSubmit(e)}>
        Update
      </button>
    </div>
  );
}
