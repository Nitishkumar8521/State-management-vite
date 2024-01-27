import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  const [formState , setFormState] = useState({
    title:"",
    completed:false,
    assignedTo:"",
  });

  function handleChange(event){
    //All the logic to update the input value should go here
    console.log("Value = ",event.target.value);//gives us on/off when input's type="checkbox" but if we want to 
    //true or false we have to use "checked" at the each place of "value".
    console.log("Checked = ",event.target.checked);
    console.log("Name = ",event.target.name);//gives the value of name attribute

    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    
    const newFormState = {
      ...formState, //since we can't change the value of object and array in React. so we are creating new formstate.
      [event.target.name]:value,//since event.target.name===title but not always it can be 
      //completed or assignedTo also
    }
    setFormState(newFormState);
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log("Form is submitted with values ",formState);
    const newTask = {
      ...formState,
      id: Date.now() + Math.random(),
    };
    //here we not use push function because we can't change array state.
    const updatedTasksArray =[...tasks , newTask];
    setTasks(updatedTasksArray);

    setFormState({
      title:"",
      completed:false,
      assignedTo:"",
    });
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input value={formState.title} name='title' type="text" placeholder='Add new task'  onChange={handleChange}/>
      <br />
      <br />
      <label htmlFor="completed">
        completion Status <input checked={formState.completed} //I have used "checked" at the place of "value" because
        //type="checkbox" of the input tag 
        name='completed' type="checkbox" id='completed' onChange={handleChange}/>
      </label>
      <br />
      <br />
      <select value={formState.assignedTo} name='assignedTo' onChange={handleChange}>
        <option value="">Assign task To</option>
        <option value="Amar">Amar</option>
        <option value="Akbar">Akbar</option>
        <option value="Anthony">Anthony</option>
      </select>
      <br />
      <br />
      <button style={{border:"2px solid red"}} type='submit'>ADD TASK</button>
    </form>
    <br />
    <br />
    {tasks.map((taskItem)=>
     <div>{taskItem.title}</div>
    )}
    </>
  )
}

export default App
