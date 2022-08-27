import { useRouter } from "next/router";
import { useEffect } from "react";
import { Grid } from "@mui/material";

//Main navigation functional component
const Header = () => {
  //Next router function
  const router = useRouter();

  //Get cart content on render
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log("test");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <header>
      <nav>
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "300px",
            backgroundColor: "black",
            color: "white",
            padding: "10px 0",
            borderBottom: "white solid 2px"
          }}
        >
          <Grid
            onClick={() => router.push("/")}
            sx={{
              textAlign: "center",
              alignSelf: "center",
              cursor: "pointer",
            }}
          >
            <Grid className="nav-link">
              <Grid sx={{ width: "200px" }}>
                <img
                  className="restaurant-logo"
                  src="/images/cool-cat-cafe.png"
                  alt="logo"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
            }}
          >
            <Grid
              onClick={() => router.push("/menu")}
              sx={{
                textAlign: "center",
                alignSelf: "center",
                cursor: "pointer",
              }}
            >
              <Grid className="nav-link">
                <h1>menu</h1>
              </Grid>
            </Grid>
            <Grid
              onClick={() => router.push("/hours-locations")}
              sx={{
                textAlign: "center",
                alignSelf: "center",
                cursor: "pointer",
              }}
            >
              <Grid className="nav-link">
                <h1>hours/locations</h1>
              </Grid>
            </Grid>
            <Grid
              onClick={() => router.push("/about")}
              sx={{
                textAlign: "center",
                alignSelf: "center",
                cursor: "pointer",
              }}
            >
              <Grid className="nav-link">
                <h1>about</h1>
              </Grid>
            </Grid>
            <Grid
              onClick={() => router.push("/privateEvents")}
              sx={{
                textAlign: "center",
                alignSelf: "center",
                cursor: "pointer",
              }}
            >
              <Grid className="nav-link">
                <h1>private events</h1>
              </Grid>
            </Grid>
            <Grid
              onClick={() => router.push("/reservations")}
              sx={{
                textAlign: "center",
                alignSelf: "center",
                cursor: "pointer",
              }}
            >
              <Grid className="nav-link">
                <h1>reservations</h1>
              </Grid>
            </Grid>
            <Grid
              onClick={() => router.push("/contact")}
              sx={{
                textAlign: "center",
                alignSelf: "center",
                cursor: "pointer",
              }}
            >
              <Grid className="nav-link">
                <h1>contact</h1>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </nav>
    </header>
  );
};

export default Header;
