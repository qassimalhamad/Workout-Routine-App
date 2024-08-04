
import './App.css'

function App() {
  const exercises = [
    { name: 'Dead-Lift', completed: true },
    { name: 'Push-Up', completed: true },
    { name: 'Set-Up', completed: false },
  ];


  const exercisesList = exercises.map((exercise, index) => (
    <li key={index} className={exercise.completed ? 'completed' : 'not-completed'}>
      {exercise.name}
    </li>
  ))
      
    return (
      <>
        <h1>exercises List</h1>

        {exercisesList}
      </>
    );
  }

export default App