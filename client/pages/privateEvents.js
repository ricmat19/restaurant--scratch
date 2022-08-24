// import IndexAPI from "../api/indexAPI";
import Header from "../components/header";
import Footer from "../components/footer";
import { Grid } from "@mui/material";

//PrivateEvents functional component
const PrivateEvents = () => {
  //PrivateEvents component
  return (
    <Grid>
      {/* Main navigation component */}
      <Header />
      {/* PrivateEvents content */}
      <Grid>Hello</Grid>
      {/* Footer component */}
      <Footer />
    </Grid>
  );
};

// export async function getStaticProps() {

//   //Provide the cart quantity as a prop to the private events component
//   return {
//     // props: {

//     // },
//     revalidate: 1,
//   };
// }

export default PrivateEvents;
