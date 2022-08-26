// import IndexAPI from "../api/indexAPI";
import Header from "../components/header";
import Footer from "../components/footer";
import { Grid } from "@mui/material";

//HoursLocations functional component
const HoursLocations = () => {
  //HoursLocations component
  return (
    <Grid>
      {/* Main navigation component */}
      <Header />
      {/* HoursLocations content */}
      <Grid>
        <Grid sx={{ position: "relative" }}>
          <Grid className="page-image-div">
            <img src={`./images/pasta2.jpg`} alt="" className="page-image" />
          </Grid>
        </Grid>
        <Grid
          className="page-image-overlay"
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        >
          <p className="page-image-title">Hours & Locations</p>
        </Grid>
        <Grid sx={{ position: "relative" }}>
          <Grid
            sx={{
              margin: "0 40px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              color: "white",
            }}
          >
            <Grid
              sx={{
                margin: "40px",
                padding: "0 50px",
                alignContent: "center",
                textAlign: "center",
              }}
            >
              <Grid sx={{ position: "relative" }}>
                <Grid>
                  <img
                    className="location-image"
                    src="images/location-0.jpg"
                    alt="Kendall location"
                  />
                </Grid>
                <Grid
                  sx={{ position: "absolute" }}
                  className="location-image-overlay"
                >
                  <p className="location-image-title">Kendall</p>
                </Grid>
              </Grid>
              <Grid sx={{ display: "grid", gap: "20px" }}>
                <Grid>
                  <Grid>HOURS</Grid>
                  <Grid sx={{ textAlign: "justify" }}>
                    <Grid sx={{ margin: "10px 0" }}>
                      MONDAY-THURSDAY 12:00PM – 11:00PM
                    </Grid>
                    <Grid sx={{ margin: "10px 0" }}>
                      FRIDAY 12:00PM – 12:00AM
                    </Grid>
                    <Grid sx={{ margin: "10px 0" }}>
                      SATURDAY 12:00PM – 12:00AM
                    </Grid>
                    <Grid sx={{ margin: "10px 0" }}>
                      SUNDAY 11:00AM – 10:00PM
                    </Grid>
                    <Grid sx={{ margin: "10px 0" }}>
                      HAPPY HOUR MON-FRI 3:00PM – 7:00PM
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid>LOCATION</Grid>
                  <Grid sx={{ textAlign: "justify" }}>
                    <Grid sx={{ margin: "10px 0" }}>12344 SW 55 ST</Grid>
                    <Grid sx={{ margin: "10px 0" }}>MIAMI, FL 55555</Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sx={{
                margin: "40px",
                padding: "0 50px",
                alignContent: "center",
                textAlign: "center",
              }}
            >
              <Grid sx={{ position: "relative" }}>
                <Grid>
                  <img
                    className="location-image"
                    src="images/location-0.jpg"
                    alt="Kendall location"
                  />
                </Grid>
                <Grid
                  sx={{ position: "absolute" }}
                  className="location-image-overlay"
                >
                  <p className="location-image-title">Kendall</p>
                </Grid>
              </Grid>
              <Grid sx={{ display: "grid", gap: "20px" }}>
                <Grid>
                  <Grid>HOURS</Grid>
                  <Grid sx={{ textAlign: "justify" }}>
                    <Grid sx={{ margin: "10px 0" }}>
                      MONDAY-THURSDAY 12:00PM – 11:00PM
                    </Grid>
                    <Grid sx={{ margin: "10px 0" }}>
                      FRIDAY 12:00PM – 12:00AM
                    </Grid>
                    <Grid sx={{ margin: "10px 0" }}>
                      SATURDAY 12:00PM – 12:00AM
                    </Grid>
                    <Grid sx={{ margin: "10px 0" }}>
                      SUNDAY 11:00AM – 10:00PM
                    </Grid>
                    <Grid sx={{ margin: "10px 0" }}>
                      HAPPY HOUR MON-FRI 3:00PM – 7:00PM
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid>LOCATION</Grid>
                  <Grid sx={{ textAlign: "justify" }}>
                    <Grid sx={{ margin: "10px 0" }}>12344 SW 55 ST</Grid>
                    <Grid sx={{ margin: "10px 0" }}>MIAMI, FL 55555</Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sx={{
                margin: "40px",
                padding: "0 50px",
                alignContent: "center",
                textAlign: "center",
              }}
            >
              <Grid sx={{ position: "relative" }}>
                <Grid>
                  <img
                    className="location-image"
                    src="images/location-0.jpg"
                    alt="Kendall location"
                  />
                </Grid>
                <Grid
                  sx={{ position: "absolute" }}
                  className="location-image-overlay"
                >
                  <p className="location-image-title">Kendall</p>
                </Grid>
              </Grid>
              <Grid sx={{ display: "grid", gap: "20px" }}>
                <Grid>
                  <Grid>HOURS</Grid>
                  <Grid sx={{ textAlign: "justify" }}>
                    <Grid sx={{ margin: "10px 0" }}>
                      MONDAY-THURSDAY 12:00PM – 11:00PM
                    </Grid>
                    <Grid sx={{ margin: "10px 0" }}>
                      FRIDAY 12:00PM – 12:00AM
                    </Grid>
                    <Grid sx={{ margin: "10px 0" }}>
                      SATURDAY 12:00PM – 12:00AM
                    </Grid>
                    <Grid sx={{ margin: "10px 0" }}>
                      SUNDAY 11:00AM – 10:00PM
                    </Grid>
                    <Grid sx={{ margin: "10px 0" }}>
                      HAPPY HOUR MON-FRI 3:00PM – 7:00PM
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid>LOCATION</Grid>
                  <Grid sx={{ textAlign: "justify" }}>
                    <Grid sx={{ margin: "10px 0" }}>12344 SW 55 ST</Grid>
                    <Grid sx={{ margin: "10px 0" }}>MIAMI, FL 55555</Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Footer component */}
      <Footer />
    </Grid>
  );
};

// export async function getStaticProps() {

//   //Provide the cart quantity as a prop to the hours locations component
//   return {
//     // props: {

//     // },
//     revalidate: 1,
//   };
// }

export default HoursLocations;
