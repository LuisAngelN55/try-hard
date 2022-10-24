import { FC } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { Box, Grid, Paper, Typography, useTheme } from '@mui/material';

import { RootState } from '../../store/store';

interface Props {
    children?: React.ReactNode;
}

export const TestView:FC<Props> = ({ children }) => {

    const theme = useTheme();
    const { showSidebar } = useSelector( ( state:RootState ) => state.ui )

  return (
    <Box
        style={{transition: theme.transitions.create("all", {
            easing: theme.transitions.easing.sharp, 
            duration: theme.transitions.duration.leavingScreen,
    })}} 
    >
        <Head>
            <title>Dashboard - Try Hard</title>
        </Head>
        { children }
        
        <Grid container>
            <Typography variant='h3'>Vista de prueba</Typography>
            
            <Paper
                sx={{
                    // backgroundColor: 'white',
                    borderRadius: '8px',
                    p: '15px'
                }}
            >

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi molestiae expedita necessitatibus commodi odit pariatur tempora possimus deleniti! Vero aliquid eveniet maxime corrupti non nemo atque tempora dolorum quibusdam, quisquam odio dicta quasi! Ea quam exercitationem numquam molestias quia omnis nihil, voluptas quisquam vero optio animi porro impedit iusto nesciunt deleniti voluptatum dolorem atque, ad id consequuntur a accusamus vitae sequi eligendi. Doloremque atque quaerat similique aut qui deleniti, inventore, ut fugiat commodi, ad soluta minus magnam animi fugit. Impedit nostrum voluptas temporibus sed perferendis aperiam minus! Laudantium aut fugit animi voluptates, reprehenderit fuga inventore in sunt harum obcaecati, temporibus quas omnis necessitatibus ipsa. Officia id consequuntur fugiat atque quisquam ducimus! Deleniti nulla impedit eveniet alias sint harum architecto aliquam eum iste? Ut, blanditiis odio delectus quisquam, in voluptas eius reprehenderit ad perferendis, quam minus voluptatem provident beatae aliquam eos voluptates. Repellat pariatur nostrum velit nam odio adipisci fuga maxime fugit vero quos incidunt doloribus alias nemo placeat excepturi facere sequi voluptas, quidem earum quas, aspernatur, dignissimos necessitatibus sapiente. Laudantium, officia dignissimos. Reiciendis placeat deserunt voluptatum reprehenderit? Perspiciatis dolore quisquam, odit libero, molestiae quas ipsam hic officia expedita deserunt animi quo ut. Et deserunt, inventore earum in consequatur commodi?</p>
            </Paper>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi molestiae expedita necessitatibus commodi odit pariatur tempora possimus deleniti! Vero aliquid eveniet maxime corrupti non nemo atque tempora dolorum quibusdam, quisquam odio dicta quasi! Ea quam exercitationem numquam molestias quia omnis nihil, voluptas quisquam vero optio animi porro impedit iusto nesciunt deleniti voluptatum dolorem atque, ad id consequuntur a accusamus vitae sequi eligendi. Doloremque atque quaerat similique aut qui deleniti, inventore, ut fugiat commodi, ad soluta minus magnam animi fugit. Impedit nostrum voluptas temporibus sed perferendis aperiam minus! Laudantium aut fugit animi voluptates, reprehenderit fuga inventore in sunt harum obcaecati, temporibus quas omnis necessitatibus ipsa. Officia id consequuntur fugiat atque quisquam ducimus! Deleniti nulla impedit eveniet alias sint harum architecto aliquam eum iste? Ut, blanditiis odio delectus quisquam, in voluptas eius reprehenderit ad perferendis, quam minus voluptatem provident beatae aliquam eos voluptates. Repellat pariatur nostrum velit nam odio adipisci fuga maxime fugit vero quos incidunt doloribus alias nemo placeat excepturi facere sequi voluptas, quidem earum quas, aspernatur, dignissimos necessitatibus sapiente. Laudantium, officia dignissimos. Reiciendis placeat deserunt voluptatum reprehenderit? Perspiciatis dolore quisquam, odit libero, molestiae quas ipsam hic officia expedita deserunt animi quo ut. Et deserunt, inventore earum in consequatur commodi?</p>

        </Grid>

    </Box>
  )
}
