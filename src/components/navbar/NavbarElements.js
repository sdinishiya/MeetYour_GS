import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #000000;
height: 85px;
display: flex;
justify-content: flex-start;
padding-left: 720px;
z-index: 10;
text-align: right;
font-weight: bold;
`;

export const NavLink = styled(Link)`
color: #ffffff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 2rem;
height: 100%;
cursor: pointer;
&.active {
	color: #FBC76E;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: right;
margin-right: -24px;
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 5px;
background: #0f0f0f;
padding: 10px 24px;
color: #ffffff;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #000000;
}
`;
