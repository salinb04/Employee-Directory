import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import EmployeeRow from "./EmployeeRow";

const EmployeeTable = ({ employees, search, setEmployees }) => {
  const [ascending, setAscending] = useState(true);

  var filtered = employees.filter(({ fname, lname, email }) => {
    if (search === "") {
      return true;
    }

    const s = search.toLowerCase();
    const first = fname.toLowerCase();
    const last = lname.toLowerCase();
    const e = email.toLowerCase();
    return first.includes(s) || last.includes(s) || e.includes(s);
  });

  function sortTable() {
    let sorted = employees.sort((a, b) => {
      if (a.fname < b.fname) {
        return -1;
      }
      if (a.fname > b.fname) {
        return 1;
      }
      return 0;
    });
    console.log(sorted);
    setEmployees(sorted);
    console.log("test");
  }

  return (
    <Table>
      <thead>
        <tr>
          <th onClick={() => sortTable()}>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <EmployeeRow key={employee.id} employee={employee} />
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeTable;
