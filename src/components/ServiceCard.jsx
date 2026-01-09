import { Paper, Box, Typography } from '@mui/material';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        borderRadius: 4,
        minHeight: { xs: 'auto', sm: '220px', md: '240px' },
        background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
        border: '2px solid transparent',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #A0153E 0%, #C71F4E 100%)',
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.4s ease',
        },
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 28px rgba(160, 21, 62, 0.15)',
          borderColor: 'rgba(160, 21, 62, 0.1)',
          '&::before': {
            transform: 'scaleX(1)',
          },
          '& .service-icon': {
            transform: 'scale(1.1) rotate(5deg)',
          },
        },
      }}
    >
      <Box 
        className="service-icon"
        sx={{ 
          mb: 2, 
          display: 'flex', 
          justifyContent: 'center',
          transition: 'transform 0.4s ease',
        }}
      >
        {icon}
      </Box>
      <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ 
          fontWeight: 700,
          fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.35rem' },
          mb: 1.5,
          color: 'text.primary',
        }}
      >
        {title}
      </Typography>
      <Typography 
        variant="body2" 
        color="text.secondary" 
        sx={{ 
          lineHeight: 1.7,
          fontSize: { xs: '0.9rem', sm: '0.95rem' },
        }}
      >
        {description}
      </Typography>
    </Paper>
  );
};

export default ServiceCard;
