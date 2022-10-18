import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../src/store';
import { Box, Divider, Typography, List, ListItem, ListItemButton, ListItemText, Drawer } from '@mui/material';
import { toogleSidbar } from '../../store/ui';


const navItems = ['Home', 'About', 'Contact'];


interface Props {
    children?: React.ReactNode;
    sidebarWidth: number;
}


export const Sidebar:FC<Props> = ({ sidebarWidth, children }) => {

    const { showSidebar } = useSelector( (state: RootState) => state.ui );
    const dispatch = useDispatch();

    const handleDrawerToggle = () => {

        dispatch( toogleSidbar() );
    }

  return (
    <Box component="nav">
        <Drawer
            variant="temporary"
            open={ showSidebar }
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: showSidebar ? { xs: 'block', sm: 'block' } : { xs: 'block', sm: 'block' },
                // display: showSidebar ? { xs: 'none', sm: 'block' } : { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sidebarWidth },
            }}
        >
            <Box onClick={ () => console.log('press')} sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ my: 2 }}>
                    MUI
                </Typography>
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
