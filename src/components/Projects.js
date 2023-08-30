import { Container, Row, Col, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import { TabContainer, TabContent, TabPane } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
	const projects = [
		{
			title: "Business Startup",
			description: "A business startup that is looking to grow into a large company.",
			imgUrl: projImg1,
		},
		{
			title: "Business Startup",
			description: "A business startup that is looking to grow into a large company.",
			imgUrl: projImg2,
		},
		{
			title: "Business Startup",
			description: "A business startup that is looking to grow into a large company.",
			imgUrl: projImg3,
		},
		{
			title: "Business Startup",
			description: "A business startup that is looking to grow into a large company.",
			imgUrl: projImg1,
		},
		{
			title: "Business Startup",
			description: "A business startup that is looking to grow into a large company.",
			imgUrl: projImg2,
		},
		{
			title: "Business Startup",
			description: "A business startup that is looking to grow into a large company.",
			imgUrl: projImg3,
		},
	];

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col>
						<TrackVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
									<h2>Projects</h2>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
								</div>
							)}
						</TrackVisibility>
						<TabContainer id="projects-tab" defaultActiveKey="first">
							<Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
								<Nav.Item>
									<Nav.Link eventKey="first">Tab One</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Tab Two</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">Tab Three</Nav.Link>
								</Nav.Item>
							</Nav>
							<TabContent>
								<TabPane eventKey="first">
									<Row>
										{projects.map((project, index) => {
											return <ProjectCard key={index} title={project.title} description={project.description} imgUrl={project.imgUrl} />;
										})}
									</Row>
								</TabPane>
								<TabPane eventKey="second">Lorem Ipsum</TabPane>
								<TabPane eventKey="third">Lorem Ipsum</TabPane>
							</TabContent>
						</TabContainer>
					</Col>
				</Row>
			</Container>
			<img src={colorSharp2} alt="Image" className="background-image-right" />
		</section>
	);
};
