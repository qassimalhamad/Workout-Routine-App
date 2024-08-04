
import './App.css'

function App() {
  const courses = [
    { name: 'Math', completed: true },
    { name: 'English', completed: true },
    { name: 'Science', completed: false },
  ];



  const coursesList = courses.map((course, index) => (
    <li key={index} className={course.completed ? 'completed' : 'not-completed'}>
      {course.name}
    </li>
  ))
      
    return (
      <>
        <h1>courses List</h1>
 
        {coursesList}
      </>
    );
  }

export default App