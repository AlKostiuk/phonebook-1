import PropTypes from 'prop-types'

const ContactsList = ({contacts , deleteContact}) => {
  if (!contacts.length) {
    return <p>No contacts</p>}


  return (
    <ul>
     {contacts.map(contact => <li id={contact.id} key={contact.id}>{`${contact.name}: ${contact.number}`}
     <button onClick={deleteContact} type="button">Delete</button></li>)
   }
    </ul>

  )
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired
}

export default ContactsList
