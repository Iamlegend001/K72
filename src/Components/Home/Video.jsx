import React from "react";

const Video = () => {
  return (
    <>
      <div className="h-full w-full">
        {" "}
        <video
          className="h-full w-full object-cover"
          src="/video/Video1.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </>
  );
};

export default Video;
