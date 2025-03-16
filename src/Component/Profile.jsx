import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Avatar,
  Snackbar,
  Alert,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Profile = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!inputs.name.trim()) newErrors.name = "Full Name is required";
    if (!/\S+@\S+\.\S+/.test(inputs.email)) newErrors.email = "Invalid email format";
    if (!/^\d{10}$/.test(inputs.number)) newErrors.number = "Invalid phone number";
    if (!inputs.password.trim()) newErrors.password = "Password is required";
    else if (inputs.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addHandler = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    try {
      const response = await axios.post("http://localhost:4040/add", inputs);
      setSnackbar({ open: true, message: response.data.message, severity: "success" });
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.response?.data?.error || "Server error. Try again later.",
        severity: "error",
      });
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",  // White background for the page
        color: "#333",            // Dark text color for better readability
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "30px",
          maxWidth: "500px",
          width: "100%",
          backgroundColor: "#fff",  // White background for the form container
          color: "#333",            // Dark text color inside the form
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Avatar sx={{ backgroundColor: "#ff5722", width: 60, height: 60 }}>
              <AccountCircleIcon fontSize="large" />
            </Avatar>
          </Grid>
        </Grid>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mt: 2,
            color: "#333", // Dark color for the text
          }}
        >
          Create Your Profile
        </Typography>
        <Box component="form" sx={{ mt: 3, "& .MuiTextField-root": { mb: 2, width: "100%" } }}>
          {["name", "email", "number", "address", "password"].map((field) => (
            <TextField
              key={field}
              variant="outlined"
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              type={field === "password" ? "password" : "text"}
              value={inputs[field]}
              onChange={inputHandler}
              error={!!errors[field]}
              helperText={errors[field]}
              InputLabelProps={{ style: { color: "#ff5722" } }}  // Orange label color
              InputProps={{
                style: { color: "#333", backgroundColor: "#f9f9f9" },  // Light background for input fields
              }}
            />
          ))}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff5722",  // Orange color for the button
              "&:hover": { backgroundColor: "#ff8a50" }, // Darker shade on hover
            }}
            onClick={addHandler}
          >
            Submit
          </Button>
        </Box>

        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button>
            <Link to='/login' style={{ color: "#ff5722", textDecoration: "none" }}>
              Already have an account? Click here
            </Link>
          </Button>
        </Box>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Profile;
