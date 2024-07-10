import { createTheme } from '@mui/material';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/frame';
import '../styles/globals.css';
import '../styles/sidebar.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [theme, setTheme] = useState<{
    sider: string, content: string, header: string
  }>({
    sider: 'rgba(0, 0, 0, 0.8)',
    content: 'rgba(0, 0, 0, 0.70)',
    header: 'rgba(0, 0, 0, 0.15)'
  })
  const login = true
  const darkMode = useState<Boolean>(false)
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
    <ConfigProvider theme={{
      token: {
        colorSplit: 'rgba(0, 0, 0, 1)',
      },
      components: {
        Layout: {
          siderBg: darkMode ? theme.sider : 'white',
          bodyBg: theme.content
        },
        Card: {
          actionsBg: 'rgba(0, 0, 0, 0.02)',
          extraColor: 'rgba(0, 0, 0, 0.02)'
        },
        Menu: {
          activeBarBorderWidth: 2,
          darkItemBg: '',
          darkItemSelectedBg: 'rgba(0, 0, 0, 0.02)',
          // darkItemSelectedColor: 'rgba(0, 0, 0, 1)'
        },
      }
    }}>
        {login && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
    </ConfigProvider>
  )
}
