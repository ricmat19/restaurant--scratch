// import IndexAPI from "../api/indexAPI";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { TextField } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

//Reservations functional component
const Reservations = () => {
  const [location, setLocation] = useState("Select a location");
  const [count, setCount] = useState("Select party size");
  const [day, setDay] = useState(dayjs(new Date().today));
  const [time, setTime] = useState();

  const changeLocation = (event) => {
    const {
      target: { value },
    } = event;
    setLocation(value);
  };

  const changeCount = (event) => {
    const {
      target: { value },
    } = event;
    setCount(value);
  };

  const changeDay = (day) => {
    setDay(day);
  };

  const changeTime = (time) => {
    setTime(time);
  };

  const createReservation = (e) => {
    e.preventDefault();
    console.log(location, count, day, time);
  };

  //Reservations component
  return (
    <Grid>
      {/* Main navigation component */}
      <Header />
      {/* About content */}
      <Grid>
        <Grid sx={{ position: "relative" }}>
          <Grid className="page-image-div">
            <img src={`./images/chocolate.jpg`} alt="" className="page-image" />
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
          <p className="page-image-title">Reservations</p>
        </Grid>
        <form onSubmit={createReservation}>
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
            <div data-aos="fade-down">
              <Grid
                sx={{
                  padding: "30px",
                  textAlign: "center",
                }}
                className="reservation-container"
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Grid sx={{ color: "black", fontSize: "25px" }}>
                    Set your Reservation
                  </Grid>
                  <Grid
                    sx={{
                      padding: "30px",
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(250px, auto))",
                      justifyContent: "center",
                      gap: "20px",
                      textAlign: "center",
                    }}
                  >
                    <Grid
                      sx={{
                        backgroundColor: "white",
                        border: "solid black 2px",
                        padding: "30px",
                      }}
                    >
                      <Select
                        sx={{ textAlign: "center", width: "100%" }}
                        displayEmpty
                        value={location}
                        onChange={changeLocation}
                        renderValue={(selected) => {
                          return selected;
                        }}
                      >
                        <MenuItem disabled value="Select a location">
                          Select a location
                        </MenuItem>
                        <MenuItem value="Kendall">Kendall</MenuItem>
                        <MenuItem value="Brickell">Brickell</MenuItem>
                        <MenuItem value="South Beach">South Beach</MenuItem>
                      </Select>
                    </Grid>
                    <Grid
                      sx={{
                        backgroundColor: "white",
                        border: "solid black 2px",
                        padding: "30px",
                      }}
                    >
                      <Select
                        sx={{ textAlign: "center", width: "100%" }}
                        displayEmpty
                        value={count}
                        onChange={changeCount}
                        renderValue={(selected) => {
                          return selected;
                        }}
                      >
                        <MenuItem disabled value="Select party size">
                          Select party size
                        </MenuItem>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        <MenuItem value="6">6</MenuItem>
                        <MenuItem value="7">7</MenuItem>
                        <MenuItem value="8">8</MenuItem>
                        <MenuItem value="9">9</MenuItem>
                        <MenuItem value="10">10</MenuItem>
                        <MenuItem value="11">11</MenuItem>
                        <MenuItem value="12">12</MenuItem>
                        <MenuItem value="13">13</MenuItem>
                        <MenuItem value="14">14</MenuItem>
                        <MenuItem value="15">15</MenuItem>
                      </Select>
                    </Grid>
                    <Grid
                      sx={{
                        backgroundColor: "white",
                        border: "solid black 2px",
                        padding: "30px",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="MM/DD/YYYY"
                        value={day}
                        onChange={changeDay}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                    <Grid
                      sx={{
                        backgroundColor: "white",
                        border: "solid black 2px",
                        padding: "30px",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      <TimePicker
                        sx={{ width: "100%" }}
                        label="Time"
                        value={time}
                        onChange={changeTime}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Grid>
                  </Grid>
                </LocalizationProvider>
                <input
                  className="page-button"
                  type="submit"
                  value="Make Reservation"
                />
              </Grid>
            </div>
          </Grid>
        </form>
      </Grid>
      {/* Footer component */}
      <Footer />
    </Grid>
  );
};

// export async function getStaticProps() {

//   //Provide the cart quantity as a prop to the reservations component
//   return {
//     // props: {

//     // },
//     revalidate: 1,
//   };
// }

export default Reservations;
