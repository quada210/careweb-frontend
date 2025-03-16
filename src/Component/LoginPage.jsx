import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Container,
  Link,
  Alert,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (password.length < 6) {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    axios
      .post("http://localhost:4040/login", { email, password })
      .then((result) => {
        console.log(result.data);
        if (result.data === "successful") {
          navigate("/nhome");
        } else {
          setLoginError("Invalid email or password. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        setLoginError("Something went wrong. Please try again later.");
      });
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev); // Toggle password visibility
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff", // White background for the page
        padding: "20px",
      }}
    >
      <Container
        sx={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 6px 10px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 3,
            textAlign: "center",
            color: "#333", // Dark text color for better readability
          }}
        >
          Welcome Back!
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, textAlign: "center", color: "#666" }}
        >
          Please log in to continue.
        </Typography>

        {loginError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {loginError}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            type="email"
            required
            error={emailError}
            helperText={emailError ? "Please enter a valid email address." : ""}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            sx={{
              mb: 3,
              backgroundColor: "#f9f9f9", // Light background for input fields
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            name="password"
            type={showPassword ? "text" : "password"} // Toggle password type
            required
            error={passwordError}
            helperText={
              passwordError ? "Password must be at least 6 characters." : ""
            }
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            sx={{
              mb: 4,
              backgroundColor: "#f9f9f9", // Light background for input fields
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#ff5722", // Orange button
              color: "#fff", // White text color
              fontWeight: "bold",
              padding: "12px",
              fontSize: "16px",
              textTransform: "none",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#ff8a50", // Lighter shade of orange on hover
              },
            }}
          >
            Log In
          </Button>
        </form>

        <Box sx={{ textAlign: "center", mt: 3 }}>
          {/* Uncomment this if you want a sign-up link */}
          {/* <Typography variant="body2">
            Don't have an account?{" "}
            <Link
              sx={{ cursor: "pointer", color: "#ff5722", fontWeight: "bold" }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Link>
          </Typography> */}
        </Box>

        {/* Uncomment this if you want a forgot password link */}
        {/* <Box sx={{ textAlign: "center", mt: 1 }}>
          <Link
            sx={{ cursor: "pointer", color: "#ff5722", fontSize: "0.9rem" }}
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </Link>
        </Box> */}
      </Container>
    </Box>
  );
};

export default LoginPage;
