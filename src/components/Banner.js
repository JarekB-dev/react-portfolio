import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setDelta(period);
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
		} else if (isDeleting && updatedText === "") {
			setLoopNum(loopNum + 1);
			setIsDeleting(false);
			setIndex(1);
			setDelta(200);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};
	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
									<span className="tagline">Welcome to my portfolio!</span>
									<h1>
										{`Hi I'm Jarek`} <br />
										<span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'></span>
										<span className="wrap">{text}</span>
									</h1>
									<p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, molestiae?</p>
									<button onClick={() => console.log("connect")}>
										Let's Connect <ArrowRightCircle size={25} />
									</button>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
									<img src={headerImg} alt="Header Img" />
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
