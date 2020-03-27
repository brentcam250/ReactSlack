import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import ContentArea from './ContentArea';
import InputBox from './InputBox';


//maintain state for the currently selected channel or user.
function App() {
  //state for which channel/user is currently selected.
  //show relevant data for selected channel
  const [selected, setSelected] = useState(0);

  //helper function to find the correct channel number given a channel name
  const setChannel = (channelName) =>{
    for(var i in data){
      if(data[i].channel === channelName){

        setSelected(i);
      }
    }
  };

  //state for new message.
  const [input, setInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    //input already been set, this just handles the submit
    const newMessage = {
        id: Math.random(),
        user: 'you',
        timestamp: Date(Date.now()).toString(),
        avatar: '',
        content: input
    };
    //this is weird shouldnt edit data in place like this but its just dummy data...
    (data[selected].data.push(newMessage));

    //return input to nothing after submit.
    setInput('');
  }

  const handleChange = event => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <span>
        <Sidebar selected={selected} setChannel={setChannel}/>
      </span>
      <span>
        <ContentArea selected={selected} data={data} channel={data[selected].channel}/>
        <InputBox messages={data[selected].data} handleSubmit={handleSubmit} handleChange={handleChange} input={input}/>
      </span>
    </div>
  );
}


//some dummy data to feed into app
const data =[
  {
    channelId: 0,
    channel: 'general',
    data: [
      {
        id: 1,
        user: 'brent',
        timestamp: 'Wed Jul 27 2016 22:15:06 GMT-0400(EDT)',
        avatar: '',
        content: 'hey i submit message' 
      },
      {
        id: 2,
        user: 'Joe',
        timestamp: 'Wed Jul 27 2016 22:15:06 GMT-0400(EDT)',
        avatar: '',
        content: 'hey i Joe' 
      },
    ]
  },
  {
    channelId: 1,
    channel: 'help',
    data: [
      {
        id: 1,
        user: 'brent',
        timestamp: 'Wed Jul 27 2016 22:15:06 GMT-0400(EDT)',
        avatar: '',
        content: 'hey i want help' 
      },
      {
        id: 2,
        user: 'Joe',
        timestamp: 'Wed Jul 27 2016 22:15:06 GMT-0400(EDT)',
        avatar: '',
        content: 'hey i Joe need help' 
      },
    ]
  },
  {
    channelId: 2,
    channel: 'react',
    data: [
      {
        id: 1,
        user: 'brent',
        timestamp: 'Wed Jul 27 2016 22:15:06 GMT-0400(EDT)',
        avatar: '',
        content: 'hey i want react help' 
      },
      {
        id: 2,
        user: 'Joe',
        timestamp: 'Wed Jul 27 2016 22:15:06 GMT-0400(EDT)',
        avatar: '',
        content: 'hey i Joe need react  help' 
      },
    ]
  },
  {
    channelId: 3,
    channel: 'Dave',
    data: [
      {
        id: 1,
        user: 'Dave',
        timestamp: 'Wed Jul 27 2016 22:15:06 GMT-0400(EDT)',
        avatar: '',
        content: 'hey i Dave' 
      },
      {
        id: 2,
        user: 'Joe',
        timestamp: 'Wed Jul 27 2016 22:15:06 GMT-0400(EDT)',
        avatar: '',
        content: 'hey Dave I joe' 
      },
    ]
  },
  {
    channelId: 4,
    channel: 'Sarah',
    data: [
      {
        id: 1,
        user: 'Sarah',
        timestamp: 'Wed Jul 27 2016 22:15:06 GMT-0400(EDT)',
        avatar: '',
        content: 'hey i Sarah' 
      },
      {
        id: 2,
        user: 'Joe',
        timestamp: 'Wed Jul 27 2016 22:15:06 GMT-0400(EDT)',
        avatar: '',
        content: 'hey Sarah I joe' 
      },
    ]
  },
  {
    channelId: 5,
    channel: 'Zack',
    data: [
      {
        id: 1,
        user: 'Zack',
        timestamp: 'Wed Jul 27 2016 22:15:06 GMT-0400(EDT)',
        avatar: '',
        content: 'hey i Dave' 
      },
      {
        id: 2,
        user: 'Joe',
        timestamp: 'Wed Jul 27 2016 22:15:06 GMT-0400(EDT)',
        avatar: '',
        content: 'hey Zack I joe' 
      },
    ]
  },
]



export default App;
