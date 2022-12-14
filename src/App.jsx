import{Button} from 'react-bootstrap'
import { useState } from 'react'
import Contacts from './contacts/Contacts'
import Header from './layouts/Header'
import{Container} from 'react-bootstrap'
import './index.css'
import AddContacts from './contacts/AddContacts'
import { v4 as uuidv4 } from 'uuid';

const initialContacts = [
  {
    id: 1,
    firstName: 'Barbette',
    lastName: 'Pfertner',
    email: 'bpfertner0@drupal.org',
    profession: 'Web Developer',
    gender: 'Female',
    image: 'https://randomuser.me/api/portraits/women/75.jpg',
    dateOfBirth: '05/11/2021',
    bio: 'All About me',
  },
  {
    id: 2,
    firstName: 'Ignatius',
    lastName: 'McPhilip',
    email: 'imcphilip1@toplist.cz',
    profession: 'Software Developer',

    gender: 'Male',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    dateOfBirth: '04/04/2022',
    bio: 'All About me',
  },
  {
    id: 3,
    firstName: 'Fletch',
    lastName: 'Veel',
    email: 'fveel2@yellowbook.com',
    profession: 'Graphic Designer',

    gender: 'Male',
    image: 'https://randomuser.me/api/portraits/men/78.jpg',
    dateOfBirth: '17/05/2022',
    bio: 'All About me',
  },
  {
    id: 4,
    firstName: 'Shawn',
    lastName: 'Lawrenz',
    email: 'slawrenz3@independent.co.uk',
    profession: 'Data entry specialist',
    gender: 'Female',
    image: 'https://randomuser.me/api/portraits/women/80.jpg',
    dateOfBirth: '30/07/2022',
    bio: 'All About me',
  },
  {
    id: 5,
    firstName: 'Bucky',
    lastName: 'Casaccio',
    email: 'bcasaccio4@netlog.com',
    gender: 'Male',
    profession: 'Data scientist',
    image: 'https://randomuser.me/api/portraits/men/56.jpg',
    dateOfBirth: '21/03/2022',
    bio: 'All About me',
  },
  {
    id: 6,
    firstName: 'Regan',
    lastName: 'Lodford',
    email: 'rlodford5@nbcnews.com',
    profession: 'python Developer',
    gender: 'Female',
    image: 'https://randomuser.me/api/portraits/women/81.jpg',
    dateOfBirth: '16/01/2022',
    bio: 'All About me',
  },
  {
    id: 7,
    firstName: 'Hubert',
    lastName: 'Langhorne',
    email: 'hlanghorne6@thetimes.co.uk',
    gender: 'Male',
    profession: 'CPA Marketer',
    image: 'https://randomuser.me/api/portraits/men/80.jpg',
    dateOfBirth: '05/02/2022',
    bio: 'All About me',
  },
]
function App() {
 const[contacts,setContacts]=useState(initialContacts )
 
 const deleteContact=(id)=>{
  const updatedContacts=contacts.filter(contact=>contact.id !==id)
  setContacts(updatedContacts)
  
 }

 const addContact=(contact)=>{
    let contactToadd={
      id:uuidv4(),
      ...contact
    }

    setContacts([contactToadd, ...contacts])
    
 }
 

  return (
    <div >
      <Header/>
    <Container style={{width:'800px', margin:'0 auto'}} className="pt-3">
      <AddContacts addContact={addContact}/>
    <Contacts contacts={contacts} deleteContact={deleteContact}/>
    </Container>
      
      
    </div>
  )
}

export default App
