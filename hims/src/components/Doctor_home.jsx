import React, { useState, useEffect } from "react";

const Table = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <table className="table table-bordered table-hover">
            <thead className="table-head">Patients
              <tr>
                <th className="table-head">No</th>
                <th className="table-head">Name</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
