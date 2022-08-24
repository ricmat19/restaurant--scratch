// import IndexAPI from "../api/indexAPI";
import Header from "../components/header";
import Footer from "../components/footer";
import { Grid } from "@mui/material";

//Home functional component
const Home = () => {
  // Home component
  return (
    <Grid>
      {/* Main navigation component */}
      <Header />
      {/* Home content */}
      <Grid></Grid>
      {/* Footer component */}
      <Footer />
    </Grid>
  );
};

// export async function getStaticProps() {

//   //Provide the cart quantity as a prop to the home component
//   return {
//     // props: {

//     // },
//     revalidate: 1,
//   };
// }

export default Home;
