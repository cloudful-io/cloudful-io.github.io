import React from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#eee',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

    return (
        <>
        <Box
        sx={{
          position: 'relative',
          width: '100vw',
          height: '400px',  // Adjust height as needed
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
          Build Once, Deploy Many.
        </Typography>
      </Box>
      
        </>
            
    );
  };

  export default Home;