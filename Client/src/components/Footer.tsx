import { Link } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: 'white',
        borderTop: '1px solid #f0f0f0' // Optional subtle top border
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2023 ZenTask
      </Typography>

      <Button
        component={Link}
        to="/donate"
        variant="outlined"
        sx={{
          border: '2px solid black',
          borderRadius: '10px',
          color: 'black',
          backgroundColor: 'white',
          padding: '8px 16px',
          textTransform: 'none',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#f5f5f5',
            border: '2px solid black'
          }
        }}
      >
        Donate
      </Button>
    </Box>
  );
};

export default Footer;