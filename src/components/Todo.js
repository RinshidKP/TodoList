import React from 'react'

const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
      <div className='Todo' >
      <p onClick={()=> toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`} >
      {task.task}
      </p>
        <div className='icons'>
            <i className="fas fa-pencil-alt" onClick={()=>editTodo(task.id)} ></i>
            <i className="fas fa-trash-alt" onClick={()=>deleteTodo(task.id)}></i>
        </div>
    </div>
  )
}

export default Todo
