import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
  Avatar,
  Button,
  IconButton,
  Skeleton,
} from "@mui/material";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import QuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import axios from "axios";

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: <LocalDiningIcon fontSize="large" sx={{ color: "#fff" }} />,
      title: "Food Delivery",
      description:
        "Enjoy a variety of cuisines delivered straight to your seat during your journey.",
    },
    {
      icon: <MedicalServicesIcon fontSize="large" sx={{ color: "#fff" }} />,
      title: "Medicine Delivery",
      description:
        "Access essential medicines quickly and conveniently while on the move.",
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:4040/getfeedfive")
      .then((res) => {
        setTestimonials(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        testimonials.length > 0 ? (prev + 1) % testimonials.length : 0
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Function to get initials from email
  const getInitials = (email) => {
    const usernamePart = email.split('@')[0];
    const initials = usernamePart.charAt(0).toUpperCase();
    return initials;
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: { xs: "20px 0", sm: "40px 0" },
        backgroundColor: "#f5f5f5",
        overflow: "hidden",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          textAlign: "center",
          background: "linear-gradient(135deg, #ff5722, #ff8a50)",
          padding: { xs: "30px 10px", sm: "50px 20px" },
          borderRadius: "10px",
          boxShadow: "0px 4px 15px rgba(255, 87, 34, 0.2)",
          animation: `${fadeIn} 1s ease-out`,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontFamily: "'Poppins', sans-serif",
            color: "#fff",
            fontSize: { xs: "2rem", sm: "3.5rem" },
          }}
        >
          Feel The Care 🚆
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            color: "#fff",
            fontSize: { xs: "0.9rem", sm: "1.25rem" },
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Your trusted partner for a seamless train travel experience.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 4,
            background: "#fff",
            color: "#ff5722",
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            padding: { xs: "10px 20px", sm: "12px 30px" },
            borderRadius: "25px",
            boxShadow: "0px 4px 15px rgba(255, 87, 34, 0.3)",
            "&:hover": {
              background: "#ff8a50",
              color: "#fff",
            },
          }}
        >
          <Link to="/profile" style={{ textDecoration: "none", color: "#ff5722" }}>
            Get Started
          </Link>
        </Button>
      </Box>

      {/* Services Section */}
      <Container sx={{ mt: { xs: 4, sm: 8 } }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: { xs: 4, sm: 6 },
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: "1.75rem", sm: "2.5rem" },
          }}
        >
          Our Services
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Paper
                sx={{
                  padding: "20px",
                  textAlign: "center",
                  background: "#fff",
                  color: "#333",
                  borderRadius: "15px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: { xs: "1.25rem", sm: "1.5rem" },
                  }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#666", fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Enhanced Testimonials Section */}
      <Container sx={{ mt: { xs: 4, sm: 8 }, position: 'relative' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: { xs: 4, sm: 6 },
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: "1.75rem", sm: "2.5rem" },
            position: 'relative',
            zIndex: 1,
          }}
        >
          What Our Customers Say
          <Box sx={{ 
            width: '60px',
            height: '4px',
            backgroundColor: '#ff5722',
            margin: '10px auto',
            borderRadius: '2px'
          }} />
        </Typography>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            {[0, 1, 2].map((index) => (
              <Skeleton 
                key={index}
                variant="rectangular" 
                width={300} 
                height={200}
                sx={{ borderRadius: 3, mx: 2 }}
              />
            ))}
          </Box>
        ) : testimonials.length > 0 ? (
          <Box sx={{ 
            position: 'relative',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Testimonial Cards */}
            {testimonials.map((testimonial, index) => (
              <Paper
                key={testimonial._id}
                sx={{
                  position: 'absolute',
                  width: '80%',
                  maxWidth: '600px',
                  padding: 4,
                  borderRadius: '15px',
                  boxShadow: 3,
                  transition: 'all 0.5s ease-in-out',
                  opacity: index === currentTestimonial ? 1 : 0,
                  transform: `scale(${index === currentTestimonial ? 1 : 0.8})`,
                  zIndex: index === currentTestimonial ? 1 : 0,
                  bgcolor: 'background.paper',
                  textAlign: 'center',
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <QuoteIcon 
                    sx={{ 
                      position: 'absolute',
                      top: -30,
                      left: -10,
                      fontSize: '4rem',
                      color: '#ff5722',
                      opacity: 0.1,
                    }} 
                  />
                  <Avatar
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      mx: 'auto', 
                      mb: 2,
                      border: '3px solid #ff5722',
                      bgcolor: '#ff5722',
                      fontSize: '2rem'
                    }}
                  >
                    {getInitials(testimonial.email)}
                  </Avatar>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon 
                        key={star}
                        sx={{ 
                          color: testimonial.rating >= star ? '#ffc107' : '#e0e0e0',
                          fontSize: '1.5rem'
                        }} 
                      />
                    ))}
                  </Box>
                  <Typography variant="h6" sx={{ 
                    fontWeight: "bold", 
                    mb: 2,
                    fontStyle: 'italic',
                    color: '#ff5722'
                  }}>
                    "{testimonial.review}"
                  </Typography>
                  <Typography variant="subtitle1" sx={{ 
                    fontWeight: 600,
                    color: '#666' 
                  }}>
                    {testimonial.email}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#888' }}>
                    Satisfied Customer
                  </Typography>
                </Box>
              </Paper>
            ))}

            {/* Navigation Dots */}
            <Box sx={{ 
              position: 'absolute', 
              bottom: -40, 
              left: '50%', 
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 1,
              zIndex: 2
            }}>
              {testimonials.map((_, index) => (
                <IconButton
                  key={index}
                  size="small"
                  onClick={() => setCurrentTestimonial(index)}
                  sx={{
                    p: 0.5,
                    color: index === currentTestimonial ? '#ff5722' : '#e0e0e0',
                    transition: 'color 0.3s ease'
                  }}
                >
                  <FiberManualRecordIcon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Box>
        ) : (
          <Typography textAlign="center" sx={{ color: "#666" }}>
            No reviews available yet. Be the first to share your experience!
          </Typography>
        )}
      </Container>

      {/* Professional Footer */}
      <Box
        sx={{
          py: 6,
          backgroundColor: "#333",
          color: "#fff",
          mt: { xs: 4, sm: 8 },
        }}
      >
        <Container>
          <Grid container spacing={4}>
            {/* About Us */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                About Us
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                Feel The Care is your trusted partner for a seamless train travel experience, offering food and medicine delivery services.
              </Typography>
              <br /><br />
              <Typography variant="body2" sx={{color:'#bbb'}}>
               Learn more about us 
               </Typography>
               <Typography variant="body2" sx={{color:'#bbb'}}>
               <Link to="/about" style={{ textDecoration: "none", color: "#bbb" }}>
                 Click here
                </Link>
               </Typography>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Link to="/" style={{ textDecoration: "none", color: "#bbb" }}>
                  Home
                </Link>
                <Link to="/services" style={{ textDecoration: "none", color: "#bbb" }}>
                  Services
                </Link>
                <Link to="/contact" style={{ textDecoration: "none", color: "#bbb" }}>
                  Contact
                </Link>
                <Link to="/privacy" style={{ textDecoration: "none", color: "#bbb" }}>
                  Privacy Policy
                </Link>
              </Box>
            </Grid>

            {/* Social Media */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Follow Us
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton
                  component="a"
                  href="https://facebook.com"
                  target="_blank"
                  sx={{ color: "#fff" }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://twitter.com"
                  target="_blank"
                  sx={{ color: "#fff" }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://instagram.com"
                  target="_blank"
                  sx={{ color: "#fff" }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://linkedin.com"
                  target="_blank"
                  sx={{ color: "#fff" }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Contact Info
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb", mb: 1 }}>
                <PhoneIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                +1 234 567 890
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb", mb: 1 }}>
                <EmailIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                support@feelthecare.com
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                <LocationOnIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                123 Main Street, City, Country
              </Typography>
            </Grid>
          </Grid>

          {/* Copyright */}
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="body2" sx={{ color: "#bbb" }}>
              © 2025 Feel The Care. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;