import React, { useState } from "react";
import "./Searchpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { getDataFromApi } from "../../services/Api";

function Searchpage({ setCityName, setSearchPage }) {
  const [text, setText] = useState("");
  const [cities, setCities] = useState([]);

  return (
    <div className="search-main">
      <div
        className="search"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          color: "black",
        }}
      >
        <button
          style={{ border: "0px", background: "transparent" }}
          onClick={() => {
            setSearchPage(false);
          }}
        >
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            color="black"
            style={{
              position: "absolute",
              left: "30px",
              top: "28px",
              fontSize: "2.2rem",
            }}
          />
        </button>
        <input
          onChange={async (e) => {
            setText(e.target.value);
            const response = await getDataFromApi(text);
            setCities(response);
          }}
          type="text"
          className="searchtextinput"
          placeholder="Search City"
          name="search"
          style={{
            width: "70%",
            height: "50px",
            border: "1px solid",
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255,0.4)",
          }}
        />
      </div>
      {cities.length > 0
        ? cities.map((e) => {
            return (
              <div>
                <button
                  onClick={() => {
                    setCityName(e);
                    setSearchPage(false);
                  }}
                  style={{
                    border: "0px",
                    background: "transparent",
                    width: "100%",
                  }}
                >
                  <p className="city-text">{e.name}</p>
                </button>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Searchpage;
