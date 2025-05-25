import React from "react";
import "./special.css";
const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video className="background-video" autoPlay loop muted playsInline>
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        <h1 className="video-heading">Welcome to KV Borewells</h1>
        <p className="video-paragraph">
          Providing expert borewell solutions with precision and reliability.
        </p>
      </div>
    </div>
  );
};

export default BackgroundVideo;
