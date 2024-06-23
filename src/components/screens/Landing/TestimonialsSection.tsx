import React from 'react';
import { Box, Typography, Grid, Paper, useMediaQuery } from '@mui/material';

const TestimonialsSection: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
        sx={{ fontSize: isMobile ? '1.5rem' : '2rem' }}
      >
        Testimonios
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
              María López
            </Typography>
            <Typography variant="body2">
              "¡Una experiencia increíble! Cada plato que probé estaba lleno de sabor y preparado con tanto cariño. 
              La atención del personal fue excelente, siempre atentos y amigables. Definitivamente volveré pronto."
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
              Juan Pérez
            </Typography>
            <Typography variant="body2">
              "El Buen Sabor realmente hace honor a su nombre. La paella de mariscos fue la mejor que he probado, con ingredientes frescos y perfectamente cocinada. 
              Me encantó la atmósfera acogedora del lugar. ¡Muy recomendado!"
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;
