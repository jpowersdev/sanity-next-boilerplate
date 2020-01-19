import React from 'react';
import Link from 'next/link';
import styled, { DefaultTheme } from 'styled-components';
import { container } from '../../style/partials';
import useScrollTop from '../../hooks/useScrollTop';
import { linkBuilder } from '../../utility/link';

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`
}));

const Nav = props => {
  const scrollTop = useScrollTop();
  return (
    <StyledNav sticky={scrollTop > 100}>
      <StyledNavbar sticky={scrollTop > 100}>
        <ul>
          {props.list.map(nav => {
            let link = linkBuilder(nav.link);
            return (
              <li key={nav._key}>
                <Link href={link === '/' ? link : '/[...slug]'} as={link}>
                  <a>{nav.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </StyledNavbar>
    </StyledNav>
  );
};

type NavProps = {
  sticky?: boolean;
  theme?: DefaultTheme;
  className?: any;
};
const StyledNav = styled.nav`
  position: fixed;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 0;
  z-index: 5;
  background: ${({ sticky, theme }: NavProps) =>
    sticky ? theme.colors.primary : 'transparent'};
  box-shadow: ${({ sticky }: NavProps) =>
    sticky ? '2px 2px 4px rgba(0, 0, 0, 0.5)' : 'none'};
  transition: all 0.3s ease;
`;

const StyledNavbar = styled.div`
  transition: all 0.3s ease;
  text-align: center;
  margin: 15px;
  padding: 2px 12px;
  box-sizing: border-box;
  ${container}
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ sticky }: NavProps) =>
    sticky ? 'none' : '2px 2px 4px rgba(0, 0, 0, 0.5)'};

ul {
  display: flex;
  justify-content: space-between;
  padding: 0;
}
li {
  display: flex;
  padding: 6px 8px;
}
a {
  color: white;
  text-decoration: none;
  font-size: 13px;
}
`;

export default Nav;
