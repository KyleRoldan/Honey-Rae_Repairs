import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { getCustomerByUserId } from "../../services/CustomerService"





export const CustomerDetails = () => {
const[customer, setCustomer]=useState({})
const {customerId}=useParams()

useEffect(()=>{
getCustomerByUserId(customerId).then ((data)=>{
    const customerObj = data[0]
    setCustomer(customerObj)
})

},[customerId])




return (

<div className="customer">
<header className="customer-header">{customer.user?.fullName}</header>
<div>
    <div className="customer-info">Email : </div>
    {customer.user?.email}
    </div>
<div>
    <div className="customer-info">Address : </div>
    {customer.address}
</div>
<div>
    <div className="customer-info">Phone Number : </div>
    {customer.phoneNumber}

</div>


</div>

)

}