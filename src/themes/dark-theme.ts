import { createTheme } from '@mui/material';


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: 'rgba(26, 30, 47, 1)',
          },
          secondary: {
            main: '#f50057',
          },
          background: {
            paper: 'rgba(3,8,26,1)',
            default: '#000000',
          },
        },
    typography: {
      fontFamily: 'Work Sans',
    },
    shape: {
      borderRadius: 4,
    },
})

