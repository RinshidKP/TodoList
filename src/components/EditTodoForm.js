import React , {useState} from 'react'

const EditTodoFrom = ({editTodo,task}) => {
    const [value,setValue] = useState(task.task)
    const HandleSubmit = (e) => {
        e.preventDefault();
        if (value !== "") {
            editTodo(value,task.id);
          }
        setValue("")
    }
  return (
    <form className='EditTodoFrom' onSubmit={HandleSubmit} >
        <input onChange={(event)=> setValue(event.target.value)} value={value} className='todo-input' placeholder='Update Task' type="text" />
        <button type='submit' className='todo-btn' >Update</button>
    </form>
  )
}

export default EditTodoFrom
