import React from "react";
import AppNavbar from "./components/AppNavbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Services from "./pages/Services";

//import PrivateRoute from "./PrivateRoute";
 
function App() {

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#F4F8FE'
      }
    },
  });


  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <AppNavbar/>
      <Routes>
        {/* Public Routes */}
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/services" element={<Services/>} />


        {/* Protected Routes */}
       

        {/* Default Home Page */}
        <Route path="/" element={<Home/>} />
      </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
