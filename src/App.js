import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState,useEffect } from 'react'
import axios from 'axios';

function App() {

const [tasks, setTasks] = useState([])

 const createTask=async(title,desc)=>{

   const response = await axios.post(`http://localhost:3001/tasks`,{title,desc});
    
    console.log(response);

    const createdTask=()=>[
  ...tasks,response.data
]
setTasks(createdTask)
 }
 const fetchTasks=async()=>{
  const response = await axios.get(`http://localhost:3001/tasks`)
  setTasks(response.data)
 }
 useEffect(() => {
    fetchTasks();
    }, [])
 

const deleteByID= async(id)=>{
 await axios.delete(`http://localhost:3001/tasks/${id}`)
  const afterDeletingTasks = tasks.filter((task)=>{
    return task.id !== id
  })
  setTasks(afterDeletingTasks)
}

const updateByID= async (id,updatedTitle,updatedDesc)=>{
  await axios.put(`http://localhost:3001/tasks/${id}`,{id,title:updatedTitle,desc:updatedDesc})
  const updatedTasks = tasks.map((task)=>{
    if(task.id ===id){
      return {id,title:updatedTitle,desc:updatedDesc}
    }
    return task;
  })
  setTasks(updatedTasks)
}
  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/>
      <h1>Görevleriniz:</h1>
      <TaskList  tasks={tasks} onDelete={deleteByID} onUpdate={updateByID} />
    </div>
  );
}

export default App;
