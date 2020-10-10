import React from "react";
import "../assets/css/SongRow.css";
const SongRow = ({ track }) => {
  return (
    <div className="songRow">
      <img
        className="songRow__album"
        src={track?.album?.images[0].url}
        alt=""
      />
      <div className="songRow__info">
        <h1>{track?.name}</h1>
        {track.artists.map((artist) => artist?.name).join(", ")}
      </div>
    </div>
  );
};

export default SongRow;
