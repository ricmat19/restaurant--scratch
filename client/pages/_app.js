import "../public/css/index.css";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Root component
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        Aos.init();
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid>
      <Component {...pageProps} />
    </Grid>
  );
}

export default MyApp;
