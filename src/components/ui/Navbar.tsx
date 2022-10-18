import {
  Typography, AppBar, Box, Divider, Drawer,
  IconButton, List, ListItem, ListItemButton,
  ListItemText, Toolbar, Button
} from '@mui/material';
import { Menu } from "@mui/icons-material";
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toogleSidbar } from '../../store/ui';
import { useDisplayBreakpoints } from '../../hooks';

const navItems = ['Home', 'About', 'Contact'];

interface Props {
  children?: React.ReactNode;
  sidebarWidth: number;
}

export const Navbar:FC<Props> = ({ sidebarWidth, children }) => {

  const dispatch = useDispatch();

  const handleDrawerToggle = () => {

    dispatch( toogleSidbar() );
}

const diplay =  useDisplayBreakpoints();
console.log(diplay)

  return (
    <Box sx={{
      display: 'flex',
    }}>
      <AppBar component="nav"
      sx={{
        width: { sm: `calc(100% - ${ sidebarWidth }px)` },
        ml: { sm: `${ sidebarWidth }px`}  
      }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
