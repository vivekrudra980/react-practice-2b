const Country = props => {
  const {details, makeVisited} = props
  const {id, name, isVisited} = details

  const onMakeVisit = () => {
    makeVisited(id)
  }

  return (
    <li>
      <p>{name}</p>
      {isVisited === true ? (
        <p>Visited</p>
      ) : (
        <button type="button" onClick={onMakeVisit}>
          Visit
        </button>
      )}
    </li>
  )
}
export default Country
