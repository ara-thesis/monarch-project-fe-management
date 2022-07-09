import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = ({ setIsAuthenticated }) => {
  // const adminEmail = "asdf@asdf.com";
  // const adminPassword = "asdf@asdf.com";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const apiLogin = axios.create({
    baseURL: "http://172.22.56.135:8000/api",
    timeout: 0,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  });

  const handleLogin = e => {
    e.preventDefault();

    // if (email === adminEmail && password === adminPassword) {
    //   Swal.fire({
    //     timer: 1500,
    //     showConfirmButton: false,
    //     willOpen: () => {
    //       Swal.showLoading();
    //     },
    //     willClose: () => {
    //       localStorage.setItem('is_authenticated', true);
    //       setIsAuthenticated(true);

    //       Swal.fire({
    //         icon: 'success',
    //         title: 'Successfully logged in!',
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //     },
    //   });
    // } else {
    //   Swal.fire({
    //     timer: 1500,
    //     showConfirmButton: false,
    //     willOpen: () => {
    //       Swal.showLoading();
    //     },
    //     willClose: () => {
    //       Swal.fire({
    //         icon: 'error',
    //         title: 'Error!',
    //         text: 'Incorrect email or password.',
    //         showConfirmButton: true,
    //       });
    //     },
    //   });
    // }

    apiLogin.post("/auth/login", {
      username: email,
      password: password
    }).then((resp) => {
      
      // set token
      const respData = resp.data;
      console.log(respData.data[0].token);
      localStorage.setItem("token", respData.data[0].token)

      // success message
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem('is_authenticated', true);
          setIsAuthenticated(true);

          Swal.fire({
            icon: 'success',
            title: 'Successfully logged in!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    }).catch((e) => {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Incorrect email or password.',
            showConfirmButton: true,
          });
        },
      });
    });

    
  };

  return (
    <div className="small-container">
      <form onSubmit={handleLogin}>
        <h1>Admin Login</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="admin@example.com"
          // value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="qwerty"
          // value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input style={{ marginTop: '12px' }} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
