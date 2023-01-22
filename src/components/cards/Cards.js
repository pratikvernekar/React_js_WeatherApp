import React from "react";
import "./Cards.css";
import likeactive from "../../assets/images/02_Home_Favourite/Group/icon_favourite_Active.png";
function CardMobile({weatherData}) {
 
  return (
    <div className="card-container">
      <div className="top-text-div">
        <p>{weatherData.length} City added to favourite </p>
        <p>Remove all </p>
      </div>
      {weatherData.length > 0
        ? weatherData.map((e) => {
            return (
              <div className="card">
                <div className="card-innertext-div">
                  <p className="card-city-text">{e.name}</p>
                  <img src={likeactive} className="card-climate-img" />
                  <span className="card-temp-text"> 31 </span>
                  <span> °C </span>
                  <span className="card-climate-text"> Mostly sunny</span>
                </div>
                <img src={likeactive} className="card-likeactive-img" />
              </div>
            );
          })
        : null}
    </div>
  );
}
function CardWeb({weatherData}) {
 
  return (
    <div>
      <div className="card-container-web">
        <div className="top-text-div">
          <p>{weatherData.length} City added to favourite </p>
          <p>Remove all </p>
        </div>
        {weatherData.length > 0
          ? weatherData.map((e) => {
              return (
                <div className="card">
                  <p className="card-city-text">{e.name}</p>
                  <div className="web">
                    <img src={likeactive} className="card-climate-img" />
                    <span className="card-temp-text"> {(e.main.temp_min - 273.15).toFixed(1)} </span>
                    <span> °C </span>
                    <span className="card-climate-text"> {e.weather[0].main}</span>
                  </div>

                  <img src={likeactive} className="card-likeactive-img" />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export { CardMobile, CardWeb };
