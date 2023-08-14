import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Employee from '../models/Employee';
import { getEmployeeDetails } from '../services/employeeServices';
import { Link } from 'react-router-dom';
import CustomNavbar from '../components/Navbar';

const EmployeeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    if (id) {
      getEmployeeDetails(parseInt(id)).then(response => {
        setEmployee(response.data);
      });
    }
  }, [id]);

  if (!employee) return <p>Loading...</p>;

  return (
    <>
      <CustomNavbar />
      <Container>
        <Row className="mt-5">
          <div className="d-flex justify-content-end">
            <Link to={`/employee/edit/${employee.id}`}>
              <Button variant='primary' className="mt-3">Edit Employee</Button>
            </Link>
          </div>

          <Col md={6} className='mt-3'>
            <Card>
              <Card.Header><h4>Employee Details</h4></Card.Header>
              <Card.Body>
                <p><strong>First Name:</strong> {employee.firstName}</p>
                <p><strong>Middle Name:</strong> {employee.middleName}</p>
                <p><strong>Last Name:</strong> {employee.lastName}</p>
                <p><strong>City:</strong> {employee.locationCity}</p>
                <p><strong>Address:</strong> {employee.address}</p>
                <p><strong>Date of Birth:</strong> {new Date(employee.dateBirth).toLocaleDateString()}</p>
                <p><strong>Telephone:</strong> {employee.telephone}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className='mt-3'>
            <Card>
              <Card.Header><h4>Position Details</h4></Card.Header>
              <Card.Body>
                <p><strong>Title:</strong> {employee.positionTitle}</p>
                <p><strong>Hire Date:</strong> {new Date(employee.hireDate).toLocaleDateString()}</p>
                <p><strong>Email:</strong> {employee.email}</p>
                <p><strong>Salary:</strong> {employee.salary}</p>
                <p><strong>Time in Position:</strong> {employee.timeInPosition} days</p>  {/* Assuming 'timeInPosition' is in days */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EmployeeDetail;
