import React from 'react'
import { Container } from 'react-bootstrap';
import Navbar from '../components/NavBar';
import EmployeeForm from '../components/EmployeeForm';

const AddEditEmployee: React.FC = () => {

  return (
    <div>
      <Navbar />
      <Container className='mt-5'>
        <EmployeeForm />
      </Container>
    </div>
  )
}

export default AddEditEmployee;