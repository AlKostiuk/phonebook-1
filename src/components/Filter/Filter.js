import PropTypes from 'prop-types'



const Filter = ({ filterContacs}) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input onChange={filterContacs} id="filter" type="text" />
    </>

  )
}

Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired
}

export default Filter
