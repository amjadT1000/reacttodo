import React, { useState } from "react";

function Todo(props){
    const[task, setTask] = useState("")

    function handleChange(e) {
        setTask(e.target.value)
    }


    function AddTask() {
        props.setTasks([...props.tasks, task])
    }


    function TasksList() {
        return (
            <div>
                {props.tasks.map((t, index) => {
                    return (
                        <div className="row my-2">
                            <div className="col">
                                <li key={index}>{t}</li>
                            </div>
                            <div className="col">
                            <button className="btn btn-sm btn-danger" onClick={()=>{removeTask(index)}}>Delete</button>
                            </div>
                            <div className="col">
                                <TaskCounter />
                            </div>
                        </div>
                        )
                })}
            </div>
        )
    }


    function TaskCounter() {
        const[count, setCount] = useState(1)
        return (
            <div className="d-flex">
                <button className="btn btn-sm btn-warning" onClick={() => {setCount(count + 1)}}>+</button>
                <input type="text" value={count} className="form-control mx-1" style={{width: "40px"}} readOnly/>
                <button 
                 className="btn btn-sm btn-warning" 
                 onClick={() => {count > 1 ? setCount(count - 1) : setCount(count)}}
                 >-</button>
            </div>
        )
    }


    function removeTask(index) {
        props.setTasks(
            props.tasks.filter((task, i) => {
                return i !== index
            })
        )
    }

    return (
        <div className="container mx-auto mt-5">
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" onChange={handleChange}/>
                </div>
                <div className="col">
                    <button className="btn btn-success" onClick={AddTask}>Add</button>
                </div>
            </div>
            
            <div className="container mt-5 text-start">
                <ul>
                   <TasksList />
                </ul>
            </div>
        </div>
    )
}

export default Todo;

