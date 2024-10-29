import React from 'react'

const CompleteTask = ({data}) => {
   return (
      <div className='h-full flex-shrink-0 w-[400px] p-5 bg-blue-600 rounded-xl'>
         <div className='flex justify-between  items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
         </div>
         <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
         <p className='text-sm mt-2'>{data.taskDescription}</p>

         <div className='mt-4'>
            <button className='bg-green-500 rounded-md font-medium py-1 px-2 text-xs w-full'>
               Complete
            </button>
         </div>


      </div>
   )
}

export default CompleteTask