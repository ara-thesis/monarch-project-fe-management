import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// Import { TileLayer, Marker, useMapEvents, MapContainer } from 'react-leaflet';

function PlaceInfo() {
  return (
    <Form>
      <Form.Group
        className="mb-3"
        controlId="place-name"
      >
        <Form.Label>
          Place name
        </Form.Label>

        <Form.Control
          placeholder="Enter place name"
          type="placename"
        />

        {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="about-place"
      >
        <Form.Label>
          About Place
        </Form.Label>

        <Form.Control
          placeholder="About the place"
          type="aboutplace"
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group
          as={Col}
          controlId="open-time"
        >
          <Form.Label>
            Open Time
          </Form.Label>

          <Form.Control
            placeholder="Input open time"
            type="opentime"
          />
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="closed-time"
        >
          <Form.Label>
            Closed Time
          </Form.Label>

          <Form.Control
            placeholder="Input close time"
            type="closedtime"
          />
        </Form.Group>
      </Row>

      <Form.Group
        className="mb-3"
        controlId="Country"
      >
        <Form.Label>
          Country
        </Form.Label>

        <Form.Control placeholder="Input Country" />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formGridAddress2"
      >
        <Form.Label>
          Address
        </Form.Label>

        <Form.Control placeholder="Input House, Apartment etc." />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group
          as={Col}
          controlId="formGridCity"
        >
          <Form.Label>
            City
          </Form.Label>

          <Form.Control />
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="formGridZip"
        >
          <Form.Label>
            Postal Code
          </Form.Label>

          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group
        className="mb-3"
        controlId="formBasicCheckbox"
      >
        <Form.Check
          label="This information is correct"
          type="checkbox"
        />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formGridAddress2"
      >
        <Form.Label>
          Location
        </Form.Label>

        <Form.Control label="Click to your current location" />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formFile"
      >
        <Form.Label>
          Upload Place Picture
        </Form.Label>

        <Form.Control type="file" />
      </Form.Group>

      <Button
        type="Save Info!"
        variant="primary"
      >
        Submit
      </Button>
    </Form>
  )
}

export default PlaceInfo
