import React from 'react';
import SidebarSubCat from './SidebarSubCat';
import PropTypes from 'prop-types';

//houses logic for the sidebar. 
//pass in list for channels and people.

function Sidebar ({ selected, setChannel}) {
    

    return(
        <div className='Sidebar'>
            <div />
            <h3>Channels</h3>
            <SidebarSubCat data ={channels} setChannel={setChannel}/>
            <div />
            <h3>People</h3>
            <SidebarSubCat data ={people} setChannel={setChannel} />
        </div>
    );
}

//some dummy data
const channels = [
    {
        id: 1,
        name: 'general',
        data: ''
    },
    {
        id: 2,
        name: 'help',
        data: ''
    },
    {
        id: 3,
        name: 'react',
        data: ''
    },
];

const people = [
    {
        id: 'a',
        name: 'Dave',
        data: ''
    },
    {
        id: 'b',
        name: 'Sarah',
        data: ''
    },
    {
        id: 'c',
        name: 'Zack',
        data: ''
    },
];

Sidebar.propTypes = {

    setChannel: PropTypes.func.isRequired
}
export default Sidebar;