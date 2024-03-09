import React from 'react';
import JitsiMeetingComponent from './JitsiMeetingComponent';

const App = () => {

    const [userName, setUserName] = useState('John Doe');
//Logic to retrive username based appointment
  return (
    <div>
      <h1>Meeting with Tutor</h1>
      <JitsiMeetingComponent user={userName}/>
    </div>
  );
};

export default App;