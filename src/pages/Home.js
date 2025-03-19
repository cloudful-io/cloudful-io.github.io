import React from "react";
import Box from '@mui/material/Box';
import { Grid2 } from '@mui/material';
import Typography from '@mui/material/Typography';

const Home = () => {
    return (
        <>
        <Box
        sx={{
          position: 'relative',
          width: '100vw',
          height: '500px',  // Adjust height as needed
          margin: 0,
          padding: 0,
          backgroundImage: 'url(/assets/images/hero.jpg)',  // Add the URL of your hero image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            color: '#aaa',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',  // Optional: Adds a transparent dark overlay for contrast
            padding: '10px 20px',
            borderRadius: '5px',
          }}
        >
          Complex solutions architected from secure building blocks
        </Typography>
      </Box>

      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingTop="20px"
    >
      <Grid2 container spacing={2} justifyContent="center" alignItems="center" direction="column">
        {/* First row */}
        <Grid2 container spacing={4} justifyContent="center">
          <Grid2 xs={5}>
            <Box
              sx={{
                width: 400,
                height: 400,
                borderRadius: 2,
                bgcolor: 'primary.main',
                boxShadow: 1,
              }}
            >
              1st container
            </Box>
          </Grid2>
          <Grid2 xs={5}>
            <Box
              sx={{
                width: 400,
                height: 400,
                borderRadius: 2,
                bgcolor: 'primary.main',
                boxShadow: 1,
              }}
            >
              2nd container
            </Box>
          </Grid2>
        </Grid2>

        {/* Second row */}
        <Grid2 container spacing={4} justifyContent="center" sx={{ marginTop: 2 }}>
          <Grid2 xs={5}>
            <Box
              sx={{
                width: 400,
                height: 400,
                borderRadius: 2,
                bgcolor: 'primary.main',
                boxShadow: 1,
              }}
            >
              3rd container
            </Box>
          </Grid2>
          <Grid2 xs={5}>
            <Box
              sx={{
                width: 400,
                height: 400,
                borderRadius: 2,
                bgcolor: 'primary.main',
                boxShadow: 1,
              }}
            >
              4th container
            </Box>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
        </>
            
    );
  };

  export default Home;