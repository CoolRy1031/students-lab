import Student from "./Student";


const StudentList = (props) => {
  return ( 
    <>
    {props.students.map(student =>
      <Student key={student.id} student={student}/>
      )}
    </>
  )
}

export default StudentList;