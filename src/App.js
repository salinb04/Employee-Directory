import React, { useState } from "react";
import EmployeeTable from "./components/EmployeeTable";
import "./App.css";

const employees = [
  { id: 1, fname: "Bob", lname: "Smith", email: "test@test.com" },
  { id: 2, fname: "Luis", lname: "Flores", email: "test@test.com" },
  { id: 3, fname: "Bob", lname: "Marley", email: "test@test.com" },
  { id: 4, fname: "Tom", lname: "Hanks", email: "test@test.com" },
];

function App() {
  const [searchVal, setSearchVal] = useState("");
  const [employeesArray, setEmployeesArray] = useState(employees);

  const onSearchChanged = (event) => {
    setSearchVal(event.currentTarget.value);
  };

  function updateEmployees(a) {
    console.log(a);
    setEmployeesArray([...a]);
  }
  console.log(employeesArray);

  return (
    <div className="App">
      <h1>Employee Directory</h1>

      {/* Input Field */}
      <input id="search" onChange={onSearchChanged}></input>

      {/* Employee Table Component */}
      <EmployeeTable
        employees={employeesArray}
        setEmployees={updateEmployees}
        search={searchVal}
      />
    </div>
  );
}

export default App;
