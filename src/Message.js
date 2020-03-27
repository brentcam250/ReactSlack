import React from 'react';
import PropTypes from 'prop-types';

//Mostly formatting for a single message
function Message ({ message }){


    return (
        <div className='Message'>
            <i className='Avatar' src='' alt='placeholder'></i>
            <div className='Message-header'>
                <h3 className='Message-user'>{message.user}</h3>
                {message.timestamp}
                <div className='Message-content'> 
                    {message.content}
                </div>
            </div>
        </div>
    )
}
//not required because its possible to not have any messages
Message.propTypes ={
    message: PropTypes.object
}

export default Message;