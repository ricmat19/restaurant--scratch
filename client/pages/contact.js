// import IndexAPI from "../api/indexAPI";
import Header from "../components/header";
import Footer from "../components/footer";
import { Grid } from "@mui/material";

//Contact functional component
const Contact = () => {
  //Contact component
  return (
    <Grid>
      {/* Main navigation component */}
      <Header />
      {/* Contact content */}
      <Grid>Hello</Grid>
      {/* Footer component */}
      <Footer />
    </Grid>
  );
};

// export async function getStaticProps() {

//   //Provide the cart quantity as a prop to the contact component
//   return {
//     // props: {

//     // },
//     revalidate: 1,
//   };
// }

export default Contact;
