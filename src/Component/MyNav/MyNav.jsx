import React from 'react'
import { Navbar, Container ,Nav } from 'react-bootstrap'
import './MyNav.css'
import ReactStars from "react-rating-stars-component";


const MyNav = ({handleTitle , handleRate}) => {
   
const ratingChanged = (newRating) => {
 handleRate(newRating);
};
 const handleChange=(e)=>{
   handleTitle(e.target.value)
 }
  
  return (
    <div classeName='my-nav'>
          <Navbar bg="black" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Movies-App</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Films</Nav.Link>
      <Nav.Link href="#pricing">Movies</Nav.Link>
    </Nav>
    <input type="text"
     placeholder='Enter you search' 
     className='my-input'
     onChange={handleChange}/>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={30}
    activeColor="#ffd700"
  />
    </Container>
   
  </Navbar>


    </div>
  )
}

export default MyNav;