import PropTypes from 'prop-types'



const Filter = ({ filterContacts}) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input onChange={filterContacts} id="filter" type="text" />
    </>

  )
}

Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired
}

export default Filter
