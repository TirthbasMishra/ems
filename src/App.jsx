import React, { useContext, useEffect, useState } from 'react'
import Login from './assets/components/Auth/Login'
import EmployeeDashboard from './assets/components/Dashboard/EmployeeDashboard'
import AdminDashboard from './assets/components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

 const [user, setUser] = useState(null)
 const authData = useContext(AuthContext)
 
 const handleLogin = (email,password) =>{
    if(email == 'admin@me.com' && password == '123')
    {
      setUser('admin')
    }
    else if (email == 'user@me.com' && password == '123')
    {
      setUser('employee')
    }
    else{
      alert("Invalid credentials")
    }
 }




  return (
   <>
      {!user ? <Login handleLogin={handleLogin} /> :''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard /> }
      {/*  */}
      {/*  */}
   </>
  )
}

export default App