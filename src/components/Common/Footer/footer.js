import React from "react";
import "./styles.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoTracker<span>.</span>
      </h2>
      <div className="social-links">
        <a href="mailto:shrinawathe@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://www.linkedin.com/in/shriram-nawathe">
          <LinkedInIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com/imshreeeeee">
          <InstagramIcon className="social-link" />
        </a>
        <a href="https://www.twitter.com">
          <TwitterIcon className="social-link" />
        </a> 
      </div>
    </div>
  );
}

export default Footer;
