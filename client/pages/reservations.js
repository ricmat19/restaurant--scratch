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
      {/* Reservations content */}
      <Grid>Hello</Grid>
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
