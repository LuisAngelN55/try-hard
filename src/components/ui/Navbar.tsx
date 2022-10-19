import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, AppBar, Box, IconButton, Toolbar, Button } from '@mui/material';
import { 
  SettingsOutlined as SettingsIcon,
  KeyboardArrowLeftOutlined as LeftArrowIcon,
  KeyboardArrowRightOutlined as RightArrowIcon
  } from "@mui/icons-material";
import { onToggleSidbar } from '../../store/ui';
import { RootState } from '../../store';

const navItems = ['Home', 'About', 'Contact'];

interface Props {
  children?: React.ReactNode;
  sidebarWidth: number;
}

export const Navbar:FC<Props> = ({ sidebarWidth, children }) => {

  const dispatch = useDispatch();
  const { showSidebar } = useSelector( (state: RootState) => state.ui )
  const handleDrawerToggle = () => {
    dispatch( onToggleSidbar() );
  }


  return (
    <Box sx={{
      display: 'fixed',
    }}>
      <AppBar component="nav"
      // className='animate__animated animate__bounce animate__delay-3s'
      sx={{
        width: showSidebar ? { sm: `calc(100% - ${ sidebarWidth }px)` } : { sm: '100%'},
        ml: showSidebar ? { sm: `${ sidebarWidth }px`} : { sm: 0 },
        transition: 'width 0.4s'
      }}
      >
        <Toolbar>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block' } }}
          >
            {
              showSidebar ? <LeftArrowIcon /> : <RightArrowIcon />
            }
          </IconButton>

          
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUIs
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
            
                {item}
              </Button>

              
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block' } }}
          >
                  <SettingsIcon/>
           </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
