import React, { useEffect, useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() { //Central component to manage state and render other components.
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });
  
  function handleChange(event) {
    // Implement logic to handle form changes
    const value = event.target.type=== "checkbox"? event.target.checked : event.target.value;
    const newFormState = {
      ...formState,
      [event.target.name]:value,
      
    }
    setFormState(newFormState);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    let newTask = {
      ...formState,
      id: Date.now() + Math.random(),
    }
    const updatedTasksArray =[...tasks , newTask];
    setTasks(updatedTasksArray);
    
    setFormState({
      task: "", // string
      completed: false, // boolean
      taskAssignedTo: "", // string
    });
  }
  
  function handleDelete(taskId){
    // console.log(tasks);
     const updatedTask=tasks.filter((task)=>task.id!==taskId)
    //  console.log(updatedTask);
     setTasks(updatedTask);//whenever state variable changes re-render happens
  }

  function handleToggle(task){
     task.completed=(!task.completed);
     const toggleTasks=[...tasks];
     setTasks(toggleTasks);//whenever state variable changes re-render happens
  }
  useEffect(function (){
   
  },[tasks])
  return (
    <>
    <h2 style={{backgroundColor:"aqua",borderRadius:"10px"}}>Todo App using useState</h2>
      <div style={{fontWeight:"bolder"}}>
        <form onSubmit={handleSubmit}>
          <input style={{backgroundColor:"white", margin:"10px",height:"30px" ,borderRadius:"10px"}} name="task" type="text" placeholder="Add Task" onChange={handleChange} value={formState.task}/>
          <label>
            Completed:
            <input name="completed" type="checkbox" onChange={handleChange} checked={formState.completed}/>
          </label>
          <select style={{backgroundColor:"yellow", margin:"10px",height:"30px" ,borderRadius:"10px"}} name="taskAssignedTo" onChange={handleChange} value={formState.taskAssignedTo}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button style={{backgroundColor:"green", margin:"10px"}} type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item) => (
        <TaskItem key={item.id} item={item} onDelete={handleDelete} onToggle={handleToggle} /> //1.The Item, handleDelete,
        //and handleToggle functions will be passed down to TaskItem.jsx as props for respective actions on tasks.
        //2.Assign a unique key prop to each item in a list for efficient rendering.
      ))}
    </>
  );
}

export default App;
