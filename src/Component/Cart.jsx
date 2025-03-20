import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  Typography, 
  Button, 
  TextField, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

const Cart = () => {
  const [user, setUsers] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [openForm, setOpenForm] = useState(false); 
  const [emailError, setEmailError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    alternatePhone: ''
  });

  // Fetch cart items on component mount
  useEffect(() => {
    axios.get("http://localhost:4040/getcart")
      .then(response => {
        setUsers(response.data);
        setQuantities(response.data.map(() => 1)); 
      })
      .catch(err => console.error(err));
  }, []);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle quantity increase
  const add = (index) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      newQuantities[index]++;
      return newQuantities;
    });
  };

  // Handle quantity decrease
  const sub = (index) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 1) {
        newQuantities[index]--;
      }
      return newQuantities;
    });
  };

  // Calculate total price for a single item
  const getTotalPrice = (index) => {
    return (user[index]?.price || 0) * (quantities[index] || 1);
  };

  // Calculate total price for the entire cart
  const getTotalCartPrice = () => {
    return user.reduce((total, _, index) => total + getTotalPrice(index), 0);
  };

  // Delete an item from the cart
  const deleteValue = (id) => {
    axios
      .delete(`http://localhost:4040/removefromcart/${id}`)
      .then((response) => {
        alert(response.data);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  // Delete all items from the cart
  const handleRemoveAllData = async () => {
    try {
      const response = await axios.delete('http://localhost:4040/removeAll');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Email validation
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle order placement
  const addHandler = () => {
    if (!formData.email || !validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');

    const foodItems = user.map((item, index) => `${item.name}(${quantities[index]})(${item.base})`);
    const totalPrice = getTotalCartPrice();

    axios.post("http://localhost:4040/addorder", {
      foodItems: foodItems,
      totalPrice: totalPrice,
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      altphone: formData.alternatePhone
    })
      .then((result) => {
        alert(result.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* Cart Items */}
      <Grid container spacing={3} sx={{ p: 3 }}>
        {user.map((item, index) => (
          <Grid item xs={12} sm={6} md={2.4} key={item.id || index}>
            <Card sx={{ boxShadow: 3, borderRadius: '10px' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Box sx={{
                    width: '100%',
                    aspectRatio: '1',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px'
                  }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>Price: ${item.price.toFixed(2)}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  <IconButton onClick={() => sub(index)} color="primary">
                    <Remove />
                  </IconButton>
                  <Typography variant="h6" sx={{ mx: 2 }}>{quantities[index]}</Typography>
                  <IconButton onClick={() => add(index)} color="primary">
                    <Add />
                  </IconButton>
                </Box>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Total: ${getTotalPrice(index).toFixed(2)}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button variant="contained" color="secondary" startIcon={<Delete />} onClick={() => deleteValue(item._id)}>
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Total Price */}
      <Typography variant="h6" sx={{ mt: 2, textAlign: 'center' }}>
        Total Price in Cart: ${getTotalCartPrice().toFixed(2)}
      </Typography>

      {/* Buy Now Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant="contained" color="primary" onClick={() => setOpenForm(true)}>
          Buy Now
        </Button>
      </Box>

      {/* User Details Form Dialog */}
      <Dialog open={openForm} onClose={() => setOpenForm(false)}>
        <DialogTitle>Enter Your Details</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField label="Name" name="name" value={formData.name} onChange={handleInputChange} required />
            <TextField label="Email" name="email" value={formData.email} onChange={handleInputChange} required />
            <TextField label="Phone Number" name="phone" value={formData.phone} onChange={handleInputChange} required />
            <TextField label="Alternate Phone" name="alternatePhone" value={formData.alternatePhone} onChange={handleInputChange} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenForm(false)} color="secondary">Cancel</Button>
          <Button onClick={() => { addHandler(); handleRemoveAllData(); }} color="primary">Continue to Payment</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Cart;