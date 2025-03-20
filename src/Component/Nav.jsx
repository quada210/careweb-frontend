import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Box,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Import the AccountCircle icon
import logo from "./Bi/favicon.ico"; 

const Nav = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Hide the nav bar on specific pages
  const hiddenPaths = [
    '/nhome', '/food', '/medicine', '/order', '/cart', '/payment', '/feedback', '/details'
  ];

  if (hiddenPaths.includes(location.pathname)) {
    return null;
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const breadcrumbs = location.pathname
    .split("/")
    .filter((path) => path)
    .map((path, index, arr) => {
      const routeTo = `/${arr.slice(0, index + 1).join("/")}`;
      return (
        <Link
          key={routeTo}
          component={RouterLink}
          to={routeTo}
          sx={{
            textDecoration: "none",
            color: "white",
            "&:hover": { color: "#ff8a50" },
          }}
        >
          {path.charAt(0).toUpperCase() + path.slice(1)}
        </Link>
      );
    });

  return (
    <div style={{ backgroundColor: "black" }}>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(135deg, #ff5722, #ff8a50)",
          padding: "0 10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img 
              src={logo} // Use the imported logo here
              alt="Logo"
              style={{ width: "40px", height: "40px" }} // Adjust the size as needed
            />
          </Box>

          {/* Breadcrumbs (if needed) */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Breadcrumbs sx={{ color: "white" }}>
              {breadcrumbs}
            </Breadcrumbs>
          </Box>

          {/* Right Side Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Home Icon */}
            <IconButton>
              <RouterLink to="/home" style={{ textDecoration: "none", color: "white" }}>
                <HomeIcon sx={{ fontSize: 30, color: "white" }} />
              </RouterLink>
            </IconButton>

            {/* User Icon */}
            <IconButton onClick={handleMenuOpen}>
              <AccountCircleIcon sx={{ fontSize: 30, color: "white" }} />
            </IconButton>

            {/* Menu for Profile and Login */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ "& .MuiMenu-paper": { backgroundColor: "#333", color: "white" } }}
            >
              <MenuItem onClick={handleMenuClose}>
                <RouterLink to="/profile" style={{ textDecoration: "none", color: "white" }}>
                  Profile
                </RouterLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <RouterLink to="/login" style={{ textDecoration: "none", color: "white" }}>
                  Login
                </RouterLink>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;