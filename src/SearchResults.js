import React from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

const columns = [
  {
    Header: "Id",
    accessor: "id",
    headerStyle: { whiteSpace: "unset" },
    style: { whiteSpace: "unset" }
  },
  {
    Header: "Name",
    accessor: "additionalData.name",
    headerStyle: { whiteSpace: "unset" },
    style: { whiteSpace: "unset" }
  },
  {
    Header: "Smiles structure",
    accessor: "molecule",
    headerStyle: { whiteSpace: "unset" },
    style: { whiteSpace: "unset" }
  },
  {
    Header: "Finger Print Distance",
    accessor: "additionalData.fingerprintDistance",
    headerStyle: { whiteSpace: "unset" },
    style: { whiteSpace: "unset" }
  }
];

const SearchResults = data => {
  return (
    <div style={{ width: 650, display: "inline-block" }}>
      <ReactTable
        manual
        minRows={0}
        pageSize={1}
        data={data.data}
        columns={columns}
        pages={0}
        showPagination={true}
      />
    </div>
  );
};

export default SearchResults;
