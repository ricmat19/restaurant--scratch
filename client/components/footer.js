import {
  faInstagram,
  faTwitter,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";

//Footer function component
const Footer = () => {
  //Footer component
  return (
    <footer>
      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: "300px",
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
        }}
      >
        <Grid>
          <h1>Locations</h1>
          <p>Kendall</p>
          <p>Brickell</p>
          <p>South Beach</p>
        </Grid>
        <Grid className="align-center footer-pad">
          <h1>Follow Us:</h1>
          {/* Link to instagram */}
          <Grid
            sx={{
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              gap: "10px",
            }}
          >
            <a
              href="https://www.instagram.com/arthouse_19/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="icon fab fa-instagram ig-logo"
                icon={faInstagram}
              />
            </a>
            {/* Link to twitter */}
            <a
              href="https://twitter.com/House19Art"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="icon fab fa-twitter twitter-logo"
                icon={faTwitter}
              />
            </a>
            {/* Link to youtube */}
            <a
              href="https://www.youtube.com/channel/UCaem2HqM0PPak4fvf-uxlnQ"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="icon fab fa-youtube youtube-logo"
                icon={faYelp}
              />
            </a>
          </Grid>
        </Grid>
        <Grid>
          <h1>Contact Us</h1>
          <p>(305) 111-1121</p>
          <p>restaurant@eat.com</p>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
