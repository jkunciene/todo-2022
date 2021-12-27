import React, { useState } from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() { 
  const [tasks, setTask] = useState([
    {id:1, text:"pirma"},
    {id:2, text:"Antra"}
]);
  return (
    <div className='container'>
      <Header title="Props Title from App.jsx"/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
