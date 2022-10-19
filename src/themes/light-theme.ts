import { createTheme } from '@mui/material';


export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#07072D',
        },
        secondary: {
          main: '#2b58f1',
        },
        background: {
          paper: 'rgba(248,248,255,0.65)',
          default: '#fff',
        },
        divider: 'rgba(154,154,158,0.35)',
      },
    typography: {
      fontFamily: 'Work Sans',
    },
    shape: {
      borderRadius: 4,
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          position: 'fixed',
          
        },
        styleOverrides: {
          root: {
         
          }
        }
      },
    },
    transitions: {
      duration: {
     
      }
    }
})
