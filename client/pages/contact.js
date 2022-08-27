import Header from "../components/header";
import Footer from "../components/footer";
import { Grid } from "@mui/material";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

//Contact functional component
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

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
        <form ref={form} onSubmit={sendEmail}>
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
                <input
                  type="text"
                  className="form-field"
                  placeholder="name"
                  name="name"
                  required
                />
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
                  name="email"
                  required
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
                  name="phone"
                  required
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
                  name="message"
                  required
                ></textarea>
              </Grid>
              <Grid
                sx={{
                  textAlign: "center",
                }}
              >
                <input className="page-button" type="submit" value="Send" />
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

export default Contact;
