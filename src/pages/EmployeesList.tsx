import React from 'react'
import EmployeeTable from '../components/EmployeeTable';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomNavbar from '../components/Navbar';

const EmployeesList: React.FC = () => {
  return (
    <div>
      <CustomNavbar />
      <Container className='mt-5'>
        <div className="d-flex justify-content-end">
          <Link to="/employee/add">
            <button className="btn btn-primary mb-3">Add Employee</button>
          </Link>
        </div>
        <h1>Employees</h1>
        <EmployeeTable />
      </Container>
    </div>
  )
}

export default EmployeesList;