// import { Formik, Form, ErrorMessage } from "formik";
// import { Component } from "react";
// import styles from './my-phonebook.module.scss';
// import * as yup from 'yup';
// import { nanoid } from "nanoid";

//     const schema = yup.object().shape({
//     name: yup.string().required(),
//     number: yup.number().required().positive().integer(),
// });

// class MyPhonebook extends Component {
//     state = {
//         contacts: [],
//         filter: '',
//         name: '',
//         number: '',
//     }
//     handleChange = evt => {
//         const { name, value } = evt.currentTarget;
//         this.setState({
//             [name]: value
//         });
//     };

//     handleSubmit = evt => {
//         evt.preventDefault();
//         this.setState(prevState => {
//             const { name, number, contacts } = prevState;
//             const isDublicate = contacts.find(contact => contact.number === number);
//             if (isDublicate) {
//                 return alert(`${number} is already in contacts`)
//             }
//             const newContact = {
//                 id: nanoid(),
//                 name,
//                 number,
//             }
//             return { contacts: [newContact, ...contacts] }
//             // this.props.onSubmit(this.state);
        
//         })
//         this.reset();
//     }
//     reset = () => {
//         this.setState({ name: '', number: '' });
//     };
//     removeContact = (id) => {
//         this.setState(({ contacts }) => {
//             const newContacts = contacts.filter(contact => contact.id !== id)
//             return { contacts: newContacts }
//         }

//         )
        
//     }
//    getContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };
  

//     render() {
//         const { name, number } = this.state;
//         const contacts = this.getContacts();
//         const myContacts = contacts.map(({ name, number, id }) => <li key={id}>{name}:{number} <button onClick={()=>this.removeContact(id)} type="button">Delete</button></li> )
      
//         return (
//             <>
//             <div className={styles.wrapper}>
//                 <div>
//                         <h2>Phonebook</h2>
//                         <Formik
//                             initialValues={{ name: '', number:'' }} validationSchema = {schema}
  
//                         >
//                              <Form autoComplete="off"  onSubmit={this.handleSubmit}>
//                                 <label htmlFor = 'name'>Name
//                                     <input
             
// type="text"
// name="name"
// value={name}
// onChange={this.handleChange}
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//   required
                                    
       
//                                 />
//                                    <ErrorMessage component={MyPhonebook} name="name" />
//                                 </label>  
//                                 <label htmlFor = 'number'>Number
//                                       <input
//   type="tel"
// name="number"
// value={number}
//  onChange={this.handleChange}
// placeholder ="+3(0__)__-__-___"
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//   required
// />
//                                    <ErrorMessage component={MyPhonebook} name="number" />
//                                 </label>  
                              
//             <button type = 'submit'>Add contact</button>
//                       </Form>   
//                         </Formik>
                       
//                 </div>
//                     <div>
//                         <h2>Contacts</h2> 
//                         <div>
//                             <label>Find contacts by name</label>
//                             <input name="filter" onChange={this.handleChange} placeholder ="Find contact"></input>
//                         </div>
//                         <ul>
//                            {myContacts}
//                         </ul>    
//                 </div>   
//             </div> 
//         </>)
       
//     }

// }


// export default MyPhonebook;


