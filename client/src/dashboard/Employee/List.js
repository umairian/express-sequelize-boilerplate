import React from "react";
import Table from "../../components/common/Table";

export default function List() {
  const columns = [
    {
      name: "Full Name",
      selector: "fullName",
      sortable: true,
    },
    {
      name: "CNIC",
      selector: "CNIC",
      sortable: true,
    },
    {
      name: "Contact Number",
      selector: "number",
      sortable: true,
    },
    {
      name: "Salary",
      selector: "salary",
      sortable: true,
    },
    {
      name: "Join Date",
      selector: "joinDate",
      sortable: true,
    },
    {
      name: "Address",
      selector: "address",
      sortable: true,
    },
    {
      name: "User Name",
      selector: "userName",
      sortable: true,
    },
    {
      name: "Work History",
      selector: "workHistory",
      sortable: true,
    },
  ];

  // const [data, setData] = React.useState([]);

  // const getMedicines = React.useCallback(async () => {
  //   // const response = await get();
  //   // setData(response.data);
  // }, []);

  // React.useEffect(() => {
  //   getMedicines();
  // }, []);

  const data = [
    {
      fullName: "Muhammad Ruvaid",
      CNIC: "17301-918203123-1",
      number: "03123100123",
      salary: "10000",
      joinDate: "21/1/2021",
      address: "Street#2 Faqeerabad Colony Peshawar",
      userName: "mruvaid121",
      workHistory: "",
    },
    {
      fullName: "Muhammad Khadim Jan",
      CNIC: "17301-03199313123-3",
      number: "03100123",
      salary: "9000",
      joinDate: "21/1/2021",
      address: "Street#2 Charsadda KP",
      userName: "jan400",
      workHistory: "",
    },
  ];
  const title = "Employees";
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
