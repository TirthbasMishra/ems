import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTaxk from '../other/AllTaxk'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-7'>
      <Header />
      <CreateTask />
      <AllTaxk />

    </div>
  )
}

export default AdminDashboard