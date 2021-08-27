import React from "react";
import Table from "../../components/common/Table";
import { get } from "../../services/medicines";

export default function List() {
  const columns = [
    {
      name: "EAN13",
      selector: "EAN13",
      sortable: true,
    },
    {
      name: "UPCA",
      selector: "UPCA",
      sortable: true,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Company",
      selector: "company",
      sortable: true,
    },
    {
      name: "Composition",
      selector: "composition",
      sortable: true,
    },
    {
      name: "Cost",
      selector: "cost",
      sortable: true,
    },
    {
      name: "Sale Price",
      selector: "sale_price",
      sortable: true,
    },
    {
      name: "Dose",
      selector: "dose",
      sortable: true,
    },
    {
      name: "Description",
      selector: "description",
      sortable: true,
    },
  ];

  const [data, setData] = React.useState([]);

  const getMedicines = React.useCallback(async () => {
    const response = await get();
    setData(response.data);
  }, []);

  React.useEffect(() => {
    getMedicines();
  }, []);

  const title = "Medicine List";
  return (
    <div className="content-container bg-white">
      <div>
        <h2>{title} </h2>
        <div className="d-flex justify-content-end">
          <i className="fas fa-trash-alt"></i>
        </div>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}
