import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
} from '@mui/material';

const Services = () => {
  // Updated services data with a focus on food and medicine supply in trains
  const services = [
    {
      id: 1,
      title: 'Food Delivery in Trains',
      description: 'Enjoy hot, fresh, and nutritious meals delivered directly to your seat while traveling by train.',
      image: 'https://via.placeholder.com/300x200?text=Food+Delivery', // Update with relevant image
    },
    {
      id: 2,
      title: 'Medicine Delivery',
      description: 'Get essential medicines delivered to you during your train journey, ensuring your health is never compromised.',
      image: 'https://via.placeholder.com/300x200?text=Medicine+Delivery', // Update with relevant image
    },
    {
      id: 3,
      title: 'Emergency Health Services',
      description: 'Access emergency medical assistance during your travel with our 24/7 trained medical staff on standby.',
      image: 'https://via.placeholder.com/300x200?text=Emergency+Health+Services', // Update with relevant image
    },
    {
      id: 4,
      title: 'Pre-Order Food for Your Journey',
      description: 'Plan ahead by pre-ordering your meals before your train journey and get them delivered on time.',
      image: 'https://via.placeholder.com/300x200?text=Pre-Order+Food', // Update with relevant image
    },
    {
      id: 5,
      title: 'Customized Medicine Packs',
      description: 'Personalized medicine kits based on your travel itinerary and health requirements, delivered directly to your seat.',
      image: 'https://via.placeholder.com/300x200?text=Customized+Medicine', // Update with relevant image
    },
    {
      id: 6,
      title: 'Customer Support for Travel Needs',
      description: 'Our customer support team is available to assist you with food, medicine, and other travel-related inquiries.',
      image: 'https://via.placeholder.com/300x200?text=Customer+Support', // Update with relevant image
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
        Our Services
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', mb: 6 }}>
        We ensure that you have access to the best food and essential medicines while traveling by train.
      </Typography>

      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '15px',
                boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                },
              }}
            >
              <CardMedia
                component="img"
                image={service.image}
                alt={service.title}
                sx={{ height: 200 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
