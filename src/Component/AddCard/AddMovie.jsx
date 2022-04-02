import React ,{useState} from 'react';
import {Button, Modal, FormControl } from 'react-bootstrap';


const AddMovie = ({ handleData }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie] = useState({});

  const handleChange=e=>{
    setNewMovie({...newMovie , [e.target.name]:e.target.value})
  }
const handleSubmit=()=>{
  handleData(newMovie)
  handleClose()
}
  return (
    <div>
          <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <FormControl type="text"
         placeholder="Enter title" 
         name="title"
         onChange={handleChange}/>
        <FormControl type="text"
         placeholder="Enter descrption"
          name="descrption"
          onChange={handleChange}/>
        <FormControl type="text"
         placeholder="Enter url"
          name="url"
          onChange={handleChange}/>
        <FormControl type="number"
         placeholder="Enter rating" 
         name="rating"
         onChange={handleChange}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;