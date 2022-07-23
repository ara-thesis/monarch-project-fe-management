import axios from "axios";

const API_URI = {
  deployed: '172.22.56.135:8000',
  dev: 'localhost:8000'
}

const ApiConnect = token => {

  if (token === null || token === undefined) {
    token = ''
  }

  const axiosInstance = axios.create({
    baseURL: `http://${API_URI.deployed}/api`,
    timeout: 0,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    }
  })
  return axiosInstance
}

export {
  ApiConnect,
  API_URI
}