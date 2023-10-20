import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white rounded-lg text-black p-4 px-12 text-xl hover:bg-opacity-80">
          ▶︎ Play
        </button>
        <button className="bg-gray-500 bg-opacity-50 mx-2 rounded-lg text-white p-4 px-12 text-xl hover:bg-opacity-40">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
