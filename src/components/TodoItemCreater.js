import React, { useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { todoListAtoms } from '../recoil/atoms/todoListAtom';

function TodoItemCreater() {

    const [inputValue,setInputValue] = useState("");

    // const [_,setTodoList] = useRecoilState(todoListAtoms)
 const setTodoList = useSetRecoilState(todoListAtoms)

    
   const  handleChange = (e) =>{""
    setInputValue(e.target.value)
   }
   const handleClick = ()=>{
    setTodoList((prevTodos)=>[
        ...prevTodos,
        {
            id: Math.random() * 10000 + 1,
            task: inputValue,
            isCompleted:false
        }
    ]) 
   }
  return (
    <div>
      <input type='text' placeholder='task' onChange={handleChange} value={inputValue}/>
      <button type='submit'  onClick={handleClick}>Add Todo</button>
    </div>
  )
}

export default TodoItemCreater
