import styled from 'styled-components';
import { container } from '../../style/partials';

const Footer = () => {
  return (
    <StyledFooter>
      <div className='container'>
        <p>Column 1</p>
        <p>Column 2</p>
        <p>Column 3</p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 20px;
  background: ${({ theme }) => theme.colors.primary};
  &,
  a {
    color: #fff;
  }

  .container {
    ${container}
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Footer;
