import { FC } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { lightTheme, darkTheme } from '../../themes';
import { RootState } from '../../store';

interface Props {
    children: React.ReactNode;
  }

export const AppWrapper: FC<Props> = ( {children} ) => {

  const { themeMode } = useSelector( (state: RootState) => state.ui )

  return (
    <ThemeProvider theme={ themeMode === 'light' ? lightTheme : darkTheme }>
      <CssBaseline />
      {children}
    </ThemeProvider>

  )
}
