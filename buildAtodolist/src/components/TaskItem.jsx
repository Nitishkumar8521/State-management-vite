function TaskItem({item,onDelete,onToggle}) {
    // const {task,completed,taskAssignedTo} = props.item;
    function handleDelete(){
      onDelete(item.id);//handleDelete() function of App.jsx file will be called
    }

    function handleToggle(){
        onToggle(item);//handleToggle() function of App.jsx file will be called
    }
    console.log(item,"Ni");
    return (
        <div id="TaskItem" style={{textDecoration:item.completed?'line-through' :"none"}}>{item.task}
        
           <button onClick={handleDelete}>Delete</button>
           <button onClick={handleToggle} style={{textDecoration:item.completed?'line-through' :"none",
           color:item.completed?'red' :"green"}}>
            {item.completed?"Marks as Incomplete":"Marks as complete"}</button>
           
          
        </div>
    );
    
  }
  
  export default TaskItem;
  