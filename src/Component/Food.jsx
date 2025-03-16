import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Button, 
  CircularProgress, 
  useTheme, 
  useMediaQuery,
  IconButton
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Food = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Fetch all food items when the component mounts
  useEffect(() => {
    fetchFood('getfood');
  }, []); // Empty dependency array ensures this runs only once on mount

  const fetchFood = (endpoint) => {
    setLoading(true);
    axios
      .get(`http://localhost:4040/${endpoint}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const addHandler = (item) => {
    axios.post("http://localhost:4040/addcart", item)
      .then((response) => {
        if (response.status === 200) {
          alert("Item added to cart");
        } else {
          alert(response.data);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          alert("This item is already in the cart.");
        } else {
          console.error(error);
          alert("Error: Unable to add item to cart. Please try again later.");
        }
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Cart Icon */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, mr: isMobile ? 2 : 4 }}>
        <IconButton component={Link} to="/cart" sx={{ color: 'primary.main' }}>
          <ShoppingCart fontSize="large" />
        </IconButton>
      </Box>

      <Box sx={{ p: isMobile ? 2 : 4 }}>
        {/* Filter Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3, flexWrap: 'wrap' }}>
          <Button onClick={() => fetchFood('getfood')} size="small" variant="contained" color="primary">All</Button>
          <Button onClick={() => fetchFood('viewmrng')} size="small" variant="contained" color="primary">Breakfast</Button>
          <Button onClick={() => fetchFood('viewlunch')} size="small" variant="contained" color="primary">Lunch</Button>
          <Button onClick={() => fetchFood('viewsnacks')} size="small" variant="contained" color="primary">Snacks</Button>
          <Button onClick={() => fetchFood('viewdinner')} size="small" variant="contained" color="primary">Dinner</Button>
          <Button onClick={() => fetchFood('viewSpecials')} size="small" variant="contained" color="primary">Specials</Button>
        </Box>

        {/* Page Title */}
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mt: 4 }}>
          Choose Your Food
        </Typography>

        {/* Food Items Grid */}
        <Box sx={{ mt: 4 }}>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
              <CircularProgress />
            </Box>
          ) : (
            <Grid container spacing={2} justifyContent="center">
              {user.length === 0 ? (
                <Typography variant="h5" align="center">No food items found.</Typography>
              ) : (
                user.map((val, i) => (
                  <Grid item xs={6} lg={2} key={i}> {/* 2 items per row on mobile, 6 items per row on desktop */}
                    <Card sx={{ 
                      boxShadow: 3, 
                      borderRadius: '10px', 
                      textAlign: 'center', 
                      p: 1, // Reduced padding
                      backgroundColor: 'background.paper',
                      height: '100%', // Ensure all cards have the same height
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}>
                      {/* Image */}
                      <Box sx={{ 
                        width: '100%', 
                        aspectRatio: '1', // Maintain a square aspect ratio
                        overflow: 'hidden', // Ensure the image fits within the box
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '10px'
                      }}>
                        <img
                          src={val.image}
                          alt={val.name}
                          style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover' // Ensure the image covers the box
                          }}
                        />
                      </Box>

                      {/* Card Content */}
                      <CardContent sx={{ flexGrow: 1, p: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{val.name}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, fontSize: '0.75rem' }}>{val.description}</Typography>
                        <Typography variant="h6" sx={{ mt: 1, fontSize: '0.9rem' }}>${val.price}</Typography>
                      </CardContent>

                      {/* Buttons */}
                      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1, mb: 1 }}>
                        <Button variant="contained" color="success" size="small" onClick={() => addHandler(val)}>ADD TO CART</Button>
                        <Button variant="contained" color="error" size="small">BUY NOW</Button>
                      </Box>
                    </Card>
                  </Grid>
                ))
              )}
            </Grid>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Food;