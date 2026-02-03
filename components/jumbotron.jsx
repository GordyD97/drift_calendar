import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Typography, Button } from "@mui/material";
import rcdriftstock0 from '/src/assets/rcdriftstock0.jpg';
import rcdriftstock1 from '../assets/rcdriftstock1.jpg';
import rcdriftstock2 from '../assets/rcdriftstock2.jpg';
import rcdriftstock3 from '../assets/rcdriftstock3.jpg';


function Jumbotron() {
  const items = [
    {
      title: "Stunning Beach View",
      description: "rc cars.",
      imageUrl: '/src/assets/rcdriftstock0.jpg', // Replace with your actual image URL
    },
    {
      title: "rc drift",
      description: "rc cars.",
      imageUrl: '/src/assets/rcdriftstock1.jpg', // Replace with your actual image URL
    },
    {
      title: "Stunning Beach View",
      description: "rc cars.",
      imageUrl: '/src/assets/rcdriftstock2.jpg', // Replace with your actual image URL
    },
    {
      title: "Stunning Beach View",
      description: "rc cars.",
      imageUrl: '/src/assets/rcdriftstock3.jpg', // Replace with your actual image URL
    },
    // Add more items as needed
  ];

  return (
    <Box
      sx={{
        height: "500px",
        position: "relative",
        overflow: "hidden", // Hide overflow for a clean look
      }}
    >
      {/* Background overlay or gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay
        }}
      />

      <Carousel
        showDots={true}
        next={
          <Button variant="outlined" color="primary">
            Next
          </Button>
        }
        prev={
          <Button variant="outlined" color="primary">
            Prev
          </Button>
        }
        autoPlay={false}
        transitionMs={500}
        animationMs={300}
      >
        {items.map((item, i) => (
          <Box
            key={i}
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Image or other content */}
            <Box
              sx={{
                width: "100%",
                height: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.imageUrl ? (
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={500}
                  height={300}
                />
              ) : (
                // Placeholder if no image is available
                <Typography variant="h6">No Image Available</Typography>
              )}
            </Box>

            {/* Content overlay */}
            <Box
              sx={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white", // Text color on top of image
                padding: "2rem",
              }}
            >
              <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
                {item.title}
              </Typography>
              <Typography variant="body1">{item.description}</Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default Jumbotron;

// next step is to include some place holder images for cars. 
