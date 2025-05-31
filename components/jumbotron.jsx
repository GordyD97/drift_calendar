import React from 'react';
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";


const jumbotron = () => {
  return (
    
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "100vh",
          backgroundImage: "url(https://via.placeholder.com/1920x1080)", // Replace with your high-res GIF URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          padding: theme.spacing(4),
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: theme.spacing(4),
            borderRadius: theme.shape.borderRadius,
          }}
        >
          <Typography variant={isMobile ? "h3" : "h1"} gutterBottom>
            Drift Reaperz, Drift Calendar
          </Typography>
          <Typography variant="body1" paragraph>
            Here you will find the next exciting events the Drift Reaperz drift
            team will be holding at their home track.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: theme.spacing(2),
              mt: 2,
            }}
          >
            <Button variant="contained" color="primary" size="large">
              Learn More
            </Button>
            <Button variant="outlined" color="secondary" size="large">
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>
    

    /* in the jumbo tron like the under aromur site put a large scale photo at the top and strech to screen withe media break points then 
    
    add a second div with large H1 text as attention grabber then small text right underneath use that oprtunity to put buttons below. 

    center everytihg. 
    */
  );
}

export default jumbotron