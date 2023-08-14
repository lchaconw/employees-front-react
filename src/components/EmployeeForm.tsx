import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { addEmployee, editEmployee, getEmployeeDetails } from '../services/employeeServices';
import { formatDateForm, isValidAddress, isValidCity, isValidDate, isValidSalary, isValidTelephone } from '../utils/utils';
import Swal from 'sweetalert2';
import Employee from '../models/Employee';

const EmployeeForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    locationCity: '',
    address: '',
    dateBirth: '',
    telephone: '',
    positionTitle: '',
    hireDate: '',
    email: '',
    salary: '',
    timeInPosition: ''
  });

  useEffect(() => {
    if (id) {
      getEmployeeDetails(parseInt(id)).then(response => {
        setEmployee({
          ...response.data,
          dateBirth: formatDateForm(response.data.dateBirth),
          hireDate: formatDateForm(response.data.hireDate)
        });
      });
    }
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!employee.firstName || !employee.lastName || !employee.locationCity || !employee.address || !employee.dateBirth
      || !employee.telephone || !employee.positionTitle || !employee.hireDate || !employee.email || !employee.salary) {
      Swal.fire('Error', 'No field should be empty!', 'error');
      return;
    }

    if (!isValidCity(employee.locationCity)) {
      Swal.fire('Error', 'Enter a valid city.', 'error');
      return;
    }

    if (!isValidAddress(employee.address)) {
      Swal.fire('Error', 'Enter a valid address.', 'error');
      return;
    }

    if (!isValidDate(employee.dateBirth) || !isValidDate(employee.hireDate)) {
      Swal.fire('Error', 'Enter a valid date in YYYY-MM-DD format.', 'error');
      return;
    }

    if (!isValidTelephone(employee.telephone)) {
      Swal.fire('Error', 'Enter a valid telephone number.', 'error');
      return;
    }

    if (!isValidSalary(employee.salary)) {
      Swal.fire('Error', 'Enter a valid salary value.', 'error');
      return;
    }

    const employeeFinal: Employee = {
      ...employee,
      salary: Number(employee.salary),
      timeInPosition: Number(employee.timeInPosition)
    };

    // Send data to backend
    if (id) {
      editEmployee(Number(id), employeeFinal).then(response => {
        console.log(response);
        Swal.fire('Success', 'Employee edited successfully!', 'success');
        navigate("/");
      }).catch((error: unknown) => {
        console.log(error);
        Swal.fire('Error', 'There was an error editing the employee.', 'error');
      });
    } else {
      addEmployee(employeeFinal).then(response => {
        console.log(response);
        Swal.fire('Success', 'Employee added successfully!', 'success');
        navigate("/");
      }).catch((error: unknown) => {
        console.log(error);
        Swal.fire('Error', 'There was an error adding the employee.', 'error');
      });
    }
    navigate('/');
  };

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <h1>{id ? 'Edit Employee' : 'Add Employee'}</h1>
        <Row>
          <Col md={6} className='mt-2'>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="firstName" value={employee.firstName} onChange={handleInputChange} required />
            </Form.Group>
          </Col>
          <Col md={6} className='mt-2'>
            <Form.Group>
              <Form.Label>Middle Name</Form.Label>
              <Form.Control type="text" name="middleName" value={employee.middleName} onChange={handleInputChange} />
            </Form.Group>
          </Col>
          <Col md={6} className='mt-3'>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="lastName" value={employee.lastName} onChange={handleInputChange} required />
            </Form.Group>
          </Col>
          <Col md={6} className='mt-3'>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control type="text" name="locationCity" value={employee.locationCity} onChange={handleInputChange} required />
            </Form.Group>
          </Col>
          <Col md={6} className='mt-3'>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" value={employee.address} onChange={handleInputChange} required />
            </Form.Group>
          </Col>
          <Col md={6} className='mt-3'>
            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" name="dateBirth" value={employee.dateBirth} onChange={handleInputChange} required />
            </Form.Group>
          </Col>
          <Col md={6} className='mt-3'>
            <Form.Group>
              <Form.Label>Telephone</Form.Label>
              <Form.Control type="text" name="telephone" value={employee.telephone} onChange={handleInputChange} required />
            </Form.Group>
          </Col>
          <Col md={6} className='mt-3'>
            <Form.Group>
              <Form.Label>Position Title</Form.Label>
              <Form.Control type="text" name="positionTitle" value={employee.positionTitle} onChange={handleInputChange} required />
            </Form.Group>
          </Col>
          <Col md={6} className='mt-3'>
            <Form.Group>
              <Form.Label>Hire Date</Form.Label>
              <Form.Control type="date" name="hireDate" value={employee.hireDate} onChange={handleInputChange} required />
            </Form.Group>
          </Col>
          <Col md={6} className='mt-3'>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={employee.email} onChange={handleInputChange} required />
            </Form.Group>
          </Col>
          <Col md={6} className='mt-3'>
            <Form.Group>
              <Form.Label>Salary</Form.Label>
              <Form.Control type="text" name="salary" value={employee.salary} onChange={handleInputChange} required />
            </Form.Group>
          </Col>
          <Col md={6} className='mt-3'>
            <Form.Group>
              <Form.Label>Time in Position</Form.Label>
              <Form.Control type="text" name="timeInPosition" value={employee.timeInPosition} onChange={handleInputChange} required />
            </Form.Group>
          </Col>

        </Row>
        <div className="d-flex justify-content-center">
          <Button variant='primary' type="submit" className='mt-4' size='lg'>{id ? 'Edit Employee' : 'Add Employee'}</Button>
        </div>
      </Form>
    </Container>
  );
};

export default EmployeeForm;
