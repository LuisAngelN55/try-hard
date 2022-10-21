import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, AppBar, Box, IconButton, Toolbar, Button, useTheme } from '@mui/material';
import { 
  WbSunnyOutlined as SunIcon,
  DarkModeOutlined as MoonIcon,
  SettingsOutlined as SettingsIcon,
  KeyboardArrowLeftOutlined as LeftArrowIcon,
  KeyboardArrowRightOutlined as RightArrowIcon
  } from "@mui/icons-material";
import { onToggleSidbar, onToggleThemeMode } from '../../store/ui';
import { RootState } from '../../store';

const navItems = ['Home', 'About', 'Contact'];

interface Props {
  children?: React.ReactNode;
  sidebarWidth: number;
  appbarMarginTop: number;
}

export const Navbar:FC<Props> = ({ appbarMarginTop, sidebarWidth, children }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { showSidebar, themeMode } = useSelector( (state: RootState) => state.ui )

  const handleDrawerToggle = () => {
    dispatch( onToggleSidbar() );
  };

  const ToggleThemeMode = () => {
    const curretTheme = themeMode === 'light'? 'dark' : 'light'
    dispatch( onToggleThemeMode( curretTheme ));
  }


  return (
    <Box
      sx={{
        display: 'fixed',
      }}
    >
      <AppBar component="nav"
        className='animate__animated animate__slideInRight animate__delay-1s' 
        sx={{
          mt:( appbarMarginTop + 'px'),
          width: showSidebar ? { sm: `calc(100% - ${ sidebarWidth }px)` } : { sm: '100%'},
          ml: showSidebar ? { sm: `${ sidebarWidth }px`} : { sm: 0 },
          // transition: 'width 0.4s'
        }}
        style={{transition: theme.transitions.create("all", {
          easing: theme.transitions.easing.sharp, 
          duration: theme.transitions.duration.leavingScreen,
        })}} 
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
            onClick={ToggleThemeMode}
            sx={{ mr: 2, display: { sm: 'block' } }}
          >
            { themeMode === 'light' ?<MoonIcon /> : <SunIcon /> }
           </IconButton>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={ToggleThemeMode}
            sx={{ mr: 2, display: { sm: 'block' } }}
          >
              <SettingsIcon/>
           </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
