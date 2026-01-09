import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ProductCard = ({ product }) => {
  const handleWhatsApp = () => {
    const message = `Hola, estoy interesado en ${product.name}. ¿Podrían darme más información?`;
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5491112345678';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="220"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 600 }}>
          {product.name}
        </Typography>
        
        {product.category && (
          <Chip
            label={product.category}
            size="small"
            sx={{ 
              mb: 1,
              backgroundColor: 'primary.main',
              color: 'white',
              fontWeight: 600,
            }}
          />
        )}
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {product.description}
        </Typography>

        {product.specs && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              Especificaciones:
            </Typography>
            {product.specs.map((spec, index) => (
              <Typography key={index} variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                • {spec}
              </Typography>
            ))}
          </Box>
        )}
      </CardContent>
      
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<WhatsAppIcon />}
          onClick={handleWhatsApp}
          sx={{
            fontWeight: 600,
            backgroundColor: '#25D366', // Verde oficial de WhatsApp
            color: 'white',
            py: 1.2,
            fontSize: '1rem',
            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
            '&:hover': {
              backgroundColor: '#1fb855',
              boxShadow: '0 6px 16px rgba(37, 211, 102, 0.4)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Consultar
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
