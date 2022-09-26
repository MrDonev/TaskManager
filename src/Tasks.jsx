import { useState, useEffect } from "react";
import AddTask from './AddTask'
import ShowTasks from "./ShowTasks";
const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const addTaskFunc = () => {
    const currentTask=prompt('Specify task to add:')
    setTasks([{ task: currentTask, status: false }]);
  };
  useEffect(() => {
    if(tasks.length!==0)localStorage.setItem('allTasks',JSON.stringify(tasks))
  }, [tasks]);
  return (
    <>
    <AddTask setTasks={setTasks} tasks={tasks}/>
    <ShowTasks setTasks={setTasks} tasks={tasks}/>
    </>
  )
};

export default Tasks;
