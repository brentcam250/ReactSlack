import React from 'react';
import PropTypes from 'prop-types';


// this guy formats the channels/ people in the sidebar
function SidebarSubCat ({ data, setChannel }) {

        return (   
            
            <>
                
                <div />
                    <ul className='channel-list'>
                         {data.map(item=>
                         
                         <li key={item.id} className='channel' onClick={()=>setChannel(item.name)}>
                             #
                             {item.name}
                             </li>)}
                    </ul>
                
            </>
        );
}

// these i set as not required because it could be possible to not have any channels setup yet.
SidebarSubCat.propTypes = {
    data: PropTypes.array,
    setChannel: PropTypes.func.isRequired
}

export default SidebarSubCat;