// import IndexAPI from "../api/indexAPI";
import Header from "../components/header";
import Footer from "../components/footer";
import { Grid } from "@mui/material";

//About functional component
const About = () => {
  //About component
  return (
    <Grid>
      {/* Main navigation component */}
      <Header />
      {/* About content */}
      <Grid>Hello</Grid>
      {/* Footer component */}
      <Footer />
    </Grid>
  );
};

// export async function getStaticProps() {

//   //Provide the cart quantity as a prop to the about component
//   return {
//     // props: {

//     // },
//     revalidate: 1,
//   };
// }

export default About;
