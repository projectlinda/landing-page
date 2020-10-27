import React, { useState } from 'react';
import styled from 'styled-components';

const NavBarStyled = styled.nav`  
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: SFProRounded;
  font-weight: 200;

  padding: ${props => `${props.theme.spacingUnit(3)} ${props.theme.spacingUnit(1.5)}`};
`

const NavBarItemsStyled = styled.div`  
  display: flex;

  margin-top: ${props => props.theme.spacingUnit(1)};
`

const NavBarItemStyled = styled.a`    
  background-color: ${props => props.active ? props.theme.primaryColor : 'white'};
  border-radius: ${props => props.theme.spacingUnit(3)};
  color: ${props => props.active ? 'white' : props.theme.primaryTextColor};
  padding: ${props => `${props.theme.spacingUnit(0.5)} ${props.theme.spacingUnit(1)}`};
  margin: ${props => props.active ? `0 ${props.theme.spacingUnit(1)}` : 0};
`

const links = [
  { name: 'Home', route: 'home' },
  { name: 'About', route: 'about' },
  { name: 'Contact Us', route: 'contact' },
];

export default function Navbar() {

  const [route, setRoute] = useState('home')
  
  return (
    <NavBarStyled>
      <img src="/images/icon.svg" />
      <NavBarItemsStyled>
        {links.map((m) => <NavBarItemStyled key={m.route} active={route === m.route} onClick={() => setRoute(m.route)}>{m.name}</NavBarItemStyled>)}
      </NavBarItemsStyled>
    </NavBarStyled>
  )
}
