import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
          <Button color="inherit">Home</Button>
          <Button color="inherit">Calendar</Button>
          <Button color="inherit">Track</Button>
          <Button color="inherit">About Our Club</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar