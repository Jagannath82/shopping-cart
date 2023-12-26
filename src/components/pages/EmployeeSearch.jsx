import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";
import { useQuery } from 'react-query';
import { fetchAllEmployees } from '../../client/EmployeeClient';

const columns = [
    {
      name: "Name",
      selector: (row) => row.name
    },
    {
      name: "Salary",
      selector: (row) => row.salary
    }
  ];

  
  
//   const emps = [
//     {
//       id: 1,
//       name: "Fluffy",
//       species: "cat"
//     },
//     {
//       id: 2,
//       name: "Boomer",
//       species: "dog"
//     }
//   ];

export default function EmployeeSearch() {
  const {data , isLoading} = useQuery("employees", fetchAllEmployees);
  const [employee, setEmployee ] = useState([]);
  useEffect(()=>{
    if(!isLoading){
        console.log(data?.data?.data?.getAllEmployees);
        setEmployee(data?.data?.data?.getAllEmployees);
    }
  },[isLoading]);

  return (
    <div>
      <DataTable
        title="Pet List"
        columns={columns}
        data={employee}
        pagination
      />
    </div>
  )
}
