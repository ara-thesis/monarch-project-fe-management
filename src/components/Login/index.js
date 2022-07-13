import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

function Login() {
  /*
   * Const adminEmail = "asdf@asdf.com";
   * const adminPassword = "asdf@asdf.com";
   */

  const [
    email,
    setEmail
  ] = useState('')
  const [
    password,
    setPassword
  ] = useState('')

  const apiLogin = axios.create({
    baseURL: 'http://172.22.56.135:8000/api',
    // baseURL: 'http://localhost:8000/api',
    timeout: 0,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  const handleLogin = (e) => {
    e.preventDefault()

    apiLogin.post(
      '/auth/login',
      {
        username: email,
        password
      }
    ).then((resp) => {
      // Set token
      const respData = resp.data
      localStorage.setItem(
        'token',
        respData.data[0].token
      )

      // Success message
      Swal.fire({
        timer: 1500, //timer untuk menutup popup login secara otomatis ketika tidak ada action apa2 dalam 1500 detik
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading()
        },
        willClose: () => {

          Swal.fire({
            icon: 'success',
            title: 'Successfully logged in!',
            showConfirmButton: false,
            timer: 1500
          })

          window.location = '/'
          
        }
      })
    })
      .catch((e) => {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading()
          },
          willClose: () => {
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'Incorrect email or password.',
              showConfirmButton: true
            })
          }
        })
      })
  }

  return (
    <div className="small-container">
      <form onSubmit={handleLogin}>
        <h1>
          Admin Login
        </h1>

        <label htmlFor="email">
          Email
        </label>

        <input
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="admin@example.com"
          // Value={email}
          type="text"
        />

        <label htmlFor="password">
          Password
        </label>

        <input
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="qwerty"
          // Value={password}
          type="password"
        />

        <input
          style={{ marginTop: '12px' }}
          type="submit"
          value="Login"
        />
      </form>
    </div>
  )
}

export default Login
