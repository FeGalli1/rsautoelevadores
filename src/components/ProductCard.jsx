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
    const phoneNumber = '5491112345678'; // Reemplazar con el número real
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
            sx={{ mb: 1 }}
            color="primary"
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
          color="secondary"
          startIcon={<WhatsAppIcon />}
          onClick={handleWhatsApp}
          sx={{
            fontWeight: 600,
            color: '#000',
            '&:hover': {
              backgroundColor: '#f9a825',
            },
          }}
        >
          Consultar
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
