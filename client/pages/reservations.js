// import IndexAPI from "../api/indexAPI";
import Header from "../components/header";
import Footer from "../components/footer";
import { Grid } from "@mui/material";

//Reservations functional component
const Reservations = () => {
  //Reservations component
  return (
    <Grid>
      {/* Main navigation component */}
      <Header />
      {/* About content */}
      <Grid>
        <Grid sx={{ position: "relative" }}>
          <Grid className="page-image-div">
            <img
              src={`./images/chocolate.jpg`}
              alt=""
              className="page-image"
            />
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
          <p className="page-image-title">Reservations</p>
        </Grid>
        <Grid
          sx={{
            position: "relative",
            zIndex: "3",
            backgroundColor: "rgb(26, 26, 26)",
            color: "white",
            fontSize: "16px",
            padding: "40px 80px",
          }}
        ></Grid>
      </Grid>
      {/* Footer component */}
      <Footer />
    </Grid>
  );
};

// export async function getStaticProps() {

//   //Provide the cart quantity as a prop to the reservations component
//   return {
//     // props: {

//     // },
//     revalidate: 1,
//   };
// }

export default Reservations;
