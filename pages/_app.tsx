import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '../src/store';
import { AppWrapper } from '../src/components/ui/AppWrapper';


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </Provider>
  )
}

export default MyApp
