import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';


//taking in an array of messages, output them in a list of Message components for viewing.
function MessageList ({ messages }) {
    
    if(!messages) return 'no messages';

    return (
        <div>
            <ul className='MessageList'>
                {messages.map(message=>
                    <li key={message.id} className='MessageList-message'>
                        <Message message={message} />
                    </li>
                )}
            </ul>
        </div>

    );


}

MessageList.propTypes ={
    messages: PropTypes.array.isRequired,
}

export default MessageList;