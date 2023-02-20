// import { Component } from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import MyPhonebookForm from "./MyPhonebookForm/MyPhonebookForm";
import MyPhonebookList from "./MyPhonebookList/MyPhonebookList";
import MyPhonebookFilter from "./MyPhonebookFilter/MyPhonebookFilter";

const MyPhonebook = () => {
    const [contacts, setContacts] = useState(() => {
        const contacts = JSON.parse(localStorage.getItem('my-contacts'));
        return contacts ? contacts:[]
    });
    const [filter, setFilter] = useState("");
    useEffect(() => {
        localStorage.setItem("my-contacts", JSON.stringify(contacts));
    },[contacts])
    const isDublicate = (name, number) => {
        const normalizedName = name.toLowerCase();
        const findNumber = contacts.find(
            contact => contact.number === number
        );
        const result = contacts.find(({ name, number }) => {
            return (name.toLowerCase() === normalizedName || number === findNumber)
        })

        return Boolean(result)
    }

    const addContact = ({ name, number }) => {
        if (isDublicate(name, number)) {
            alert(`${name} ${number} is already in contacts`);
            return false;
        }

        setContacts(prevContacts => {
            const newContact = {
                id: nanoid(),
                name,
                number,
            }

            return [newContact, ...prevContacts] 
        })
        return true;
    }
    const removeContact = (id) => {
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id))
    }
        const handleFilter = ({target})=> {
        setFilter(target.value)
    }
   const getFilteredContact=()=> {
        if(!filter) {
            return contacts;
        }
        const normalizedFilter = filter.toLowerCase()
        const result = contacts.filter(({name, number})=> {
            return (name.toLowerCase().includes(normalizedFilter))
        })

        return result;
    }
    const filteredContact = getFilteredContact();
       const isContacts = Boolean(filteredContact.length);
     return (
            <div>
                    <div >
                        <h4>Phonebook</h4>
                        <MyPhonebookForm onSubmit={addContact} />
                    </div>
                <div >
                    <h4>Contacts</h4>
                        <MyPhonebookFilter value={filter} handleChange={handleFilter} />
                        {isContacts && <MyPhonebookList removeContact={removeContact} contacts={filteredContact} />}
                        {!isContacts && <p>No contacts in list</p>}
                    </div>
                
            </div>
        )
}

export default MyPhonebook ;