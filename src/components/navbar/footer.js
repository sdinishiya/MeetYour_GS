import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./footerstyle";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Book Appointments</FooterLink>
			<FooterLink href="#">Project Details</FooterLink>
			<FooterLink href="#">Donations</FooterLink>
			<FooterLink href="#">Resource Distribuiton</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">No. 24A, Udapalatha Divison, Gampola</FooterLink>
			<FooterLink href="#">Tp: 081 2123456 </FooterLink>
			<FooterLink href="#">Fax: 081 2123456 </FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-mail">
				<span style={{ marginLeft: "10px" }}>
				udapalathags@gmail.com
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				www.facebook.com/udapalathags 
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				www.twitter.com/udapalathags
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				www.youtube.com/udapalathags
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
</Container>
	</Box>
);
};
export default Footer;
