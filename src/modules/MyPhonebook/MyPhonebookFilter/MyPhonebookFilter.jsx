
import PropTypes from "prop-types";



const  MyPhonebookFilter = ({filter, handleChange}) => {
    return (
        <div >
            <label>Find contacts by name</label>
            <input name="filter" value={filter} onChange={handleChange} placeholder ="Find contact"></input>
        </div>
    )
}

export default  MyPhonebookFilter;

MyPhonebookFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}