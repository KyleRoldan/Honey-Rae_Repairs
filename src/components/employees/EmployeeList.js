import "./Employee.css"
import { useEffect,useState } from "react"
import { getStaffUsers } from "../../services/UserService"
import { Employee } from "../../users/User"



export const EmployeeList = () => {

const [employees,setEmployees] =  useState([])

useEffect(() => {
getStaffUsers().then((employeeArray) => {
    setEmployees(employeeArray)
})

}, [])

return (
<div className="employees" key ={employees.name}>
{employees.map(employeeObj => {
return (
<Employee employee={employeeObj} />
)

})}



</div>
)
}

