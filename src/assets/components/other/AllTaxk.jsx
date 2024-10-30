import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const AllTaxk = () => {
  const authData = useContext(AuthContext)




  return (
    <div id='tasklist' className='bg-[#1c1c1c] p-5 mt-5 rounded  '>

      <div className='bg-blue-400 py-2 mb-2  px-4 flex justify-between items-center rounded '>
        <h2 className='w-1/5  text-lg font-medium ' >Employee Name</h2>
        <h3 className='w-1/5  text-lg font-medium'>New Task</h3>
        <h5 className='w-1/5  text-lg font-medium'>Active Task</h5>
        <h5 className='w-1/5 text-lg font-medium '>Completed</h5>
        <h5 className='w-1/5  text-lg font-medium'>Failed</h5>
      </div>
      <div id='tasklist' className=''>
        {authData.employees.map(function (elem,idx) {

          return <div key={idx} className='bg-black py-2 mb-2 border-2   px-4 flex justify-between items-center rounded'>
            <h2 className='w-1/5 text-lg font-medium ' >{elem.firstName}</h2>
            <h3 className='w-1/5 text-lg font-medium text-yellow-400'>{elem.taskCounts.newTask}</h3>
            <h5 className='w-1/5 text-lg font-medium text-pink-400'>{elem.taskCounts.active}</h5>
            <h5 className='w-1/5 text-lg font-medium text-green-400'>{elem.taskCounts.completed}</h5>
            <h5 className='w-1/5 text-lg font-medium text-red-400'>{elem.taskCounts.failed}</h5>


          </div>

        })}
      </div>
    </div>
  )
}

export default AllTaxk