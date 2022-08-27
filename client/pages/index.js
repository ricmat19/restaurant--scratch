// import IndexAPI from "../api/indexAPI";
import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

//Home functional component
const Home = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselImage, setCarouselImage] = useState("burger2.jpg");
  const [carouselImageTitle, setCarouselImageTitle] = useState("");
  const [carouselImageDescription, setCarouselImageDescription] = useState("");

  const router = useRouter();

  let carousel = [
    "burger2.jpg",
    "chocolate-milkshake.jpg",
    "kabob.jpg",
    "pancakes.jpg",
    "pizza3.jpg",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCarouselIndex(0);
        setCarouselImage(carousel[carouselIndex]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  //Display last carousel Image
  const lastCarouselImage = (index) => {
    try {
      if (index === 0) {
        setCarouselIndex((carousel.length -= 1));
      } else {
        setCarouselIndex(carouselIndex - 1);
      }

      setCarouselImage(carousel[carouselIndex]);
    } catch (err) {
      console.log(err);
    }
  };

  //Display next carousel image
  const nextCarouselImage = (index) => {
    try {
      if (index === carousel.length - 1) {
        setCarouselIndex(0);
      } else {
        setCarouselIndex(carouselIndex + 1);
      }

      setCarouselImage(carousel[carouselIndex]);
    } catch (err) {
      console.log(err);
    }
  };

  // Home component
  return (
    <Grid>
      {/* Main navigation component */}
      <Header />
      {/* Home content */}
      <Grid
        className="restaurant-images-carousel"
        aria-label="restaurant-images"
      >
        <Grid className="carousel-button-container">
          <button
            className="carousel-button back"
            onClick={() => lastCarouselImage(carouselIndex)}
          >
            <FontAwesomeIcon
              className="carousel-arrow-icon"
              icon={faLeftLong}
            />
          </button>
          <button
            className="carousel-button forward"
            onClick={() => nextCarouselImage(carouselIndex)}
          >
            <FontAwesomeIcon
              className="carousel-arrow-icon"
              icon={faRightLong}
            />
          </button>
        </Grid>
        <Grid sx={{ position: "relative" }}>
          <Grid>
            <ul>
              <li className="carousel-item" data-active>
                <img
                  src={`./images/${carouselImage}`}
                  alt=""
                  className="carousel-image"
                />
              </li>
            </ul>
          </Grid>
          <Grid
            className="carousel-image-overlay"
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
          >
            <p className="carousel-title">
              {carouselImageTitle} Delicious Food
            </p>
            <p className="carousel-description">
              {carouselImageDescription} Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <Grid sx={{ display: "grid", justifyContent: "center" }}>
              <button
                className="page-button"
                onClick={() => router.push("/hours-locations")}
              >
                Locations
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
