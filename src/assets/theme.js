// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Adjust to your primary color
        },
        secondary: {
            main: '#dc004e', // Adjust to your secondary color
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 600,
        },
        // Customize more typography options if needed
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // Remove all caps on buttons
                },
            },
        },
    },
});

export default theme;
// code copied from mui documentation please link to correct pages and check compatibility with orginal code. 12/22/24 18:51
