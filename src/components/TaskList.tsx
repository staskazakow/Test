import { useEffect, useState } from "react";
import { DeleteButton, TaskItem, TaskSucces, TaskText, WrapperTask } from "../Styled/Styled";
export interface Task {
    id:number,
    task:string,
    data:string,
    succes:boolean,
}
interface Props{
    taskArray:Array<Task>;
    DeleteTask:(id:number) => void;
    SetSucces: (id:number) => void;
    teme:boolean;
}
const TaskList = ({taskArray,DeleteTask,SetSucces,teme}:Props) => {
    const [isMobile,setIsMobile] = useState(false)
    useEffect(() => {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches)
    },[])
    return(
        <WrapperTask tema = {teme}>
            <div >
               {taskArray.length > 1 ? taskArray.slice(1).map((e:Task) => {
                return(
                    <TaskItem tema = {teme}>
                        {isMobile ? <TaskText isSucces = {e.succes}>{e.task.length > 57 ? e.task.slice(0,57) + "..." : e.task}</TaskText>
                        :
                        <TaskText isSucces = {e.succes}>{e.task.length > 180 ? e.task.slice(0,180) + "..." : e.task}</TaskText>    
                    }
                        <div style={{display:"flex",gap:"3px"}}>
                            <DeleteButton onClick={() => DeleteTask(e.id)}>Удалить</DeleteButton>
                            <TaskSucces onClick={() => SetSucces(e.id)}>Выполнено</TaskSucces>
                        </div>
                    </TaskItem>
                )
               }) : ""}
            </div>
        </WrapperTask>
    )
}
export default TaskList