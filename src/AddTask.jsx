import { useEffect,useState } from "react";
const AddTask=({setTasks, tasks})=>{
 const addTaskFunc = () => {
  const currentTask=prompt('Specify task to add:')
  setTasks((curr)=>[...curr, { task: currentTask, status: false }]);
};
useEffect(() => {}, [tasks]);

return (
  <div>
    <button onClick={addTaskFunc}>Add task</button>
  </div>
);
}

export default AddTask;