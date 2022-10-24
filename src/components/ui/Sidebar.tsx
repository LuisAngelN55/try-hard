import { FC } from 'react'
import Image from 'next/image';
import { useDispatch,  } from 'react-redux';
import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Drawer, useTheme } from '@mui/material';


import { MyDrawer } from './';


const navItems = ['Dashboard', 'Clientes', 'Pagos'];


interface Props {
    children?: React.ReactNode;
    sidebarWidth: number[];
}


export const Sidebar:FC<Props> = ({ sidebarWidth, children }) => {

    const dispatch = useDispatch();

    const theme = useTheme();

  return (
    <Box component="nav">
        <MyDrawer sidebarWidth={ sidebarWidth }>
            
            <Box sx={{ textAlign: 'center' }}>

                <Box sx={{ mx: '20px', my: '15px', maxHeight:'200px'}}>
                    <Image src='/assets/img/Logo_TryHard_Blanco.png' alt="Try Hard Logo" width="210px" height="68px"/>
                </Box>
                
                <Divider />

                <List>
                    {
                        navItems.map((item) => (
                            <ListItem key={item} disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                    <ListItemText primary={item} style={{ color: 'white' }} />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
                
            </Box>

        </MyDrawer>
    </Box>
  )
}
