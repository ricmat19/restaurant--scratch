import { Grid } from "@mui/material";

//Breakfast functional component
const Breakfast = () => {
  //Breakfast component
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
          Breakfast
        </Grid>
        <Grid
          className="menu-section"
        >
          <div data-aos="fade-right" data-aos-duration="2000">
            <Grid sx={{ textAlign: "right" }}>
              <img className="menu-image" src="images/frenchToast.jpg" alt="" />
            </Grid>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
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
          </div>
        </Grid>
        <Grid
          className="menu-section"
        >
          <div data-aos="fade-right" data-aos-duration="2000">
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
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <Grid sx={{ textAlign: "left" }}>
              <img className="menu-image" src="images/pancakes.jpg" alt="" />
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Breakfast;
