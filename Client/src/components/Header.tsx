import { Link } from 'react-router-dom';
import { NotebookText } from 'lucide-react';
import { Button, Box, Typography } from '@mui/material'; 

const Header = () => {
  return (
    <Box 
      component="header" 
      sx={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 16px',
        backgroundColor: 'white'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <NotebookText />
        <Typography 
          component={Link} 
          to="/" 
          variant="h6" 
          sx={{ 
            color: 'black',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          ZenTask
        </Typography>
      </Box>
      
      <Button
        component={Link}
        to="/login"
        variant="outlined"
        sx={{
          border: '2px solid black',
          borderRadius: '10px',
          color: 'black',
          backgroundColor: 'white',
          padding: '10px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#f5f5f5',
            border: '2px solid black'
          }
        }}
      >
        Login/Sign-up
      </Button>
    </Box>
  );
};

export default Header;