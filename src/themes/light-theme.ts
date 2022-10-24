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
          paper: 'rgba(255,255,255, 1)',
          default: 'rgba(240, 242, 245, 1)',
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
