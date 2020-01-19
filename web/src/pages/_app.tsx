import NextApp from 'next/app';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import '../style/normalize.css';
import { theme } from '../style/theme';
import { client } from '../utility/client';
import Navigation from '../components/Global/Navigation';
import groq from 'groq';
import Footer from '../components/Global/Footer';
import Head from '../components/Global/Head';
import { parents } from '../utility/query';

function App({ Component, pageProps, global }) {
  // console.log(global);
  return (
    <ThemeProvider theme={{ ...theme, ...global.theme }}>
      <Head title={pageProps.title} {...pageProps.seo} />
      <Navigation {...global.navigation} />
      <Component {...pageProps} />
      <GlobalStyle />
      <Footer />
    </ThemeProvider>
  );
}

App.getInitialProps = async appContext => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await NextApp.getInitialProps(appContext);

  const global = await client.fetch(
    groq`
      *[_id == 'global'][0]{
        ...,
        theme{
          colors{
            "primary": primary.hex
          }
        },
        navigation{
          list[]{
            ...,
            link->{
              ...,
              ${parents}
            },
            children[]{
              ...,
              link->{
                ...,
                ${parents}
              },
              children[]{
                ...,
                link->{
                  ...,
                  ${parents}
                } 
              }
            }
          }
        }
      }
    `
  );

  return { ...appProps, global };
};

const GlobalStyle = createGlobalStyle`
  h1,h2,h3,h4,h5 {
    margin-top: 0;
  }
`;

export default App;
