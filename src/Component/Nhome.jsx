import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import Cr from './C/c1.jpg';
import Mr from './C/m1.jpg';

const Nhome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'grey', color: 'white' }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: isMobile ? "70vh" : "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          p: isMobile ? 2 : 4,
        }}
      >
        <Typography variant={isMobile ? "h3" : "h2"} sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
          Explore Food & Medicine Services
        </Typography>
        <Typography variant={isMobile ? "h6" : "h5"} sx={{ mb: 4 }}>
          Your one-stop solution for all your travel needs.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexDirection: isMobile ? "column" : "row" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff5722",
              fontSize: { xs: '0.9rem', md: '1.2rem' },
              padding: { xs: '8px 24px', md: '12px 36px' },
              borderRadius: "25px",
              '&:hover': { backgroundColor: "#ff8a50" },
            }}
            component={Link}
            to="/food"
          >
            Explore Food
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4caf50",
              fontSize: { xs: '0.9rem', md: '1.2rem' },
              padding: { xs: '8px 24px', md: '12px 36px' },
              borderRadius: "25px",
              '&:hover': { backgroundColor: "#66bb6a" },
            }}
            component={Link}
            to="/medicine"
          >
            Explore Medicine
          </Button>
        </Box>
      </Box>

      {/* Food Section */}
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Typography variant="h3" sx={{ 
          fontWeight: "bold", 
          textAlign: "center", 
          mb: 4,
          fontSize: { xs: '2rem', md: '3rem' }
        }}>
          Food Delivery
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Card sx={{ 
              height: "100%",
              borderRadius: "15px",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
            }}>
              <CardMedia
                component="img"
                image={Cr}
                alt="Food Delivery"
                sx={{ height: { xs: 250, md: 350 } }}
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Delicious Meals On-the-Go
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ff5722",
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    padding: { xs: '8px 20px', md: '10px 24px' },
                  }}
                  component={Link}
                  to="/food"
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Why Choose Us?
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                - Fresh and hygienic meals prepared by top chefs
                <br />
                - Wide variety of cuisines to choose from
                <br />
                - Fast and reliable delivery service
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Medicine Section */}
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Container>
          <Typography variant="h3" sx={{ 
            fontWeight: "bold", 
            textAlign: "center", 
            mb: 4,
            fontSize: { xs: '2rem', md: '3rem' }
          }}>
            Medicine Delivery
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Why Choose Us?
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  - Access to essential medicines quickly
                  <br />
                  - Verified and trusted pharmacies
                  <br />
                  - Doorstep delivery during your journey
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ 
                height: "100%",
                borderRadius: "15px",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              }}>
                <CardMedia
                  component="img"
                  image={Mr}
                  alt="Medicine Delivery"
                  sx={{ height: { xs: 250, md: 300 } }}
                />
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                    Get Your Medicines Delivered
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#4caf50",
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      padding: { xs: '8px 20px', md: '10px 24px' },
                    }}
                    component={Link}
                    to="/medicine"
                  >
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 3 }}>
        <Container>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            © 2025 Feel The Care. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Nhome;