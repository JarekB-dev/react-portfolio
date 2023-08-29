import { Alert, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import e from "express";

export const Newsletter = ({ onValidated, status, message }) => {
	useEffect(() => {
		if (status === "success") clearFields();
	}, [status]);

	const handleSubmit = () => {
		e.preventDefault();
		email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
	};

	const clearFields = () => {
		setEmail("");
	};

	return (
		<Col lg={12}>
			<Row>
				<Col lg={12} md={6} xl={5}>
					<h3>Subscribe to my Newsletter</h3>
					{status === "sending" && <alert>Sending...</alert>}
					{status === "error" && <alert variant="danger">{message}</alert>}
					{status === "success" && <alert variant="success">{message}</alert>}
				</Col>
				<Col md={6} xl={7}>
					<form onSubmit={handleSubmit}>
						<div className="new-email-bx">
							<input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
							<button type="submit">Subscribe</button>"
						</div>
					</form>
				</Col>
			</Row>
		</Col>
	);
};
