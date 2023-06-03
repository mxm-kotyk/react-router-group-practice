import { Outlet } from 'react-router-dom';
import { useTheme } from '@emotion/react';

import { Container } from 'components/App/App.styled';
import { FaFlagUsa } from 'react-icons/fa';

import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';
import { Suspense } from 'react';

export const Header = () => {
  const theme = useTheme();

  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <FaFlagUsa size="40px" color={theme.colors.light} />

            <LinkWrapper>
              <NavLinkStyled to="/">Home</NavLinkStyled>
              <NavLinkStyled to="/countrys">Countries</NavLinkStyled>
            </LinkWrapper>
          </HeaderWrapper>
        </Container>
      </NavBar>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};
