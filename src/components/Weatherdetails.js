import "./Weatherdetails.css";
import img1 from "../assets/images/01_Home/background/Group6Copy/icon_temperature_info.png";
import img2 from "../assets/images/01_Home/background/Group9/icon_wind_info.png";
import img3 from "../assets/images/01_Home/background/Group6/icon_precipitation_info.png";
import img4 from "../assets/images/01_Home/background/Group8/icon_humidity_info.png";
import img5 from "../assets/images/01_Home/background/Group10/icon_visibility_info.png";
function Weatherdetails({ WeatherData }) {
  // console.log("@@@@", WeatherData);
  return (
    <div className="detailcontainer">
      {JSON.stringify(WeatherData) !== "{}" ? (
        <>
          <div className="detailsbox">
            <img src={img1} />
            <p className="minmaxtext">
              Min-Max <br />
              <p className="minmaxtext">
                {" "}
                {(WeatherData.main.temp_min - 273.15).toFixed(1)}-
                {(WeatherData.main.temp_max - 273.15).toFixed(1)}
              </p>
            </p>
          </div>
          <div className="detailsbox">
            <img src={img2} />
            <p className="minmaxtext">
              Wind <br />
              <p className="minmaxtext">{WeatherData.wind.speed}</p>
            </p>
          </div>
          <div className="detailsbox">
            <img src={img3} />
            <p className="minmaxtext">
              Precipitation <br />
              <p className="minmaxtext">20-30</p>
            </p>
          </div>
          <div className="detailsbox">
            <img src={img4} />
            <p className="minmaxtext">
              Humidity <br />
              <p className="minmaxtext">{WeatherData.main.humidity}</p>
            </p>
          </div>
          <div className="detailsbox">
            <img src={img5} />
            <p className="minmaxtext">
              Visibility <br />
              <p className="minmaxtext">{WeatherData.visibility}</p>
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
}
export default Weatherdetails;
