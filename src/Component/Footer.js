import React from "react";
import "../styles/Footer.css";
import FbIcon from "@material-ui/icons/Facebook";
import InstaIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FbIcon />
        <InstaIcon />
        <TwitterIcon />
      </div>
      <p> &copy; 2021 pizzarea.com </p>
    </div>
  );
}

export default Footer;
