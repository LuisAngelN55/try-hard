import { NextPage } from 'next';
import Image from 'next/image';
import { Box, Paper, Typography } from '@mui/material';

import { LoginLayout } from '../../src/components/layouts';


export const sidebarWidth = [ 200, 250 ];
export const appbarMarginTop = 30;

const Login: NextPage = () => {
    return (
        <LoginLayout>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'primary.dark', //'rgba(0, 0, 0, 1)',
              height: '100vh',
              width: '100vw'
            }}
          >
            <Paper variant='elevation'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width:300,
                height:400,
                backgroundColor: 'rgba(220, 226, 250, 1)',
                padding: '20px',
                alignItems: 'center'
              }}
            >

              <Image src='/assets/img/TryHard_Logo.png' alt="Try Hard Logo" width='250px' height='81px'/>
              <Typography variant='h5'>Login</Typography>
            </Paper>
          </Box>
        </LoginLayout>
    )
}

export default Login;
