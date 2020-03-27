import React from 'react';
import PropTypes from 'prop-types';

//state is managed in App
const InputBox = ({ messages, handleChange, handleSubmit, input }) => {    



    return (
       <form className='inputBox' onSubmit={handleSubmit}>
           <label >Your Message:
               <input type='text' name='message' value={input} onChange={handleChange}/>
           </label>
            <input type='submit' value ='Submit' />
       </form>
    );
}

InputBox.propTypes = {
    messages: PropTypes.array,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired
}



export default InputBox;

