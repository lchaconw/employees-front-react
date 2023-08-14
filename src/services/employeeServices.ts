import Employee from "../models/Employee";
import api from "../utils/api";

export const listEmployees = () => {
  return api.get('/');
};

export const getEmployeeDetails = (id: number) => {
  return api.get(`/${id}`);
};

export const addEmployee = (employee: Employee) => {
  return api.post('/', employee);
};

export const editEmployee = (id: number, employee: Employee) => {
  return api.put(`/${id}`, employee);
};
