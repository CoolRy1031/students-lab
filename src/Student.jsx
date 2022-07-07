import Scores from "./Scores"


const Student = (props) => {
  const scoreData = props.student.scores.map(score =>{
    return <Scores score={score} />
  })

  return (
    <>
      <h1>{props.student.name}</h1>
      <h5>{props.student.bio}</h5>
      <h5>{scoreData}</h5>
    </>
  )
}

export default Student