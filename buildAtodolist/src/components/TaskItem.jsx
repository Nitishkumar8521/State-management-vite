function TaskItem({item,onDelete,onToggle}) {
    // const {task,completed,taskAssignedTo} = props.item;
    function handleDelete(){
      onDelete(item.id);
    }

    function handleToggle(){
        onToggle(item);
    }
    // console.log(item,onDelete,onToggle);
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
  