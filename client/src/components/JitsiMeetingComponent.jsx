import React from 'react';
import { JitsiMeeting } from 'react-jitsi';

const JitsiMeetingComponent = ({ user }) => {
  // Define the domain, room name, and other configurations
  const roomName = 'LinguaConnect';
  const configOverwrite = {
    startWithAudioMuted: true,
    disableModeratorIndicator: true,
    startScreenSharing: true,
    enableEmailInStats: false,
  };
  const interfaceConfigOverwrite = {
    DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
  };
  const userInfo = {
    displayName: user.firstName,
  };

  // Define the function to handle the onApiReady event
  const handleApiReady = (externalApi) => {
    // You can attach custom event listeners or store the external API for executing commands
    console.log('Jitsi Meet API is ready:', externalApi);
  };

  // Define the function to handle the getIFrameRef event
  const handleGetIFrameRef = (iframeRef) => {
    // You can adjust the height of the iframe here
    iframeRef.style.height = '400px';
  };

  return (
    <div>
      <h2>Jitsi Meeting</h2>
      <JitsiMeeting
        domain={domain}
        roomName={roomName}
        configOverwrite={configOverwrite}
        interfaceConfigOverwrite={interfaceConfigOverwrite}
        userInfo={userInfo}
        onApiReady={handleApiReady}
        getIFrameRef={handleGetIFrameRef}
      />
    </div>
  );
};

export default JitsiMeetingComponent;