import React from 'react'
import { Container } from 'react-bootstrap';
import EmployeeForm from '../components/EmployeeForm';
import CustomNavBar from '../components/Navbar';

const AddEditEmployee: React.FC = () => {

  return (
    <div>
      <CustomNavBar />
      <Container className='mt-5'>
        <EmployeeForm />
      </Container>
    </div>
  )
}

export default AddEditEmployee;