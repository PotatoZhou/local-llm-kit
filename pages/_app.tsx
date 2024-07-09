import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/frame';
import '../styles/globals.css';
import '../styles/sidebar.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const login = true
  const darkMode = true;
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });
  useEffect(() => {
    if (!login) {
      router.push('/login')
    }
  }, [login])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        {login && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
    </ThemeProvider>
  )
}
