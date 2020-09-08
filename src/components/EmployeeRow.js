import React from "react";

const EmployeeRow = ({ employee }) => {
  return (
    <tr>
      <td>{employee.fname}</td>
      <td>{employee.lname}</td>
      <td>{employee.email}</td>
    </tr>
  );
};

export default EmployeeRow;
