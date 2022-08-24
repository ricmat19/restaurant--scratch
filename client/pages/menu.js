// import IndexAPI from "../api/indexAPI";
import Header from "../components/header";
import Footer from "../components/footer";
import { Grid } from "@mui/material";

//Menu functional component
const Menu = () => {
  //Menu component
  return (
    <Grid>
      {/* Main navigation component */}
      <Header />
      {/* Menu content */}
      <Grid>Hello</Grid>
      {/* Footer component */}
      <Footer />
    </Grid>
  );
};

// export async function getStaticProps() {

//   //Provide the cart quantity as a prop to the menu component
//   return {
//     // props: {

//     // },
//     revalidate: 1,
//   };
// }

export default Menu;
