import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Rating,
  IconButton,
  Snackbar,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Feed = () => {
  const [inputs, setInputs] = useState({
    email: "",
    review: "",
    rating: "",
  });
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    setOpen(false);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({ ...prevData, [name]: value }));
  };

  const addHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:4040/feedback", inputs);
      alert(result.data);
      if (result.data === "success") {
        navigate("/home");
      }
    } catch (error) {
      console.error("Error adding medicine:", error);
    }
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', p: isMobile ? 2 : 4, backgroundColor: 'GrayText' }}>
        <Box sx={{ maxWidth: '600px', width: '100%', textAlign: 'center', backgroundColor: 'white', p: isMobile ? 2 : 4, borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: 'blueviolet', fontStyle: 'italic' }}>
            Leave Feedback
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'black' }}>
            We value your feedback! Please share your thoughts with us.
          </Typography>
          <TextField
            label="Email"
            type="email"
            required
            variant="standard"
            fullWidth
            sx={{ mb: 4 }}
            name="email"
            value={inputs.email}
            onChange={inputHandler}
          />
          <TextField
            label="Review"
            multiline
            maxRows={4}
            variant="standard"
            fullWidth
            sx={{ mb: 4 }}
            name="review"
            value={inputs.review}
            onChange={inputHandler}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
            <Typography variant="body1" sx={{ mr: 2, color: 'black' }}>
              Rate us:
            </Typography>
            <Rating
              name="rating"
              value={inputs.rating}
              precision={0.5}
              onChange={(event, newValue) => {
                setInputs((prevData) => ({ ...prevData, rating: newValue }));
              }}
              icon={<StarIcon />}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'blueviolet',
              color: 'white',
              mb: 4,
              '&:hover': {
                backgroundColor: 'darkviolet',
              },
            }}
            onClick={addHandler}
            disabled={!inputs.email.trim() || !inputs.review.trim()}
          >
            Submit
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton aria-label="instagram" href="https://www.instagram.com/">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="whatsapp" href="https://web.whatsapp.com/6282505480">
              <WhatsAppIcon />
            </IconButton>
            <IconButton aria-label="twitter" href="https://twitter.com/">
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="email" href="mailto:quadafyp@gmail.com">
              <EmailIcon />
            </IconButton>
          </Box>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={`Thank you for your feedback. You rated us ${inputs.rating} stars.`}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Feed;