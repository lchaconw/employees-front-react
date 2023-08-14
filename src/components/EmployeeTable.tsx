import React, { useState, useEffect } from 'react';
import Employee from '../models/Employee';
import { Table, Button } from 'react-bootstrap';
import { listEmployees } from '../services/employeeServices';
import { formatDate } from '../utils/utils';

const EmployeeTable: React.FC = () => {

  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    listEmployees().then(response => {
      setEmployees(response.data);
    });
  }, []);

  return (
    <Table striped bordered hover responsive className='mt-3'>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Position Title</th>
          <th>Date Arrival</th>
          <th>Status</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.positionTitle}</td>
            <td>{formatDate(employee.hireDate)}</td>
            <td>{/* You need to provide the status from the backend or determine it somehow */}</td>
            <td>
              <Button variant="primary" href={`/details/${employee.id}`}>View</Button>
              {/* <Button variant="primary" onClick={() => viewDetails(employee.id!)}>View</Button> */}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeTable;
