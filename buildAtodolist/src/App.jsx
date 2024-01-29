import React, { useState } from "react";
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
     const updatedTask=tasks.filter((task)=>task.id!==taskId)
     setTasks(updatedTask);//whenever state variable changes re-render happens
  }

  function handleToggle(task){
     task.completed=(!task.completed);
     const toggleTasks=[...tasks];
     setTasks(toggleTasks);//whenever state variable changes re-render happens
  }
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
        <TaskItem key={item.id} item={item} onDelete={handleDelete} onToggle={handleToggle} />//handleDelete & handleToggle
        //passed as an argument
      ))}
    </>
  );
}

export default App;
