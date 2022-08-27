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
      <Grid>
        <Grid sx={{ position: "relative" }}>
          <Grid className="page-image-div">
            <img
              src={`./images/frenchToast.jpg`}
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
          <p className="page-image-title">Contact</p>
        </Grid>
        <form>
          <Grid
            sx={{
              position: "relative",
              zIndex: "3",
              backgroundColor: "rgb(26, 26, 26)",
              color: "white",
              fontSize: "16px",
              padding: "40px 20%",
              justifyContent: "center",
            }}
          >
            <Grid
              sx={{
                border: "white solid 2px",
                padding: "40px",
                backgroundColor: "black",
              }}
            >
              <Grid
                sx={{
                  display: "grid",
                  padding: "20px 0",
                }}
              >
                <input type="text" className="form-field" placeholder="name" />
              </Grid>
              <Grid
                sx={{
                  display: "grid",
                  padding: "20px 0",
                }}
              >
                <input
                  type="email"
                  className="form-field"
                  placeholder="email"
                />
              </Grid>
              <Grid
                sx={{
                  display: "grid",
                  padding: "20px 0",
                }}
              >
                <input
                  type="tel"
                  className="form-field"
                  placeholder="phone #"
                />
              </Grid>
              <Grid
                sx={{
                  display: "grid",
                  padding: "20px 0",
                }}
              >
                <textarea
                  className="form-textarea"
                  rows="10"
                  placeholder="message"
                ></textarea>
              </Grid>
              <Grid
                sx={{
                  textAlign: "center",
                }}
              >
                <button className="page-button" type="submit">
                  Submit
                </button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
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
