import "./favourite.css";
import img from "../../assets/images/03_Favourite_blank/Group38/group/icon_nothing.png";
import { CardMobile, CardWeb } from "../../components/cards/Cards";
import { useSelector } from "react-redux";

function FavouriteMobile() {
  const weatherData = useSelector((state) => state.weather.searchData);

  return (
    <div className="favcontainer">
      {weatherData.length !== 0 ? (
        <div className="no-fav-div">
          <img src={img}></img>
          <p>No Recent added</p>
        </div>
      ) : null}
      {/* <div className="mobile-view">
        <CardMobile />
      </div>
      <div className="web-view">
        <CardWeb />
      </div> */}
    </div>
  );
}

export default FavouriteMobile;
