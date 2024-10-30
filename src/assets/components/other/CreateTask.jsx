import React, { useState } from 'react'

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})


  const submitHandler = (e)=>{
    e.preventDefault()


      setNewTask({taskTitle,taskDescription,taskDate,asignTo,category,active:false,newTask:true,failed:false,completed:false})
      const data = JSON.parse(localStorage.getItem('employees'))

    data.forEach(function(elem) {
      if(asignTo == elem.firstName){
        elem.tasks.push(newTask)
      }

      
    })
    localStorage.setItem('employees',JSON.stringify(data))

    setAsignTo('')
    setCategory('')
    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')

  }
  return (
   <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
   <form onSubmit={(e)=>{
    submitHandler(e)
   }} className='flex w-full flex-wrap items-start justify-between '>
     
      
      <div className='w-1/2'>

      <div>

      <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
      <input
      value={taskTitle}
      onChange={(e)=>{
        setTaskTitle(e.target.value)
      }}
       className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' name='task_title' placeholder='Enter Task Title' />

      </div>
      
      <div>
      
      <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
      <input
      value={taskDate}
      onChange={(e)=>{
        setTaskDate(e.target.value)
      }}
       className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date' name='task_date' />
      
      </div>
      
      <div>
      
      <h3 className='text-sm text-gray-300 mb-0.5'>Asign To</h3>
      <input
      value={asignTo}
      onChange={(e)=>{
        setAsignTo(e.target.value)
      }}
       className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='employee name'/>
      
      </div>
      
      <div>
      
      <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
      <input
      value={category}
      onChange={(e)=>{
        setCategory(e.target.value)
      }}
       className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='design, dev, etc'/>
      
      </div>

      </div>
      <div className='w-2/5 flex flex-col items-start'>
      
      <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
      <textarea
      value={taskDescription}
      onChange={(e)=>{
        setTaskDescription(e.target.value)
      }}
       className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'  name='task_description' id="" placeholder='Enter Task Description' />
      <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full' type='submit'>Create Task</button>
      </div>
      

      
   </form>
</div>
  )
}

export default CreateTask