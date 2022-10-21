import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Divider, Typography, List, ListItem, ListItemButton, ListItemText, Drawer, useTheme } from '@mui/material';

import type { RootState } from '../../../src/store';
import { onToggleSidbar } from '../../store/ui';


const navItems = ['Home', 'About', 'Contact'];


interface Props {
    children?: React.ReactNode;
    sidebarWidth: number;
}


export const Sidebar:FC<Props> = ({ sidebarWidth, children }) => {

    const dispatch = useDispatch();

    const { showSidebar, displaySize, drawerVariant, themeMode } = useSelector( (state: RootState) => state.ui );

    const theme = useTheme();

    const handleDrawerToggle = () => {

        dispatch( onToggleSidbar() );
    }

  return (
    <Box component="nav"
    style={{transition: theme.transitions.create("all", {
        easing: theme.transitions.easing.sharp, 
        duration: theme.transitions.duration.leavingScreen,
    })}} >
        <Drawer
            anchor='left'
            PaperProps={{
                // style: { backgroundColor: '#000' }
            }}
            variant={ drawerVariant }
            open={ showSidebar }
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            // transitionDuration ={{ enter: 400, exit: 1000 }}
            sx={{
                display: showSidebar ? { xs: 'block' } : { xs: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sidebarWidth },
                backgroundColor: 'rgba(248,248,255, 0.5)'
            }}
            style={{transition: theme.transitions.create("all", {
                easing: theme.transitions.easing.sharp, 
                duration: theme.transitions.duration.leavingScreen,
            })}} 
        >
            <Box onClick={ () => console.log('press')} sx={{ textAlign: 'center' }}>
                <Box
                    sx={{
                        mx: '20px', my: '15px'
                    }}
                >
                    {
                        themeMode === 'light'
                            ? <img src='/assets/img/TryHard_Logo.png' alt="Try Hard Logo" width='100%'/>
                            : <img src='/assets/img/Logo_TryHard_Blanco.png' alt="Try Hard Logo" width='100%'/>
                    }

                </Box>
                
                <Divider />
                <List>
                    {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    </Box>
  )
}
