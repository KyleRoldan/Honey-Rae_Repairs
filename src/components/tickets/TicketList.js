import { useState,useEffect } from "react"
import { getAllTickets } from "../../services/TicketService"
import { Ticket } from "./Ticket"
import "./Tickets.css" 
import { TicketFilterBar } from "./TicketFilterBar"




export const TicketList = ({currentUser}) => {

    const [allTickets,setAllTickets]=useState([])
    const [showEmergencyOnly,setShowEmergencyOnly] = useState(false)
    const [showOpenOnly,setShowOpenOnly] = useState(false)
    const [filteredTickets,setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")



    const getAndSetTickets = () =>{
      getAllTickets().then((ticketsArray)=>{

        if (currentUser.isStaff){

              setAllTickets(ticketsArray)

        }else {

              const customerTickets = ticketsArray.filter((ticket) => ticket.userId===currentUser.id)

              setAllTickets(customerTickets)

        }
      })
    }
  
    useEffect(() => { getAndSetTickets()
  },[currentUser])
    
    useEffect(() => {
      if (showEmergencyOnly) {
        const emergencyTickets = allTickets.filter((ticket) => ticket.emergency === true)
      
      setFilteredTickets(emergencyTickets)
    } else {
      setFilteredTickets(allTickets)
    }
    },[showEmergencyOnly,allTickets])

    useEffect(()=>{
      const foundTickets = allTickets.filter((ticket) => 
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase()))
      setFilteredTickets(foundTickets)
    },[searchTerm, allTickets])

    useEffect(()=>{

      if(showOpenOnly){
        const openTickets = allTickets.filter((ticket)=> ticket.dateCompleted === ``)
        setFilteredTickets(openTickets)
      }else{
        setFilteredTickets(allTickets)
      }
    },[showOpenOnly,allTickets])
  
  
    return (
    <div className="tickets-container">
      
      
      <h2>Tickets</h2>
      
      
  <TicketFilterBar setShowEmergencyOnly={setShowEmergencyOnly} setShowOpenOnly={setShowOpenOnly} setSearchTerm ={setSearchTerm} currentUser={currentUser}/>
  
  
      <div className="tickets">
        {filteredTickets.map((ticketObj) => {
          return <Ticket 
          ticket={ticketObj} 
          currentUser={currentUser} 
          getAndSetTickets={getAndSetTickets} 
          key={ticketObj.id} 
          />
          
          
        })}
      
    </div>
    
     </div>  
    )



}