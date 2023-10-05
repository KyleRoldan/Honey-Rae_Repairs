
import "./App.css"
import { CustomerList } from "./components/customers/CustomersList"
import { TicketList } from "./components/tickets/TicketList.js"
import {EmployeeList} from "./components/employees/EmployeeList"






export const App = () => {
return <>
 { /*<TicketList />*/}
 <CustomerList />
 <EmployeeList />
  </>
}
