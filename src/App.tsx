import React, { useState } from "react"
import {  Heading } from "./Styled/Styled"
import Input from "./components/Input"
import TaskList, { type Task } from "./components/TaskList"
function App() {
  const [teme,setTeme] = useState(false)
  const [taskArray, setTaskArray] = useState(() => {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [{
    id:0,
    task:"",
    data:"",
    succes:false
  }];
});
  const AddTask = (newTask:Task) => {
    let task = newTask

    task.id = taskArray[taskArray.length - 1].id + 1
    let newArr = [...taskArray,task]
    setTaskArray(newArr)
    localStorage.setItem("tasks",JSON.stringify(newArr))
  }
  const DeleteTask = (id:number) => {
    let FilterArray = taskArray.filter((e:Task) => e.id != id)
    setTaskArray(FilterArray)
    localStorage.setItem("tasks",JSON.stringify(FilterArray))
  }
  const SetSucces = (id:number) => {
    const currentTask = taskArray.find(e => e.id == id)
    let FilterArray = taskArray.filter((e:Task) => e.id != id)
    const changeSuccesTask = {...currentTask,succes:true}
    let newArr = [...FilterArray,changeSuccesTask]
    setTaskArray(newArr)
    localStorage.setItem("tasks",JSON.stringify(newArr))
  }
  const ChangeTeme = () => {
    setTeme(!teme)
    if (teme) {
      localStorage.setItem("tema","true")
    }else{
      localStorage.setItem("tema","false")
    }
  }
  return (
      <div>
        <Heading>TO-DO LIST</Heading>
        <Input teme = {teme} ChangeTemeFunc={ChangeTeme} AddTask = {AddTask}/>
        <TaskList teme = {teme} SetSucces = {SetSucces} DeleteTask = {DeleteTask} taskArray = {taskArray}/>
      </div>

  )
}

export default App
