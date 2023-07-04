import { Component } from "react"


import style from './app.module.css'
import ContactsForm from './ContactsForm/ContactsForm'
import ContactsList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";







export class App extends Component  {
  state = {
  contacts: [],
  filter: "",
}

componentDidMount() {
  if (localStorage.getItem('contacts')) {
    this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) })
  }
}
componentDidUpdate() {
  localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
}

saveContact = (contact) => {

  if (this.state.contacts.find(obj => obj.name.toLowerCase() === contact.name.toLowerCase())) {
    return alert(`${contact.name} is already in contacts.`)
  }
  this.setState((prevState) => ({
    contacts: [...prevState.contacts, contact],
  }));
};






deleteContact = (evt) => {
  this.setState((prevState) => ({
    contacts: prevState.contacts.filter(contact => contact.id !== evt.target.closest('li').id),
  }))}

  filterContacts = (evt) => {
    this.setState({ filter: evt.target.value.trim() });
  }


  render(){
  return (
    <div className={style.container}>
    <h1 className={style.title}>Contacts</h1>
    <div className={style.formcontainer}>
      <h2 className={style.formtitle}>Add Contact</h2>
      <ContactsForm saveContact={this.saveContact}/>
    </div>
    {this.state.contacts.length ? <div className={style.contactscontainer}>
      <h2 className={style.contactstitle}>Contacts List</h2>
      <Filter filterContacts={this.filterContacts}/>
      <ContactsList contacts={this.state.filter
                ? this.state.contacts.filter(obj => obj.name.toLowerCase().includes(this.state.filter.toLowerCase()))
                : this.state.contacts}
                deleteContact={this.deleteContact} />
    </div> : <p>Add some contacts</p>}
  </div>
);
}
}
