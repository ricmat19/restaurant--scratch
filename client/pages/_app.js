import "../public/css/index.css";
import { Grid } from "@mui/material";

// Root component
function MyApp({ Component, pageProps }) {
  return (
      <Grid>
        <Component {...pageProps} />
      </Grid>
  );
}

export default MyApp;
