import { useState } from 'react'
import Header from "./components/header";
import TodoList from "./components/Todolist";
import './App.css'


function App() {
  

  return ( 
    <div className='app-container'> 
     <Header /> 
     <TodoList /> 
    </div>
  )
}

export default App;
