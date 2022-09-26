

const ShowTasks=({setTasks,tasks})=>{

return (
  <>
  <button onClick={()=>console.log(JSON.parse(localStorage.getItem('allTasks')))}>Show tasks list</button>
  </>
)
}

export default ShowTasks;