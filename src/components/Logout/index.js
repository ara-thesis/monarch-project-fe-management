import React from 'react'
import { Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { SetToken } from '../../helper/TokenHelper'
import Swal from 'sweetalert2'

function Logout() {
  const handleLogout = () => {

    // Success message
    Swal.fire({
      icon: 'question',
      title: 'Logging Out',
      text: 'Are you sure you want to log out?',
      showCancelButton: true,
      confirmButtonText: 'Yes'
    }).then((result) => {
      // Empty token
      SetToken('')
      if (result.value) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading()
          },
          willClose: () => {
          }
        })
        window.location.reload(false);
        // return <Redirect to="/" />
      }
    })
  }

  return (
    <Button
      className="muted-button"
      onClick={handleLogout}
      variant='danger'
      style={{ marginLeft: '12px'}}
    >
      Logout
    </Button>
  )
}

export default Logout
