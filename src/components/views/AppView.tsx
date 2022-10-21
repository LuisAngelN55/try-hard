import { Box, useTheme } from '@mui/material';
import Head from 'next/head';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { uiReducer } from '../../../../NextJs/03-open-jira/context/ui/uiReducer';
import { RootState } from '../../store/store';

interface Props {
    children?: React.ReactNode;
    sidebarWidth: number;
    appbarMarginTop: number;
}

export const AppView:FC<Props> = ({ appbarMarginTop, sidebarWidth, children }) => {

    const theme = useTheme();
    const { showSidebar } = useSelector( ( state:RootState ) => state.ui )

  return (
    <Box
        sx={{
            width: showSidebar ? { sm: `calc(100% - ${ sidebarWidth }px)` } : { sm: '100%'},
            ml: showSidebar ? { sm: `${ sidebarWidth }px`} : { sm: 0 },
            mt: ( appbarMarginTop + 'px'),
        }}
        style={{transition: theme.transitions.create("all", {
            easing: theme.transitions.easing.sharp, 
            duration: theme.transitions.duration.leavingScreen,
    })}} 
    >
        <Head>
            <title>Dashboard - Try Hard</title>
        </Head>

        { children }
        
    </Box>
  )
}
