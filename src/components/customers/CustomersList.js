import { useEffect,useState } from "react"
import { getNonStaffUsers } from "../../services/UserService"
import { User } from "../../users/User"
import "./Customers.css"


export const CustomerList = () => {

const [customers,setCustomers] =  useState([])

useEffect(() => {
getNonStaffUsers().then((customerArray) => {
    setCustomers(customerArray)
})

}, [])

return (
<div className="customers" key ={customers.name}>
{customers.map(customerObj => {
return (
<User user={customerObj} />
)

})}



</div>
)
}