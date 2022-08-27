import { Grid } from "@mui/material";

//Lunch functional component
const Lunch = () => {
  //Lunch component
  return (
    <Grid
      sx={{
        fontSize: "30px",
        justifyContent: "center",
        padding: "15px 10%",
      }}
    >
      <Grid
        sx={{
          textAlign: "center",
        }}
      >
        <Grid
          sx={{
            fontSize: "30px",
            textAlign: "center",
            padding: "15px",
          }}
        >
          Happy Hour
        </Grid>
        <Grid sx={{ display: "grid", gridTemplateColumns: "auto auto" }}>
          <Grid sx={{ textAlign: "right" }}>
            <img className="menu-image" src="images/burger.jpg" alt="" />
          </Grid>
          <Grid sx={{ textAlign: "left" }}>
            <p className="menu-section-title">SPARKLING</p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
          </Grid>
        </Grid>
        <Grid sx={{ display: "grid", gridTemplateColumns: "auto auto" }}>
          <Grid sx={{ textAlign: "right" }}>
            <p className="menu-section-title">SPARKLING</p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
          </Grid>
          <Grid sx={{ textAlign: "left" }}>
            <img className="menu-image" src="images/chickenWings.jpg" alt="" />
          </Grid>
        </Grid>
        <Grid sx={{ display: "grid", gridTemplateColumns: "auto auto" }}>
          <Grid sx={{ textAlign: "right" }}>
            <img className="menu-image" src="images/pizza.jpg" alt="" />
          </Grid>
          <Grid sx={{ textAlign: "left" }}>
            <p className="menu-section-title">SPARKLING</p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
            <p className="menu-section-item">
              BENVOLIO, PROSECCO, FRIULI, ITALY | $15 - $58
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Lunch;
