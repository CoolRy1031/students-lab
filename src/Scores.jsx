const Scores = (props) => {
  return (
    <div>
      <h5>{props.score.score}</h5>
      <h5>{props.score.date}</h5>
    </div>
  )
}

export default Scores