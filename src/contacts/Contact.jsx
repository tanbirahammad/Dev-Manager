import React from 'react'
import {Card,ListGroup,Button} from 'react-bootstrap'
import { FaEye,FaRegTrashAlt } from "react-icons/fa";



const Contact = ({contact,deleteContact}) => {
    const{id,firstName,lastName,email,profession,gender,dateOfBirth,bio,image} =contact
  return (
    <div>
        <Card className="mb-4">
          <div className='d-flex'>
          <Card.Img  className='card-img' src={image} />
      <Card.Body>
        <Card.Title><span className='mb-3 text-dark'>{firstName}{lastName}</span></Card.Title>
        <Card.Subtitle className='text-muted'>{profession}</Card.Subtitle>
        <Card.Text>
          {bio}
        </Card.Text>
      
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Email: {email}</ListGroup.Item>
        <ListGroup.Item>Gender: {gender}</ListGroup.Item>
        <ListGroup.Item>Date of Birth: {dateOfBirth}</ListGroup.Item>
      </ListGroup>
      <div className='card-btn mt-3'>
      <Card.Link href="#">
        <Button variant='warning' size='md' type='view'>
          <FaEye/>
        </Button>
      </Card.Link>
        <Card.Link href="#">
          <Button variant='danger' size='md' onClick={()=>deleteContact(id)}>
            <FaRegTrashAlt/>
          </Button>
        </Card.Link>
      </div>
        
      </Card.Body>
          </div>
      
    </Card>
    </div>
  )
}

export default Contact;