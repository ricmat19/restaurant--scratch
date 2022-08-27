import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

//Main navigation functional component
const Header = () => {
  //Next router function
  const router = useRouter();

  return (
    <header className="navbar-div">
      <div className="nav-row">
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <a className="menu-toggle">
            <nav>
              <Grid
                onClick={() => router.push("/")}
                sx={{
                  textAlign: "center",
                  alignSelf: "center",
                  cursor: "pointer",
                }}
              >
                <Grid sx={{ width: "200px" }}>
                  <img
                    className="menu-burger-logo restaurant-logo"
                    src="/images/cool-cat-cafe.png"
                    alt="logo"
                  />
                </Grid>
              </Grid>
              <MenuIcon className="menu-icon" />
            </nav>
          </a>
        </label>
        <nav className="navbar">
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
                  className="main-logo restaurant-logo"
                  src="/images/cool-cat-cafe.png"
                  alt="logo"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid className="navbar-links">
            <Grid
              onClick={() => router.push("/menu")}
              sx={{
                textAlign: "center",
                alignSelf: "center",
                cursor: "pointer",
              }}
              className="nav-link-container"
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
              className="nav-link-container"
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
              className="nav-link-container"
            >
              <Grid className="nav-link">
                <h1>about</h1>
              </Grid>
            </Grid>
            <Grid
              onClick={() => router.push("/reservations")}
              sx={{
                textAlign: "center",
                alignSelf: "center",
                cursor: "pointer",
              }}
              className="nav-link-container"
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
              className="nav-link-container"
            >
              <Grid className="nav-link">
                <h1>contact</h1>
              </Grid>
            </Grid>
          </Grid>
        </nav>
      </div>
    </header>
  );
};

export default Header;
