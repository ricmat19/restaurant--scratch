import { Grid } from "@mui/material";

//Dinner functional component
const Dinner = () => {
  //Dinner component
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
            <img className="menu-image" src="images/kabob.jpg" alt="" />
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
            <img className="menu-image" src="images/pizza3.jpg" alt="" />
          </Grid>
        </Grid>
        <Grid sx={{ display: "grid", gridTemplateColumns: "auto auto" }}>
          <Grid sx={{ textAlign: "right" }}>
            <img className="menu-image" src="images/pasta2.jpg" alt="" />
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

export default Dinner;
