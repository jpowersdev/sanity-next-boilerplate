import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';

function Error({ statusCode }) {
  return (
    <StyledErrorPage>
      <h1>{statusCode || 'Error'}</h1>
      <p>
        {statusCode
          ? `An error occurred on server`
          : 'An error occurred on client'}
      </p>
      <p>
        <Link href='/'>
          <a>Go Home</a>
        </Link>
      </p>
      <GlobalStyle />
    </StyledErrorPage>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    position: fixed;
  }
`;

const StyledErrorPage = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  font-size: 125%;

  h1 {
    margin: 10px 0;
  }

  p {
    margin: 10px 0;

    a {
      margin: 10px 0;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
