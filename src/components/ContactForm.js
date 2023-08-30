import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
	const formInitialDetails = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	};

	const [formDetails, setFormDetails] = useState(formInitialDetails);
	const [buttonText, setButtonText] = useState("Send Message");
	const [status, setStatus] = useState({});

	const onFormUpdate = (category, value) => {
		setFormDetails({
			...formDetails,
			[category]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setButtonText("Sending...");
		let response = await fetch("http://localhost:5000/contact", {
			method: "POST",
			headers: {
				"Content-Type": "Application/json;charset=utf-8",
			},
			body: JSON.stringify(formDetails),
		});
		setButtonText("Send Message");
		let result = response.json();
		setFormDetails(formInitialDetails);
		if (result.code === 200) {
			setStatus({
				success: true,
				status: "Message Sent",
			});
		} else {
			setStatus({ success: false, message: "Something went wrong, please try again." });
		}
	};

	return (
		<section className="contact">
			<Container>
				<Row className="align-items-center">
					<Col md={6}>
						<img src={contactImg} alt="Contact Us" />
					</Col>
					<Col md={6}>
						<h2>Contact Us</h2>
						<form onSubmit={handleSubmit}>
							<Row>
								<Col sm={6} className="px-1">
									<input
										type="text"
										name="firstName"
										id="firstName"
										placeholder="First Name"
										value={formDetails.firstName}
										onChange={(e) => onFormUpdate("firstName", e.target.value)}
									/>
								</Col>
								<Col sm={6} className="px-1">
									<input
										type="text"
										name="firstName"
										id="firstName"
										placeholder="Last Name"
										value={formDetails.lastName}
										onChange={(e) => onFormUpdate("lastName", e.target.value)}
									/>
								</Col>
								<Col sm={6} className="px-1">
									<input
										type="email"
										name="firstName"
										id="firstName"
										placeholder="Email Address"
										value={formDetails.email}
										onChange={(e) => onFormUpdate("email", e.target.value)}
									/>
								</Col>
								<Col sm={6} className="px-1">
									<input
										type="tel"
										name="firstName"
										id="firstName"
										placeholder="Phone Number"
										value={formDetails.phone}
										onChange={(e) => onFormUpdate("phone", e.target.value)}
									/>
								</Col>
								<Col>
									<textarea
										name="message"
										id="message"
										placeholder="Message"
										value={formDetails.message}
										onChange={(e) => onFormUpdate("message", e.target.value)}
									/>
									<button type="submit">
										<span>{buttonText}</span>
									</button>
								</Col>
								{status.message && (
									<Col>
										<p className={status.success === false ? "danger" : "success"}>{status.message}</p>
									</Col>
								)}
							</Row>
						</form>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
