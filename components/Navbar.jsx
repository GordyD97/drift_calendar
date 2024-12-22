import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { borders } from "@mui/system";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo Space */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            {/* Placeholder for Logo */}
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box>
          <Button sx={{ borderRadius: "16px" }} color="inherit">
            Home
          </Button>
          <Button sx={{ borderRadius: "16px" }} color="inherit">
            Calendar
          </Button>
          <Button sx={{ borderRadius: "16px" }} color="inherit">
            Track
          </Button>
          <Button sx={{ borderRadius: "16px" }} color="inherit">
            About Our Club
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
    // the nav bar has has border radius added to the buttons for styling. adding a entire theme page for the case of reducing in line styling. 
  );
};

export default Navbar;
