import React from "react";
import GCPLogo from "../assets/logos/Google_Cloud.png";
import "../styles/watermark.css";

const Watermark = ({ size = "small", style = {} }) => (
  <div className={`watermark watermark-${size}`} style={style}>
    <img src={GCPLogo} alt="Google Cloud" className={`watermark-icon watermark-icon-${size}`} />
    <span className={`watermark-text watermark-text-${size}`}>
      Powered by <b>Atgeir Solutions</b>,<b>Google Cloud</b>
    </span>
  </div>
);

export default Watermark; 