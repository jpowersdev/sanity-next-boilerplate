import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Global/Navigation';
import styled from 'styled-components';

const Home = () => (
  <StyledHomePage>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  </StyledHomePage>
);

const StyledHomePage = styled.main``;

export default Home;
