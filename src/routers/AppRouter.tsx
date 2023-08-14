import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeesList from '../pages/EmployeesList'
import EmployeeDetail from '../pages/EmployeeDetail'
import AddEditEmployee from '../pages/AddEditEmployee'

export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/details/:id" element={
          <EmployeeDetail />
        } />

        <Route path="/employee/add" element={
          <AddEditEmployee />
        } />

        <Route path="/employee/edit/:id" element={
          <AddEditEmployee />
        } />

        <Route path="/*" element={
          <EmployeesList />
        } />
      </Routes>
    </BrowserRouter>
  )
}