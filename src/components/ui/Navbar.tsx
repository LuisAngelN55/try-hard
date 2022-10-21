import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, AppBar, Box, IconButton, Toolbar, Tooltip, useTheme, Menu, MenuItem } from '@mui/material';
import { 
  BoltOutlined as RayIcon,
  WbSunnyOutlined as SunIcon,
  DarkModeOutlined as MoonIcon,
  SettingsOutlined as SettingsIcon,
  MenuOutlined as OpenMenuIcon,
  MenuOpenOutlined as CloseMenuIcon,
  } from "@mui/icons-material";
  
import { onToggleSidbar, onToggleThemeMode } from '../../store/ui';
import { RootState } from '../../store';
import { UserAvatar } from './';

const navItems = ['Home', 'About', 'Contact'];

interface Props {
  children?: React.ReactNode;
  sidebarWidth: number[];
  appbarMarginTop: number;
}

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Navbar:FC<Props> = ({ appbarMarginTop, sidebarWidth, children }) => {

  const { showSidebar, themeMode } = useSelector( (state: RootState) => state.ui );

  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const handleDrawerToggle = () => {
    dispatch( onToggleSidbar() );
  };

  const ToggleThemeMode = () => {
    const curretTheme = themeMode === 'light'? 'dark' : 'light'
    dispatch( onToggleThemeMode( curretTheme ));
  }


  return (
    <Box display='flex' sx={{
      justifyContent:'center',
      alignItems:'center'
    }}>
      <AppBar component="nav"
        className='animate__animated animate__slideInRight animate__delay-0.2s' 
        position='fixed'
        sx={{
          mt:( appbarMarginTop + 'px'),
          width: showSidebar ? { sm: `calc(100% - ${ sidebarWidth[0] + 18 }px)`, md: `calc(100% - ${ sidebarWidth[1] + 18 }px)` } : { xs:  `calc(100% - 18px)`},
          ml: showSidebar ? { sm: `${ sidebarWidth[0] }px`, md: `${sidebarWidth[1]}px` } : 1,
          mr: 1
          // transition: 'width 0.4s'
        }}
        style={{
          transition: theme.transitions.create("all", {
            easing: theme.transitions.easing.sharp, 
            duration: theme.transitions.duration.leavingScreen,
          }),
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '20px',
          height:'80px',
        }} 
      >
        <Toolbar sx={{ justifyContent:'space-between'}}>

          <Box display='flex' alignItems='center'>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'inline-block' } }}
            >
              {
                showSidebar ? <CloseMenuIcon /> : <OpenMenuIcon />
              }
            </IconButton>
            
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
            >
              VIEW
            </Typography>

          </Box>

          <Box display='flex' alignItems='center'>
            <RayIcon sx={{ display: { xs: 'none', md: 'flex'  }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Try Hard
            </Typography>

          </Box>

          <Box display='flex' alignItems='center'>
            <Tooltip title={ themeMode === 'light' ? 'Activar modo oscuro' : 'Activar modo claro' }>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={ToggleThemeMode}
                sx={{ mr: 2, display: { sm: 'block' } }}
              >
                { themeMode === 'light' ?<MoonIcon /> : <SunIcon /> }
              </IconButton>
            </Tooltip>

            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={ToggleThemeMode}
              sx={{ mr: 2, display: { sm: 'block' } }}
            >
                <SettingsIcon/>
            </IconButton> */}

            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Configuraciones">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <UserAvatar />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
