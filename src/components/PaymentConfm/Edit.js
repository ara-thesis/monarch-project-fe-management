import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

function Edit({ apiPayment, setIsEditing, currData }) {
  const [personname, setPersonname] = useState()
  const [email, setEmail] = useState()
  const [contact, setContact] = useState()
  const [image, setImage] = useState('http://172.22.56.135:8000' + currData.image)
  const [pageStart, setPageStart] = useState(true)

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50
    },
    preview: {
      marginTop: 50,
      display: 'flex',
      flexDirection: 'column'
    },
    image: { maxWidth: '100%', maxHeight: 320 },
    delete: {
      cursor: 'pointer',
      padding: 15,
      background: 'red',
      color: 'white',
      border: 'none'
    }
  }

  const handleAccept = e => {
    e.preventDefault()
    setIsEditing(false)

    apiPayment.put(`/payment/${currData.id}`)

    Swal.fire({
      icon: 'success',
      title: 'Accepted!',
      text: `Payment Accepted`,
      showConfirmButton: false,
      timer: 1500
    })
  }

  const handleDeny = e => {

    Swal.fire({
      icon: 'warning',
      title: 'Are you sure you want to Deny this payment?',
      // text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(async (result) => {
      if (result.value) {
        apiPayment.delete(`/payment/${currData.id}`)
          .then(reponse => {
            Swal.fire({
              icon: 'success',
              title: 'Sent!',
              text: `Payment confirmation has been denied.`,
              showConfirmButton: false,
              timer: 1500
            })
          })
          .catch(error => {
            if (error.response.data.message.includes('violates foreign key constraint'))
              Swal.fire({
                icon: 'error',
                title: 'Failed!',
                text: 'Cannot delete ticket that still in used by user'
              })
          })
      }
    })
  }

  const formatter = new Intl.NumberFormat('en-US',
  {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: null
  })

  useEffect(() => {
    const fetchApi = async () => {
      const result = await apiPayment.get(`/payment/${currData.id}`)
      const resultData = result.data.data[0]
      setPersonname(resultData.nameperson)
      setEmail(resultData.useremail)
      setContact(resultData.usermobile)
    }
    fetchApi()
  });

  return (
    <div className="small-container">
      <form onSubmit={handleAccept}>
        <h1>
          Payment Confirmation
        </h1>

        <label htmlFor="nameperson">
          Person name
        </label>
        <input
          id="nameperson"
          name="nameperson"
          disabled={true}
          style={{
            width: '100%',
            paddingLeft: '8px',
            paddingTop: '6px',
            paddingBottom: '6px',
            paddingRight: '6px',
          }}
          type="text"
          value={personname} />

        <label htmlFor="contact">
          Person mobile
        </label>
        <input
          id="contact"
          name="contact"
          disabled={true}
          style={{
            width: '100%',
            paddingLeft: '8px',
            paddingTop: '6px',
            paddingBottom: '6px',
            paddingRight: '6px',
          }}
          type="text"
          value={contact} />

        <label htmlFor="email">
          Person email
        </label>
        <input
          id="email"
          name="email"
          disabled={true}
          style={{
            width: '100%',
            paddingLeft: '8px',
            paddingTop: '6px',
            paddingBottom: '6px',
            paddingRight: '6px'
          }}
          type="text"
          value={email} />

        <label htmlFor="price">
          Total price
        </label>
        <input
          id="email"
          name="email"
          disabled={true}
          style={{
            width: '100%',
            paddingLeft: '8px',
            paddingTop: '6px',
            paddingBottom: '6px',
            paddingRight: '6px'
          }}
          type="text"
          value={formatter.format(500000)} />

        <div style={styles.container}>
          <div style={styles.preview}>
            <img
              alt="news pics"
              src={image}
              style={styles.image}
            />
          </div>
        </div>

        <div style={{ marginTop: '30px' }}>
          <input
            type="submit"
            value="Accept"
          />

          <input
            style={{ background: 'red', marginLeft: '12px' }}
            onClick={() => handleDeny()}
            type="button"
            value="Deny"
          />

          <input
            className="muted-button"
            onClick={() => setIsEditing(false)}
            style={{ marginLeft: '12px' }}
            type="button"
            value="Cancel"
          />
        </div>
      </form>
    </div>
  )
}

export default Edit
