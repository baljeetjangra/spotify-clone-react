import React from "react";
import "../assets/css/Body.css";
import Header from "./Header";
import { useDataLayerValue } from "../DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavouriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavouriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => {
          <SongRow tranck={item.track} />;
        })}
      </div>
    </div>
  );
};

export default Body;
