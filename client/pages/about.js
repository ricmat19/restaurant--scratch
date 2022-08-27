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
      <Grid>
        <Grid sx={{ position: "relative" }}>
          <Grid className="page-image-div">
            <img
              src={`./images/cinnimonrolls.jpg`}
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
          <p className="page-image-title">About Us</p>
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
        >
          <Grid sx={{lineHeight: "40px"}}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
              euismod elementum nisi quis. Enim neque volutpat ac tincidunt.
              Tempus urna et pharetra pharetra massa. Ut sem nulla pharetra diam
              sit amet nisl suscipit. Vulputate eu scelerisque felis imperdiet
              proin fermentum leo vel orci. In arcu cursus euismod quis viverra
              nibh cras pulvinar. Magna sit amet purus gravida quis blandit
              turpis. Purus sit amet luctus venenatis lectus magna fringilla
              urna. Euismod nisi porta lorem mollis aliquam ut porttitor leo a.
              Morbi tristique senectus et netus et. Sit amet commodo nulla
              facilisi nullam vehicula.
            </p>
            <p>
              Libero volutpat sed cras ornare. Enim nulla aliquet porttitor
              lacus luctus accumsan tortor posuere. Malesuada pellentesque elit
              eget gravida. Dui ut ornare lectus sit amet est. Dictum sit amet
              justo donec. Non nisi est sit amet. Bibendum est ultricies integer
              quis auctor elit sed vulputate mi. Sapien et ligula ullamcorper
              malesuada proin libero. Viverra justo nec ultrices dui sapien eget
              mi proin sed. Nisl nunc mi ipsum faucibus vitae aliquet. Lectus
              sit amet est placerat in egestas erat imperdiet sed.
            </p>
          </Grid>
        </Grid>
      </Grid>
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
