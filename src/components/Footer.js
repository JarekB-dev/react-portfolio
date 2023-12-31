import { Col, Container, Row } from "react-bootstrap";
import { MailChimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					<MailChimpForm />
					<Col sm={6}>
						<img src={logo} alt="logo" />
					</Col>
					<Col sm={6} className="text-cen text-sm-end">
						<div className="social-icon">
							<a href="">
								<img src={navIcon} alt="" />
							</a>
							<a href="">
								<img src={navIcon2} alt="" />
							</a>
							<a href="">
								<img src={navIcon3} alt="" />
							</a>
						</div>
						<p>Copyright 2023. All Right Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
