
      
  import PropTypes from "prop-types";


const MyPhonebookList = ({ removeContact, contacts }) => {

    const myContacts = contacts.map(({ id, name, number }) => <li key={id}>{name}:{number}
        <button onClick={() => removeContact(id)} type="button">Delete</button></li>);

    return (
        <ul>
            {myContacts}
        </ul>
    )

}

export default MyPhonebookList;

MyPhonebookList.defaultProps = {
    contacts: []
}

MyPhonebookList.propTypes = {
    removeContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
       name:  PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }))
}    