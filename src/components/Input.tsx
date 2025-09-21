import  { useState } from 'react'
import { ChangeTeme, InputToAdd, SendButton, WrapperInput } from '../Styled/Styled'
import type { Task } from './TaskList'
interface Props{
  AddTask:(newTask:Task) => void;
  ChangeTemeFunc: () => void;
  teme:boolean;
}
const Input = ({AddTask,ChangeTemeFunc}:Props) => {
  const [value,setValue] = useState("")
  const OnAdd = () => {
    if(value !== ""){
      const task = {
      id:0,
      task:value,
      data:"",
      succes:false
    }

    AddTask(task)
    setValue("")
    }
  }
  return (
    <WrapperInput>
        <div style={{backgroundColor:"white",padding:"12px"}}>
        <InputToAdd value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => {
          if(e.key === "Enter" && value !== ""){
            OnAdd()
          }
        }} placeholder='Введите задачу'/>
        <SendButton onClick={() => OnAdd()}>Add</SendButton>
        </div>
        <ChangeTeme onClick={() => ChangeTemeFunc()}>Сменить тему</ChangeTeme>
    </WrapperInput>
  )
}

export default Input