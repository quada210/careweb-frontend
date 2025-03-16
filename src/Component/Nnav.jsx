import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { useLocation, Link, useNavigate, Link as RouterLink } from "react-router-dom";

const Nnav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/home");
  };

  const hiddenPaths = ["/home", "/profile", "/login", "/about", "/contact", "/services",'/form','/terms'];

  if (hiddenPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(45deg, #FFA500 30%, #FF8C00 90%)",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      }}
    >
      <Toolbar>
        {/* Logo or Brand Name */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            fontFamily: "'Poppins', sans-serif",
            color: "white",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Feel The Care
        </Typography>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            {/* Home Icon */}
            <IconButton
              color="inherit"
              component={RouterLink}
              to="/nhome"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <HomeIcon sx={{ fontSize: 30 }} />
            </IconButton>

            {/* Feedback Icon */}
            <IconButton
              color="inherit"
              component={RouterLink}
              to="/feedback"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <FeedbackIcon sx={{ fontSize: 30 }} />
            </IconButton>

            {/* Logout Icon */}
            <IconButton
              color="inherit"
              onClick={handleLogout}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <LogoutIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            {/* Mobile Menu Dropdown */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{
                "& .MuiPaper-root": {
                  background: "linear-gradient(45deg, #FFA500 30%, #FF8C00 90%)",
                },
              }}
            >
              {/* Home Icon in Mobile Menu */}
              <MenuItem
                onClick={handleMenuClose}
                component={RouterLink}
                to="/nhome"
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <HomeIcon sx={{ fontSize: 30, color: "white", mr: 2 }} />
                <Typography variant="body1" sx={{ color: "white" }}>
                  Home
                </Typography>
              </MenuItem>

              {/* Feedback Icon in Mobile Menu */}
              <MenuItem
                onClick={handleMenuClose}
                component={RouterLink}
                to="/feedback"
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <FeedbackIcon sx={{ fontSize: 30, color: "white", mr: 2 }} />
                <Typography variant="body1" sx={{ color: "white" }}>
                  Feedback
                </Typography>
              </MenuItem>

              {/* Logout Option for Mobile */}
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  handleLogout();
                }}
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <LogoutIcon sx={{ fontSize: 30, color: "white", mr: 2 }} />
                <Typography variant="body1" sx={{ color: "white" }}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nnav;