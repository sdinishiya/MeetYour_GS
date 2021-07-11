import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
	} from "./footerstyle";

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='./about' activeStyle> About </NavLink>
		<NavLink to='./projects' activeStyle> Projects </NavLink>
		<NavLink to='./donations' activeStyle> Donations</NavLink>
		<NavLink to='./Contact' activeStyle> Contact Us </NavLink> 
		</NavMenu>

		<NavBtn>
        <NavBtnLink to='/pages/login'>Sign In</NavBtnLink>
        <NavBtnLink to='/pages/signup'>Sign Up </NavBtnLink>   
		</NavBtn>
	</Nav>
</>
);
};

export default Navbar;
