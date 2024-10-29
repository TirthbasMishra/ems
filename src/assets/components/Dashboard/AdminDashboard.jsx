import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTaxk from '../other/AllTaxk'

const AdminDashboard = ({data}) => {
  return (
    <div className='h-screen w-full p-7'>
      <Header data={data}/>
      <CreateTask data={data}/>
      <AllTaxk  data={data}/>

    </div>
  )
}

export default AdminDashboard