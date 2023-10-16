import "./Employee.css"
import { useEffect,useState } from "react"
import { getStaffUsers } from "../../services/UserService"
import { Employee } from "../../users/User"
import { Link } from "react-router-dom"



export const EmployeeList = () => {

const [employees,setEmployees] =  useState([])

useEffect(() => {
getStaffUsers().then((employeeArray) => {
    setEmployees(employeeArray)
})

}, [])

return (
    <div className="employees" key={employees.name}>
      {employees.map((employeeObj) => {
        return (
          <Link to={`/employees/${employeeObj.id}`}>
            <Employee employee={employeeObj} />
          </Link>
        )
      })}
    </div>
  )

}

