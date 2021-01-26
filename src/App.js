import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"

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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
