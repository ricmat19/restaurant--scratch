// import IndexAPI from "../api/indexAPI";
import Header from "../components/header";
import Footer from "../components/footer";
import HappyHour from "../components/menus/happyHour";
import Breakfast from "../components/menus/breakfast";
import Lunch from "../components/menus/lunch";
import Dinner from "../components/menus/dinner";
import KidsMenu from "../components/menus/kidsMenu";
import Dessert from "../components/menus/dessert";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";

//Menu functional component
const Menu = () => {
  const [menuTitle, setMenuTitle] = useState("Breakfast");

  //Menu component
  return (
    <Grid>
      {/* Main navigation component */}
      <Header />
      {/* Menu content */}
      <Grid>
        <Grid sx={{ position: "relative" }}>
          <Grid className="page-image-div">
            <img src={`./images/pizza3.jpg`} alt="" className="page-image" />
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
          <p className="page-image-title">Menu</p>
        </Grid>
        <Grid
          sx={{
            position: "relative",
            zIndex: "3",
            backgroundColor: "rgb(26, 26, 26)",
            color: "white",
            fontSize: "16px",
          }}
        >
          <Grid
            sx={{
              position: "relative",
              zIndex: "3",
              backgroundColor: "rgb(26, 26, 26)",
              color: "white",
              fontSize: "16px",
              padding: "40px 0",
              justifyContent: "center",
              textAlign: "center",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, auto))",
              gap: "20px",
            }}
          >
            <button
              className="page-button"
              onClick={() => setMenuTitle("Breakfast")}
            >
              Breakfast
            </button>
            <button
              className="page-button"
              onClick={() => setMenuTitle("Lunch")}
            >
              Lunch
            </button>
            <button
              className="page-button"
              onClick={() => setMenuTitle("Dinner")}
            >
              Dinner
            </button>
            <button
              className="page-button"
              onClick={() => setMenuTitle("Dessert")}
            >
              Dessert
            </button>
            <button
              className="page-button"
              onClick={() => setMenuTitle("Happy Hour")}
            >
              Happy Hour
            </button>
            <button
              className="page-button"
              onClick={() => setMenuTitle("Kids Menu")}
            >
              Kids Menu
            </button>
          </Grid>
          <Grid
            sx={{
              textAlign: "center",
            }}
          >
            {menuTitle === "Breakfast" ? (
              <Breakfast />
            ) : menuTitle === "Lunch" ? (
              <Lunch />
            ) : menuTitle === "Dinner" ? (
              <Dinner />
            ) : menuTitle === "Dessert" ? (
              <Dessert />
            ) : menuTitle === "Happy Hour" ? (
              <HappyHour />
            ) : (
              <KidsMenu />
            )}
          </Grid>
        </Grid>
      </Grid>
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
