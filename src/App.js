import {useState} from 'react'
import './App.css';
import Todo from './Todo'

function App() {
  const[tasks, setTasks] = useState([])



  
  return (
    <div className="container mx-auto text-center" style={{width: "500px"}}>
      <h3>ToDo</h3>
      <h4>What needs to be done</h4>
      <Todo tasks={tasks} setTasks={setTasks}/>
    </div>
    
  );
}

export default App;
