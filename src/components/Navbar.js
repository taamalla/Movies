import {Navbar,Form,FormControl} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

function Nav({setsearch,setRating}){
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
    return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Movie App</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  
    <Form inline>
      <FormControl  onChange={(e)=>setsearch(e.target.value)} type="text" placeholder="Search" className="mr-sm-2" />
     
    </Form>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
  </Navbar.Collapse>
</Navbar>
    )
}


export default Nav