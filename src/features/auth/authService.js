import axios from 'axios'

const API_URL = 'http://localhost:8000/api/vendor/addVendor'

// Register user
const register = async (userData) => {
  console.log(userData)
  const response = await axios.post(API_URL, 
    {
      "name":"Arvirtd Mishra",
      "email":"arvindd@gmai.com",
      "phone":"9917380398",
      "password":"password00@"
  }
   
    )

    console.log(response.data)

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService