import "../styles/advertisement.css";
import { useState, useEffect } from "react";
import adImage from "../assets/react-ad.svg";
function Advertisement(props) {
  const showAd = false;
  const [ad, setAd] = useState(showAd);
  function handleDisplay() {
    const adBox = document.getElementsByClassName("box")[0];
    adBox.style.display = "none";
  }
  useEffect(() => {
    setInterval(() => {
      setAd(true);
    }, 3000);
  }, []);

  return (
    <>
      {ad == true ? (
        <div className="box">
          <button onClick={handleDisplay}>Close</button>
          <h1 className="ad-text">{props.textValue}</h1>
          <div className="image-box">
            <img src={adImage} alt="react logo" className="ad-img" />
          </div>
        </div>
      ) : (
        <div className="hidden-box"></div>
      )}
    </>
  );
}

export default Advertisement;
