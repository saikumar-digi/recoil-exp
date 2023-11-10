import React from 'react'
import { useRecoilState } from 'recoil';
import { todoListAtoms } from '../recoil/atoms/todoListAtom';

function TodoItem({item}) {
    const [todoList, setTodoList] = useRecoilState(todoListAtoms);
    const index = todoList.findIndex((listItem) => listItem === item);
    console.log("item",item);
    console.log("index", index);

    // const handleEditChange = (e) =>{
    //     setTodoList([
    //         ...todoList.slice(0, index),
    //         {
    //           ...item,
    //           text: e.target.value,
    //         },
    //         ...todoList.slice(index + 1),
    //       ]);
    // }

    const  handleEditChange = (e)=>{
        setTodoList([
            ...todoList.slice(0, index),
            {
                ...item,
                task:e.target.value
            },
            ...todoList.slice(index + 1),
        ]) 
    }
// const handleRemoveTodo = ()=>{
//     setTodoList([
//         ...todoList.slice(0, index),
//         ...todoList.slice(index + 1),
//     ])
  
// }

const toggleIsCompletion = () => {
    setTodoList([
        ...todoList.slice(0, index),
        {
            ...item,
            isCompleted:!item.isCompleted,
        },
        ...todoList.slice(index + 1),
    ]) 
};

const handleRemoveTodo = () => {
    setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== item.id));
  };

  return (
    <div>
      <input type='text' value={item.task} onChange={handleEditChange}/>
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={toggleIsCompletion}
      />
      <button onClick={handleRemoveTodo}>X</button>
    </div>
  )
}

export default TodoItem
