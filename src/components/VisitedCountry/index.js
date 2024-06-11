const VisitedCountry = props => {
  const {details, removeCountry} = props
  const {id, name, imageUrl} = details

  const onRemoveCountry = () => {
    removeCountry(id)
  }

  return (
    <li>
      <img src={imageUrl} alt="thumbnail" />
      <p>{name}</p>
      <button type="button" onClick={onRemoveCountry}>
        Remove
      </button>
    </li>
  )
}

export default VisitedCountry
