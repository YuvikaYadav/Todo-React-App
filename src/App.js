import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

var count = 0
function App() 
{
  const [todoList, setTodolist] = useState([
    {
      id: count++,
      todo: "Need to complete Homework",
      completed: true
    },
    {
      id: count++,
      todo: "Need to buy groceries",
      completed: true
    },
    {
      id: count++,
      todo: "Need to fix vehicle",
      completed: false
    },
    {
      id: count++,
      todo: "Complete project",
      completed: false
    }
  ])

  const addTodo = () =>
  {
    //console.log("Add To-do");
    //console.log("Text readed:", document.getElementById("input").value);  
    //console.log("todolist:", todolist);
    const text = document.getElementById("input").value
    const todoObject = {
      id: count++,
      todo: text,
      completed: false
    }
    setTodolist([...todoList, todoObject])
  }

  const deleteTodo = (id) =>
  {
    console.log("deleteTodo:", id);
    var tempTodoList = todoList.filter(iterator => 
    {
      return id != iterator.id

      // if(id === iterator.id)
      // {
      //   return false
      // }
      // else
      // {
      //   return true
      // }
    })
    setTodolist([...tempTodoList])
  }

  const completeTodo = (id) =>
  {
    console.log("completeTodo:, ", id);

    var tempTodoList = todoList.map(iterator =>
    {
      if (id === iterator.id)
      {
        iterator.completed = !iterator.completed
        return iterator   
      }
      else
      {
        return iterator
      }
    })
    setTodolist([...tempTodoList])
  }

  return (
    <div>
      <h1>To-do Application</h1>
      <h4>(By Yuvika Yadav)</h4>

      <input type='text' id='input' placeholder='Enter To-do here...'/>
      <button onClick={addTodo}>Add To-do</button>

      <div>
        <ul>
          {todoList.map(iterator => 
              {
                return <li key={iterator.id}>
                  {
                    iterator.completed == true ?
                    <>
                      <input type='checkbox' onChange={()=>completeTodo(iterator.id)} checked/>
                      <s>{iterator.todo}</s>
                    </> :
                    <>
                      <input type='checkbox' onChange={()=>completeTodo(iterator.id)}/>
                      {iterator.todo}
                    </>
                  }
                  {iterator.todo}
                  <button onClick={()=>deleteTodo(iterator.id)}>Delete</button>
                  </li>
              })
          }
        </ul>
      </div>

    </div>
  );
}

export default App;
