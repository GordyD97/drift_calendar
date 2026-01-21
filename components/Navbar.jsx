import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import InfoIcon from "@mui/icons-material/Info";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo Space */}
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center"}}>
          <Link href="/" color="inherit" sx={{ textDecoration: 'none' }}>
            <Typography variant="h6" component="div" sx={{ fontFamily: 'Roboto, sans-serif' }}>
              My Club Events
            </Typography>
          </Link>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link href="/" color="inherit">
            <HomeIcon /> Home
          </Link>
          <Link href="/calendar" color="inherit">
            <CalendarTodayIcon /> Calendar
          </Link>
          <Link href="/about" color="inherit">
            <InfoIcon /> About Us
          </Link>
        </Box>

        {/* User Authentication */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="outlined" color="secondary" sx={{ borderRadius: "16px" }}>
            Login
          </Button>
          <Button variant="contained" color="primary" sx={{ borderRadius: "16px" }}>
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
