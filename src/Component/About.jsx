import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://via.placeholder.com/200",
      description: "John has over 10 years of experience in the industry.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Head of Operations",
      image: "https://via.placeholder.com/200",
      description: "Jane ensures smooth operations and customer satisfaction.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Lead Developer",
      image: "https://via.placeholder.com/200",
      description: "Alice is passionate about building innovative solutions.",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: "url(https://via.placeholder.com/1500x800)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: isMobile ? "30vh" : "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          p: 2,
        }}
      >
        <Typography variant={isMobile ? "h3" : "h2"} sx={{ fontWeight: "bold", mb: 2,color:'black' }}>
          About Us
        </Typography>
        <Typography variant={isMobile ? "h6" : "h5"} sx={{ fontWeight: "bold", mb: 2,color:'black' }}>
          Learn more about our mission, vision, and the team behind our success.
        </Typography>
      </Box>

      {/* Introduction Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center", mb: 4,color:'black' }}>
          Who We Are
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", maxWidth: "800px", mx: "auto",color:'black' }}>
          We are a dedicated team of professionals committed to providing the best services to our
          customers. Our mission is to make your life easier by offering high-quality food and
          medicine delivery services tailored to your needs.
        </Typography>
      </Container>

      {/* Mission and Vision Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 8 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                Our Mission
              </Typography>
              <Typography variant="body1">
                Our mission is to deliver exceptional food and medicine services that enhance the
                quality of life for our customers. We strive to provide convenience, reliability, and
                affordability in everything we do.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                Our Vision
              </Typography>
              <Typography variant="body1">
                Our vision is to become the leading provider of food and medicine delivery services,
                recognized for our innovation, customer-centric approach, and commitment to
                excellence.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center", mb: 6 }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "15px",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  sx={{ height: 250, objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2, color: "#666" }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body1">{member.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Section */}
      <Box sx={{ backgroundColor: "#1e3a8a", py: 8, color: "#fff" }}>
        <Container>
          <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}>
            Get In Touch
          </Typography>
          
          <Typography variant="body1" sx={{ textAlign: "center", mb: 4 }}>
            We are hiring for delivery if u need the job full time or part time click the below button
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff5722",
                color: "#fff",
                fontSize: "1rem",
                padding: "10px 24px",
                borderRadius: "25px",
                boxShadow: "0px 4px 15px rgba(255, 87, 34, 0.3)",
                "&:hover": {
                  backgroundColor: "#ff8a50",
                  transform: "scale(1.05)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <Link to="/form" style={{ textDecoration: "none", color: "#ff5722" }}>
           Contact us 
          </Link>
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;