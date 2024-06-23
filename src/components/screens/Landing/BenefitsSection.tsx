import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const BenefitsSection: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ py: 4, backgroundColor: '#E66200', color: '#fff' }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontSize: isMobile ? '1.5rem' : '2rem' }}
      >
        Nuestros Beneficios
      </Typography>
      <Carousel style={{ width: '100%' }}>
        <Carousel.Item>
          <Box sx={{ pb: 6, width: '100%' }}>
            <Typography variant="h6" align="center" sx={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
              Calidad de Ingredientes
            </Typography>
            <Typography variant="body2" align="center">
              Utilizamos solo los ingredientes más frescos y de la más alta calidad para asegurar que cada plato sea delicioso y nutritivo.
            </Typography>
          </Box>
        </Carousel.Item>
        <Carousel.Item>
          <Box sx={{ pb: 6, width: '100%' }}>
            <Typography variant="h6" align="center" sx={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
              Variedad y Creatividad
            </Typography>
            <Typography variant="body2" align="center">
              Nuestra carta ofrece una extensa variedad de opciones, desde entrantes hasta postres, para satisfacer todos los gustos y preferencias.
            </Typography>
          </Box>
        </Carousel.Item>
        <Carousel.Item>
          <Box sx={{ pb: 6, width: '100%' }}>
            <Typography variant="h6" align="center" sx={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
              Experiencia del Cliente
            </Typography>
            <Typography variant="body2" align="center">
              Nuestro equipo de servicio está altamente capacitado para ofrecer una atención amable, rápida y eficiente, asegurando una experiencia culinaria placentera.
            </Typography>
          </Box>
        </Carousel.Item>
      </Carousel>
    </Box>
  );
};

export default BenefitsSection;
