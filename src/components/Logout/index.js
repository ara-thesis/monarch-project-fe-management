import React from 'react'
import { Redirect } from 'react-router-dom'
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
      localStorage.setItem('token', '')
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
    <button
      className="muted-button"
      onClick={handleLogout}
      style={{ marginLeft: '12px' }}
    >
      Logout
    </button>
  )
}

export default Logout
