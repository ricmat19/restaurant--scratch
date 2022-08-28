// import IndexAPI from "../api/indexAPI";
import Header from "../components/header";
import Footer from "../components/footer";
import { Grid } from "@mui/material";
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
  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (Dayjs) => {
    setValue(newValue);
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
          <Grid>Set your Reservation</Grid>
          <Grid
            sx={{
              padding: "30px 0",
              backgroundColor: "white",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid
                sx={{
                  display: "grid",
                  gridTemplateColumns: "auto auto auto",
                  textAlign: "center",
                }}
              >
                <Grid>
                  <Select
                    sx={{ width: "100%" }}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <em>placeholder</em>;
                      }
                    }}
                  >
                    <MenuItem>placeholder</MenuItem>
                    <MenuItem>1</MenuItem>
                    <MenuItem>2</MenuItem>
                    <MenuItem>3</MenuItem>
                    <MenuItem>4</MenuItem>
                    <MenuItem>5</MenuItem>
                    <MenuItem>6</MenuItem>
                    <MenuItem>7</MenuItem>
                    <MenuItem>8</MenuItem>
                    <MenuItem>9</MenuItem>
                    <MenuItem>10</MenuItem>
                    <MenuItem>11</MenuItem>
                    <MenuItem>12</MenuItem>
                    <MenuItem>13</MenuItem>
                    <MenuItem>14</MenuItem>
                    <MenuItem>15</MenuItem>
                  </Select>
                </Grid>
                <Grid sx={{ textAlign: "center" }}>
                  <DesktopDatePicker
                    sx={{ width: "100%" }}
                    label="Date desktop"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
                <Grid sx={{ textAlign: "center" }}>
                  <TimePicker
                    sx={{ width: "100%" }}
                    label="Time"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
              </Grid>
            </LocalizationProvider>
          </Grid>
        </Grid>
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
