import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PlaceInfo() {
  return (
<Form>
  <Form.Group className="mb-3" controlId="place-name">
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
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Postal Code</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="This information is correct" />
  </Form.Group>

  <Button variant="primary" type="Save Info!">
    Submit
  </Button>
</Form>
  );
}

export default PlaceInfo;
