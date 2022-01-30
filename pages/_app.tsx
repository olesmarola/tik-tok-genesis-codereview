import type { AppProps } from 'next/app';
import axios from 'axios';
import { SWRConfig } from 'swr';
import { GlobalStyles } from 'twin.macro';

import axiosFetcher from '../api/fetchers/axiosFetcher';
import ThemeProvider from '../components/themeProvider';

import '../styles/globals.css';

axios.defaults.baseURL = ''; // remove api url because use mock data
axios.defaults.headers.common['x-rapidapi-host'] = 'tiktok33.p.rapidapi.com';
axios.defaults.headers.common['x-rapidapi-key'] =
  'b5a55b04bdmsh4ce2cd7032dda44p16f331jsne14247bc5d4f';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SWRConfig value={{ fetcher: axiosFetcher }}>
        <GlobalStyles />
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  );
}

export default MyApp;
