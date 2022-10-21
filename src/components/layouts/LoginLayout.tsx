import { FC } from "react";
import Head from "next/head";
import { Box } from "@mui/system";

interface Props {
  title?:     string;
  children:   React.ReactNode;
}

export const LoginLayout: FC<Props> = ( { children, title='login' }) => {
  return (
      <Box 
      className="animate__animated animate__fadeIn animate__faster"
      sx={{ display: 'flex', }}>
  
      <Head>
          <title>{ title }</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>


      <Box // Espacio para las vistas de la APP
          component='main'
          sx={{

          }}
      >

        {children}

      </Box>


      </Box>

  )
}