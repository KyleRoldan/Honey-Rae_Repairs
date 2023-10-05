import { useState,useEffect } from "react"
import { getAllEmployees } from "../../services/employeeService"





export const Ticket = ({ ticket}) => {
    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState({})
useEffect(() => {
getAllEmployees().then((employeeArray) => {
    setEmployees(employeeArray)

})
}, [])

useEffect (() => {
const foundEmployee = employees.find(
    (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
    )
    setAssignedEmployee(foundEmployee)


},[employees, ticket])

return (
    <div className="ticket" key={ticket.id}>
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
            <div className="ticketInfo">assignee</div>
            <div>{assignedEmployee ? assignedEmployee.user?.fullName : "None"}</div>

        </div>
        <div>
    <div className ="ticket-info">emergency</div>
    <div>{ticket.emergency ? "yes": "no"}</div>


        </div>

      </footer>
    </div>
  )




}