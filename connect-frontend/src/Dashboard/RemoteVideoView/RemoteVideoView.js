import React, { useRef, useEffect } from 'react';
import './RemoteVideoView.css'



const LocalVideoView = props => {
  const { remoteStream } = props;
  const remoteVideoRef = useRef();

  useEffect(() => {
    if (remoteStream) {
      const remoteVideo = remoteVideoRef.current;
      remoteVideo.srcObject = remoteStream;

      remoteVideo.onloadedmetadata = () => {
        remoteVideo.play();
      };
    }
  }, [remoteStream]);

  return (
    <div className = 'videoContainer'>
      <video className= 'videoElement' ref={remoteVideoRef} autoPlay />
    </div>
  );
};

export default LocalVideoView;
