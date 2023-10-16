import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployeeByUserId } from "../../services/EmployeeService"
import "./Employee.css"







export const EmployeeDetails = () => {
const[employee, setEmployee]=useState({})
const {employeeId}=useParams()

useEffect(()=>{
getEmployeeByUserId(employeeId).then ((data)=>{
    console.log()
    const employeeObj = data[0]
    setEmployee(employeeObj)
})

},[employeeId])






return (

<div className="employee">
<header className="employee-header">{employee.user?.fullName}</header>
<div>
    <div className="employee-info">Email : </div>
    {employee.user?.email}
    </div>
<div>
    <div className="employee-info">Specialty : </div>
    {employee?.specialty}
</div>
<div>
    <div className="employee-info">Rate : </div>
    {employee?.rate}

</div>


</div>

)

}