import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import 'leaflet/dist/leaflet.css'

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents
} from 'react-leaflet'

function PlaceInfoDashboard() {
  // const [isAdding, setIsAdding] = useState(false)
  // const [isEditing, setIsEditing] = useState(false)
  const [placeName, setPlaceName] = useState("")
  const [placeCity, setPlaceCity] = useState("")
  const [placeCountry, setPlaceCountry] = useState("")
  const [placeInfo, setPlaceInfo] = useState("")
  const [placeStreet, setPlaceStreet] = useState("")
  const [placeStateprov, setStateProv] = useState("")
  const [placePostal, setPlacePostal] = useState("")
  const [placeLoc_lat, setPlaceLocLat] = useState(0)
  const [placeLoc_long, setPlaceLocLong] = useState(0)
  const [isStartup, setIsStartup] = useState(true)
  const [isMapUpdated, setMapUpdated] = useState(false)
  const [isAuthorized, setIsAuthorized] = useState(true)
  const [selectedImages, setSelectedImages] = useState()

  const apiPlaceInfo = axios.create({
    baseURL: 'http://172.22.56.135:8000/api',
    // baseURL: 'http://localhost:8000/api',
    timeout: 0,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  useEffect(() => {
    const startup = async () => {
      try {
        const fetchPlace = await apiPlaceInfo.get('/placeinfo/show/admin')
        const placeData = fetchPlace.data.data[0]
        if (isStartup) {
          if(placeData !== null){
            if (placeData.place_loc_lat === null && placeData.place_loc_lat === null) {
              navigator.geolocation.getCurrentPosition(pos => {
                setPlaceLocLat(pos.coords.latitude)
                setPlaceLocLong(pos.coords.longitude)
              })
            } else {
              setPlaceLocLat(fetchPlace.data.data[0].place_loc_lat)
              setPlaceLocLong(fetchPlace.data.data[0].place_loc_long)
            }
            setPlaceName(fetchPlace.data.data[0].place_name)
            setPlaceCity(fetchPlace.data.data[0].place_city)
            setPlaceCountry(fetchPlace.data.data[0].place_country)
            setPlaceInfo(fetchPlace.data.data[0].place_info)
            setPlaceStreet(fetchPlace.data.data[0].place_street)
            setStateProv(fetchPlace.data.data[0].place_stateprov)
            setPlacePostal(fetchPlace.data.data[0].place_postal)
            console.log("setup done")
          }
            
          setIsStartup(false)
          setMapUpdated(true)          
        }
      } catch (error) {
        console.log(error)
        setIsAuthorized(false)
      }

    }
    startup()
  });

  const LocationFind = () => {
    useMapEvents({
      click(e) {
        const loc = e.latlng
        setPlaceLocLat(loc.lat)
        setPlaceLocLong(loc.lng)
      }
    })
  }

  const changeData = async (event) => {
    event.preventDefault()
    try {

      await apiPlaceInfo.put('/placeinfo', {
        place_name: placeName,
        place_info: placeInfo,
        place_street: placeStreet,
        place_city: placeCity,
        place_stateprov: placeStateprov,
        place_country: placeCountry,
        place_postal: placePostal,
        place_loc_long: placeLoc_long,
        place_loc_lat: placeLoc_lat,
        images: selectedImages
      })
      console.log(selectedImages)
      console.log("success")
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="container">
      {isAuthorized ? (
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <h3>
              UPDATE PLACE INFO
            </h3>
          </div>
          <Form onSubmit={changeData}>

            <Form.Group
              className="mb-3"
              controlId="place-name">

              <Form.Label>
                Place name
              </Form.Label>

              <Form.Control
                placeholder="Enter place name"
                type="placename"
                onChange={({ target: { value } }) => {
                  setPlaceName(value)
                }}
                defaultValue={placeName} />

            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="about-place">

              <Form.Label>
                About Place
              </Form.Label>

              <Form.Control
                placeholder="About the place"
                type="aboutplace"
                onChange={({ target: { value } }) => {
                  setPlaceInfo(value)
                }}
                defaultValue={placeInfo}
              />
            </Form.Group>

            <Row className="mb-3">

              <Form.Group
                as={Col}
                controlId="formGridCountry">

                <Form.Label>
                  Country
                </Form.Label>

                <Form.Control
                  placeholder="Input Country"
                  type="placecountry"
                  onChange={({ target: { value } }) => {
                    setPlaceCountry(value)
                  }}
                  defaultValue={placeCountry} />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridProvince">

                <Form.Label>
                  Province
                </Form.Label>

                <Form.Control
                  placeholder="Input State or Province"
                  type="placestateprov"
                  onChange={({ target: { value } }) => {
                    setStateProv(value)
                  }}
                  defaultValue={placeStateprov} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridCity">
                <Form.Label>
                  City
                </Form.Label>

                <Form.Control
                  placeholder="Input address details"
                  type="placecity"
                  onChange={({ target: { value } }) => {
                    setPlaceCity(value)
                  }}
                  defaultValue={placeCity} />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridZip">
                <Form.Label>
                  Postal Code
                </Form.Label>

                <Form.Control
                  placeholder="Input postal code"
                  type="placepostal"
                  onChange={({ target: { value } }) => {
                    setPlacePostal(value)
                  }}
                  defaultValue={placePostal}
                />
              </Form.Group>
            </Row>

            <Form.Group
              className="mb-3"
              controlId="formGridAddress2">
              <Form.Label>
                Location
              </Form.Label>

              {isMapUpdated ? (
                <MapContainer
                  style={{ height: "300px" }}
                  center={[placeLoc_lat, placeLoc_long]}
                  zoom={13}
                  scrollWheelZoom={true}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <LocationFind />
                  <Marker
                    draggable={false}
                    position={[placeLoc_lat, placeLoc_long]}>
                  </Marker>
                </MapContainer>
              ) : (
                <p>Loading map...</p>
              )}

            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formFile">
              <Form.Label>
                Upload Place Picture
              </Form.Label>

              <Form.Control
                type="file"
                multiple
                onChange={({ target: { files } }) => {
                  if (files && files.length > 0) {
                    const fileList = []
                    for(let i=0;i<files.length;i++){
                      fileList.push(files[i])
                    }
                    setSelectedImages(fileList)
                  }
                  
                }}/>
            </Form.Group>

            <Button
              type="Save Info!"
              variant="primary">
              Update
            </Button>
          </Form>
        </div>

      ) : (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h4>ACCESS UNAUTHORIZED</h4>
        </div>
      )}

    </div>
  )
}

export default PlaceInfoDashboard
