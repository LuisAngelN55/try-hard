import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer, useTheme } from '@mui/material';

import { RootState } from '../../store';
import { onToggleSidbar } from '../../store/ui';


interface Props {
    children: React.ReactNode;
    sidebarWidth: number[];
}

export const MyDrawer: FC<Props> = ({ sidebarWidth, children }) => {

    const theme = useTheme();
    const dispatch = useDispatch();
    const { showSidebar, drawerVariant, themeMode } = useSelector( (state: RootState) => state.ui );

    const handleDrawerToggle = () => {
        dispatch( onToggleSidbar() );
    }

  return (
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
            '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', width: { xs: sidebarWidth[0],
                md: sidebarWidth[1]}, backgroundColor: 'primary.main'
                }
        }}
        style={{transition: theme.transitions.create("all", {
            easing: theme.transitions.easing.sharp, 
            duration: theme.transitions.duration.leavingScreen,
        })}} 
    >

        { children }

    </Drawer>
  )
}
