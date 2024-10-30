import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTaxk from '../other/AllTaxk'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-7'>
      <Header  data={props.data} changeUser= {props.changeUser}/>
      <CreateTask data={props.data} />
      <AllTaxk data={props.data} />

    </div>
  )
}

export default AdminDashboard