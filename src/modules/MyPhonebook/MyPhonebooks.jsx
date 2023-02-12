import { Component } from "react";
import { nanoid } from "nanoid";

import MyPhonebookForm from "./MyPhonebookForm/MyPhonebookForm";
import MyPhonebookList from "./MyPhonebookList/MyPhonebookList";
import MyPhonebookFilter from "./MyPhonebookFilter/MyPhonebookFilter";

class MyPhonebook extends Component {


    state = {
        contacts: [],
        filter: "",
    }
    componentDidMount() {
        const contacts = JSON.parse(localStorage.getItem("my-contacts"));
        if (contacts?.length) {
          this.setState({ contacts })   
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        const { contacts } = this.state;
        if (prevState.contacts.length !== contacts.length)
            localStorage.setItem("my-contacts", JSON.stringify(contacts));
    }

    removeContact = (id) => {
        this.setState(({contacts}) => {
            const newContact = contacts.filter(contact => contact.id !== id);
            return {contacts: newContact}
        })
    }

    addContact = ({name, number}) => {
        if(this.isDublicate(name, number)) {
            alert(`${name} ${number} is already in contacts`); 
            return false;
        }

        this.setState(prevState => {
            const {contacts} = prevState;

            const newContact = {
                id: nanoid(),
                name,
                number,
            }

            return {contacts: [newContact, ...contacts]}
        })
        return true;
    }

    handleFilter = ({target})=> {
        this.setState({filter: target.value})
    }

    isDublicate(name, number) {
        const normalizedName = name.toLowerCase();
        const findNumber = this.state.contacts.find(
      contact => contact.number === number
    );
        const {contacts} = this.state;
        const result = contacts.find(({name, number}) => {
            return (name.toLowerCase() === normalizedName || number === findNumber)
        })

        return Boolean(result)
    }

    getFilteredContact() {
        const {filter, contacts} = this.state;
        if(!filter) {
            return contacts;
        }
        
        const normalizedFilter = filter.toLowerCase()
        const result = contacts.filter(({name, number})=> {
            return (name.toLowerCase().includes(normalizedFilter))
        })

        return result;
    }

    render() {
        const { filter } = this.state;
        const {addContact,  removeContact, handleFilter} = this;
        const contacts = this.getFilteredContact();
        const isContacts = Boolean(contacts.length);
  
        return (
            <div>
               
               
                    <div >
                        <h4>Phonebook</h4>
                        <MyPhonebookForm onSubmit={addContact} />
                    </div>
                <div >
                    <h4>Contacts</h4>
                        <MyPhonebookFilter value={filter} handleChange={handleFilter} />
                        {isContacts && <MyPhonebookList removeContact={removeContact} contacts={contacts} />}
                        {!isContacts && <p>No contacts in list</p>}
                    </div>
                
            </div>
        )
    }
}

export default MyPhonebook ;