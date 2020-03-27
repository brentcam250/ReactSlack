import React from 'react';
import MessageList from './MessageList';
import PropTypes from 'prop-types';

//for the right pane of the viewing area takes in data passed from app.
//import message list, 
function ContentArea ({ selected, data, channel }){

    return(
        <span className='ContentArea'>
        <h1>
            {channel}
        </h1>
        <MessageList messages={data[selected].data} />
        </span>
        
    );
}

ContentArea.propTypes = {
    data: PropTypes.array,
    channel: PropTypes.string.isRequired
}




export default ContentArea;