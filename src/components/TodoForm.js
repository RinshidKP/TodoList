import React , {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState("")
    const HandleSubmit = (e) => {
        e.preventDefault();
        if (value !== "") {
            addTodo(value);
          }
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={HandleSubmit} >
        <input onChange={(event)=> setValue(event.target.value)} value={value} className='todo-input' placeholder='What is the task today?' type="text" />
        <button type='submit' className='todo-btn' >Add Task</button>
    </form>
  )
}

export default TodoForm
