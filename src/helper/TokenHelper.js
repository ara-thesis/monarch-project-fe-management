
const SetToken = token => {
  localStorage.setItem('token', token)
}

const GetToken = localStorage.getItem('token')

export {
  SetToken,
  GetToken
}