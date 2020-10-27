import React, { useState } from 'react'
import styled from 'styled-components'
import { basePath, spacing } from '../constants'

const NavBarStyled = styled.nav`  
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: SFProRounded;
  font-weight: 200;

  padding: ${spacing(3)} ${spacing(1.5)};

  @media only screen and (min-device-width: 768px) {
    flex-direction: row;
  }

`

const NavBarItemsStyled = styled.div`  
  display: flex;

  margin-top: ${spacing(1)};

  @media only screen and (min-device-width: 768px) {
    margin-left: auto;
  }
`

const NavBarItemStyled = styled.a`    
  background-color: ${props => props.active ? props.theme.primaryColor : 'white'};
  border-radius: ${spacing(3)};
  color: ${props => props.active ? 'white' : props.theme.primaryTextColor};
  padding: ${spacing(0.5)} ${spacing(1)};
  margin: ${props => props.active ? `0 ${spacing(1)}` : 0};
`

const links = [
  { name: 'Home', route: 'home' },
  { name: 'About', route: 'about' },
  { name: 'Contact Us', route: 'contact' },
];

export default function Navbar() {

  const [route, setRoute] = useState('home')

  const onNavClick = (route) => {
    
    const yOffset = -10; 
    const element = document.getElementById(route)
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
    
    window.scrollTo({top: y, behavior: 'smooth'})

    setRoute(route)
  }
  
  return (
    <NavBarStyled>
      <img src={`${basePath}/images/icon.svg`} />
      <NavBarItemsStyled>
        {links.map((m) => <NavBarItemStyled key={m.route} active={route === m.route} onClick={() => onNavClick(m.route)}>{m.name}</NavBarItemStyled>)}
      </NavBarItemsStyled>
    </NavBarStyled>
  )
}
