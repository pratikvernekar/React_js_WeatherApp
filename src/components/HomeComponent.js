import React, { useEffect } from "react";

import { useState } from "react";
import likeactive from "../assets/images/02_Home_Favourite/Group/icon_favourite_Active.png";
import Weatherdetails from "./Weatherdetails";
import likeinactive from "../assets/images/icon_favourite.png";
import moment from "moment";
import sunny from "../assets/images/01_Home/background/icon_mostly_sunny.png";
import { getWeather } from "../services/Api";
import { useDispatch } from "react-redux";
import { addSearchData } from "../Redux/WeatherSlice";
function HomeComponent({ cityname }) {
  const dispatch = useDispatch();
  const [tempToggle, settemptoggle] = useState(false);
  const [liked, setliked] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    setTimeout(async () => {
      const response = await getWeather(cityname.name);
      // console.log("%%%%%", response);
      setWeatherData(response);
      dispatch(addSearchData(response));
    }, 1000);
  }, [cityname]);
  return (
    <div>
      {JSON.stringify(weatherData) !== "{}" ? (
        <>
          <div className="weatherdetails">
            <p className="datetimetext">
              {moment().format("ddd, DD MMM YYYY h:mm:a")}
            </p>
            <p className="citytext">
              {cityname.name},{cityname.region}
            </p>
            <div>
              {liked ? (
                <button
                  className="favbtn"
                  onClick={() => {
                    // console.log("gggg");
                    setliked(!liked);
                  }}
                >
                  <img src={likeactive} />
                </button>
              ) : (
                <button
                  className="favbtn"
                  onClick={() => {
                    // console.log("gggg");
                    setliked(!liked);
                  }}
                >
                  <img src={likeinactive} />
                </button>
              )}

              <span className="addfavtext">Add to favourite</span>
            </div>
            <img src={sunny} className="climateimg" />
            <div className="temperaturetext">
              {tempToggle ? (
                <>
                  <span className="temperaturetext">
                    {(weatherData.main.temp - 273.15).toFixed(1)}
                  </span>{" "}
                  <button
                    onClick={() => settemptoggle(!tempToggle)}
                    style={{ border: "0px", background: "transparent" }}
                  >
                    <span>&#8451;{"  "}</span>
                  </button>
                </>
              ) : (
                <>
                  <span className="temperaturetext">
                    {((weatherData.main.temp - 273.15) * 1.8 + 32).toFixed(1)}
                  </span>
                  <button
                    onClick={() => settemptoggle(!tempToggle)}
                    style={{ border: "0px", background: "transparent" }}
                  >
                    {" "}
                    <span>&#8457;</span>
                  </button>
                </>
              )}

              <p className="climatetext">
                {weatherData.weather[0].description}
              </p>
            </div>
          </div>

          <Weatherdetails WeatherData={weatherData} />
        </>
      ) : (
        <div
          style={{
            textAlign: "center",
            // border: "1px solid",
            margin: "300px auto",
            opacity: "0",
            animation: "search 1s ease 0.3s 1 forwards",
          }}
        >
          Search a City
        </div>
      )}
    </div>
  );
}

export default HomeComponent;
