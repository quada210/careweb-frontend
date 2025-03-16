import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({ ...prevData, [name]: value }));
  };

  const addHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:4040/contact", inputs);
      alert(result.data);
      if (result.data === "success") {
        navigate("/home");
      }
    } catch (error) {
      console.error("Error adding medicine:", error);
    }
  };

  return (
    <Container sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: isMobile ? 2 : 4, borderRadius: '15px' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 6 }}>
          Have a question or issue? Fill out the form below, and we'll get back to you as soon as possible.
        </Typography>

        <form onSubmit={addHandler}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={inputs.name}
                onChange={inputHandler}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                value={inputs.email}
                onChange={inputHandler}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                value={inputs.message}
                onChange={inputHandler}
                required
                multiline
                rows={6}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: '#4caf50',
                    color: '#fff',
                    fontSize: '1rem',
                    padding: '10px 24px',
                    borderRadius: '25px',
                    boxShadow: '0px 4px 15px rgba(76, 175, 80, 0.3)',
                    '&:hover': {
                      backgroundColor: '#66bb6a',
                      transform: 'scale(1.05)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Contact;