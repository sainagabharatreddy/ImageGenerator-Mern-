import React, { useRef } from 'react';
import "./video.css"
const video="https://homedesigns.ai/web/images/headvid.webm";


const VideoPlayer = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className='video-container'>
      <h2>Our web processing Demo</h2>
      <video ref={videoRef} autoPlay loop width="1" height="1">
        <source src={video} type="video/mp4" />
     
        Your browser does not support the video tag.
      </video>

      
      <video ref={videoRef} autoPlay loop width="640" height="360">
        <source src={video} type="video/mp4" />
        
        Your browser does not support the video tag.
      </video>
      <div>
        <button onClick={playVideo}></button>
        <button onClick={pauseVideo}></button>
      </div>
    </div>
    
  );
};

export default VideoPlayer;
