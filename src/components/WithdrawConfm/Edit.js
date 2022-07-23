import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

function Edit({ apiFundreq, setIsEditing, currData }) {
  const [placename, setPlacename] = useState(currData.placename)
  const [requestedfund, setRequestedfund] = useState(currData.reqfund)
  const [bankacc, setBankacc] = useState(currData.bankacc)
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

  const handleUpdate = (e) => {
    e.preventDefault()
    setIsEditing(false)

    // apiNews.put(`/news/${currData.id}`, {
    //   title,
    //   article,
    //   image: selectedImage
    // })
  
    Swal.fire({
      icon: 'success',
      title: 'Approve!',
      text: `Withdrawal request has been approved.`,
      showConfirmButton: false,
      timer: 1500
    })
    
  }

  const handleDeny = () => {

    Swal.fire({
      icon: 'warning',
      title: 'Are you sure you want to Deny this payment?',
      // text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(async (result) => {
      Swal.fire({
        icon: 'success',
        title: 'Sent!',
        text: `Payment confirmation has been denied.`,
        showConfirmButton: false,
        timer: 1500
      })
      // if (result.value) {
      //   apiFundreq.delete(`/payment/${currData.id}`)
      //     .then(reponse => {
            
      //     })
      //     .catch(error => {
      //       if (error.response.data.message.includes('violates foreign key constraint'))
      //         Swal.fire({
      //           icon: 'error',
      //           title: 'Failed!',
      //           text: 'Cannot delete ticket that still in used by user'
      //         })
      //     })
      // }
    })
  }

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h3>
          Withdrawal Request
        </h3>

        <label htmlFor="placename">
          Place name
        </label>

        <input
          id="placename"
          name="placename"

          onChange={(e) => setPlacename(e.target.value)}
          style={{
            width: '100%',
            paddingLeft: '8px',
            paddingTop: '6px',
            paddingBottom: '6px',
            paddingRight: '6px',
          }}
          type="text"
          value={placename} />

        <label htmlFor="placename">
          Requested Fund
        </label>

        <input
          id="placename"
          name="placename"

          onChange={(e) => setRequestedfund(e.target.value)}
          style={{
            width: '100%',
            paddingLeft: '8px',
            paddingTop: '6px',
            paddingBottom: '6px',
            paddingRight: '6px'
          }}
          type="text"
          value={requestedfund} />

        <label htmlFor="bankaccount">
          Bank Account
        </label>

        <input
          id="bankaccount"
          name="bankaccount"

          onChange={(e) => setBankacc(e.target.value)}
          style={{
            width: '100%',
            paddingLeft: '8px',
            paddingTop: '6px',
            paddingBottom: '6px',
            paddingRight: '6px',
            marginBottom: '40px'
          }}
          type="text"
          value={bankacc} />


        <div style={{ marginTop: '30px' }}>
          <input
            type="submit"
            value="Approve"
          />

          <input
            type="button"
            style={{ marginLeft: '12px', background: 'red' }}
            onClick={() => setIsEditing(false)}
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
