import React from 'react'
import { useState } from 'react'

const TaskCreate = ({onCreate,onTaskUpdate,tasks,onUpdate}) => {
const [title, setTitle] = useState(tasks ? tasks.title :"")
const [tArea, setTArea] = useState(tasks ? tasks.desc :"")


const handleChange=(e)=> setTitle(e.target.value);
const handleChangeTA=(e)=> setTArea(e.target.value);

const handleSubmit=(e)=>{
    e.preventDefault()
    if(onTaskUpdate){
      onUpdate(tasks.id,title,tArea)
    }
    else{
      onCreate(title,tArea)
    }
    
    setTitle("")
    setTArea("")
}

  return (
    <div>{onTaskUpdate?( <div className='taskCDUpdate'>
    <h3>Görevi Düzenleyiniz:</h3>
    <form className='taskCreate' onSubmit={handleSubmit}>
        <label className='labels'>Görev Başlığını Düzenleyiniz:</label>
        <input className='inputsUpdate' value={title} onChange={handleChange}></input>
        <label className='labels'>Taskı Düzenleyiniz:</label>
        <textarea  className='inputsUpdate' rows={5} value={tArea} onChange={handleChangeTA}></textarea>
        <button className='button update-button' onClick={handleSubmit}>Düzenle</button>
    </form>
</div>): <div className='taskCD'>
        <h3>Görev Atama & Task Giriş:</h3>
        <form className='taskCreate' onSubmit={handleSubmit}>
            <label className='labels'>Görev Başlığı:</label>
            <input className='inputs' value={title} onChange={handleChange}></input>
            <label className='labels'>Lütfen Task Giriniz:</label>
            <textarea  className='inputs' rows={5} value={tArea} onChange={handleChangeTA}></textarea>
            <button className='button' onClick={handleSubmit}>Oluştur</button>
        </form>
    </div>}
    </div>
   
  )
}

export default TaskCreate
