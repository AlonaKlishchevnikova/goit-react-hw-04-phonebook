// import { Component } from "react";
import { useState } from "react";
import { Form, Formik} from "formik";
import inititalState from "./initialState";
import PropTypes from "prop-types";
// import styles from './my-phonebook.module.scss';
import * as yup from 'yup';
            const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required().positive().integer(),
            });

const MyPhonebookForm = ({ onSubmit }) => {
    const [state, setState] = useState({...inititalState})

    const handleChange = ({target}) => {
        const {name, value} = target;
        setState(prevState => {
            return {...prevState, [name]: value}
        })
    }
        const handleSubmit = e => {
        e.preventDefault();
        onSubmit({name, number});
        setState({...inititalState});
    }
    const { name, number } = state;
     return (
             
             <Formik 
                            initialValues={{ name: '', number:'' }} validationSchema = {schema}
  
                        >
                <Form autoComplete="off" onSubmit={handleSubmit}>
                    
                                <label htmlFor = 'name'>Name
                                    <input
             
type="text"
name="name"
value={name}
onChange={handleChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
                                    
       
                                />
                                  
                                </label>  
                                <label htmlFor = 'number'>Number
                                      <input
  type="tel"
name="number"
value={number}
 onChange={handleChange}
placeholder ="+3(0__)__-__-___"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
                                 
                                </label>  
                              
            <button type = 'submit'>Add contact</button>
                      </Form>  
             </Formik>
          
        )
} 
export default MyPhonebookForm;

MyPhonebookForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}   



