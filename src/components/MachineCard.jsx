import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MachineCard = ({ machine }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        borderRadius: 4,
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.06)',
        '&:hover': {
          '& .machine-image': {
            transform: 'scale(1.08)',
          },
          '& .view-details-btn': {
            backgroundColor: 'primary.main',
            color: 'white',
          },
        },
      }}
    >
      <Box sx={{ overflow: 'hidden', position: 'relative', height: 240 }}>
        <CardMedia
          component="img"
          height="240"
          image={machine.image}
          alt={machine.name}
          className="machine-image"
          sx={{ 
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
        />
        {machine.brand && (
          <Chip
            label={machine.brand}
            size="small"
            sx={{ 
              position: 'absolute',
              top: 12,
              left: 12,
              fontWeight: 600,
              backgroundColor: 'white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}
          />
        )}
      </Box>
      
      <CardContent sx={{ flexGrow: 1, p: 2.5, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="h3" 
          sx={{ 
            fontWeight: 700,
            fontSize: '1.15rem',
            mb: 1.5,
            color: 'text.primary',
          }}
        >
          {machine.name}
        </Typography>
        
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
            lineHeight: 1.6,
            flexGrow: 1,
          }}
        >
          {machine.description}
        </Typography>

        {machine.features && machine.features.length > 0 && (
          <Box sx={{ mb: 2 }}>
            {machine.features.slice(0, 3).map((feature, index) => (
              <Typography 
                key={index} 
                variant="body2" 
                color="text.secondary" 
                sx={{ 
                  fontSize: '0.85rem',
                  mb: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Box 
                  component="span" 
                  sx={{ 
                    width: 4, 
                    height: 4, 
                    borderRadius: '50%', 
                    backgroundColor: 'primary.main',
                    flexShrink: 0,
                  }} 
                />
                {feature}
              </Typography>
            ))}
          </Box>
        )}

        <Button
          variant="outlined"
          size="small"
          endIcon={<ArrowForwardIcon />}
          className="view-details-btn"
          sx={{
            mt: 'auto',
            alignSelf: 'flex-start',
            borderRadius: 2,
            px: 2.5,
            py: 0.8,
            fontSize: '0.85rem',
            fontWeight: 600,
            borderWidth: 1.5,
            transition: 'all 0.3s ease',
            '&:hover': {
              borderWidth: 1.5,
            },
          }}
        >
          Ver detalles
        </Button>
      </CardContent>
    </Card>
  );
};

export default MachineCard;
