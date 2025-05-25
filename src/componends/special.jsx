import React from "react";
import "./special.css";
import video from "../assets/images/video.mp4";

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="/assets/images/video.mp4" type="video/mp4" />
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
