import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30PM',
            reminder: true,
        },
        {
            id: 2,
            text: 'Food Shopping',
            day: 'Feb 5th at 3:00PM',
            reminder: false,
        },
        {
            id: 3,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30PM',
            reminder: true,
        }
    ]
)

//Add task
const addTask = (task) => {
  console.log(task)
}

//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
}


  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks!'}
    </div>
  );
}

export default App;
