import './App.css';
import { useState } from 'react';
import { studentList } from './data';
import  StudentList  from './StudentList';


function App() {
  const [students, setStudents] = useState(studentList)
  return (
    <div className="App">
      <StudentList students={students} />
    </div>
  );
}

export default App;
