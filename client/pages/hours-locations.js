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
      <Grid>Hello</Grid>
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
