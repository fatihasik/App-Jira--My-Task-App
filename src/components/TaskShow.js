import React from 'react'
import { useState } from 'react'
import TaskCreate from './TaskCreate'
export const TaskShow = ({tasks,onDelete,onUpdate}) => {

const [showEdit, setShowEdit] = useState(false)

const deleteTask=()=>{
  onDelete(tasks.id)
}

const handleEditClick=()=>{
  setShowEdit(!showEdit)
}

const handleSubmit=(id,updatedTitle,updatedDesc)=>{
  setShowEdit(false)
  onUpdate(id,updatedTitle,updatedDesc)
}
  return (
    <div className='inputs'>
      {showEdit ? (
      <TaskCreate tasks={tasks} onTaskUpdate={true} onUpdate={handleSubmit}/>): <div>
        <h2>Göreviniz:</h2>
        <p> {tasks.title} </p>
        <h3 >Yapılacaklar:</h3>
        <p> {tasks?.desc} </p>
        <div>
        <button className='button-detele' onClick={deleteTask}>Sil</button>
        <button className='button-edit' onClick={handleEditClick}>Güncelle </button>
        </div></div>}
        

    </div>
  )
}
export default TaskShow;