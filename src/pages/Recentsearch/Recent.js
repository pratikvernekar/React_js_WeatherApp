import React from "react";
import "./Recent.css";
import img from "../../assets/images/03_Favourite_blank/Group38/group/icon_nothing.png";
import { useSelector } from "react-redux";
import { CardMobile, CardWeb } from "../../components/cards/Cards";
function Recent() {
  const weatherData = useSelector((state) => state.weather.searchData);
  return (
    <div className="favcontainer">
      {weatherData.length === 0 ? (
        <div className="no-fav-div">
          <img src={img}></img>
          <p>No Recent added</p>
        </div>
      ) : null}
      

      <div className="mobile-view">
        
        <CardMobile weatherData={weatherData} />
      </div>
      <div className="web-view">
        <CardWeb weatherData={weatherData} />
      </div>
    </div>
  );
}

export default Recent;
