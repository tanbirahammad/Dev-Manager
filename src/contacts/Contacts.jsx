import React from 'react'
import Contact from '../contacts/Contact'


const Contacts = ({contacts,deleteContact}) => {
    
  return (
    <div>
      <h2 className=' text-center'>All Contacts</h2>
        {
            contacts.map((contact)=>(
                <Contact key={contact.id} contact={contact} deleteContact={deleteContact}/>
            ))
        }
        
        
    </div>
  )
}

export default Contacts;