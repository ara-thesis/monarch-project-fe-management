import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { TileLayer, Marker, useMapEvents, MapContainer } from 'react-leaflet';


function PlaceInfo() {

  
  return (
<Form>
  <Form.Group className="mb-3" controlId="place-name" styles={styles.centered}  >
    <Form.Label>Place name</Form.Label>
    <Form.Control type="placename" placeholder="Enter place name" />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group className="mb-3" controlId="about-place">
    <Form.Label>About Place</Form.Label>
    <Form.Control type="aboutplace" placeholder="About the place" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="open-time">
      <Form.Label>Open Time</Form.Label>
      <Form.Control type="opentime" placeholder="Input open time" />
    </Form.Group>

    <Form.Group as={Col} controlId="closed-time">
      <Form.Label>Closed Time</Form.Label>
      <Form.Control type="closedtime" placeholder="Input close time" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="Country">
    <Form.Label>Country</Form.Label>
    <Form.Control placeholder="Input Country" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Input House, Apartment etc." />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>


    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Postal Code</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="This information is correct" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Location</Form.Label>
    
    <Form.Control label ="Click to your current location"  />
  </Form.Group>

  <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Place Picture</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

  

  <Button variant="primary" type="Save Info!">
    Submit
  </Button>
</Form>
  );
}

export default PlaceInfo;

const styles={
    centered:{
      display: 'flex',  justifyContent:'center', alignItems:'center', width:'50px'
    }

}


