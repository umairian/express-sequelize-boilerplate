import React from "react";
import DataTable from "react-data-table-component";

const Table = (props) => {
  return (
    <DataTable
      title={props.title}
      columns={props.columns}
      data={props.data}
      defaultSortFieldId={1}
      pagination
      selectableRows
    />
  );
};

export default Table;
