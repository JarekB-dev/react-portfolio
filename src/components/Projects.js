import { Container, Row, Col, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import { TabContainer, TabContent, TabPane } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
	const projects = [
		{
			title: "Business Startup",
			description: "A business startup that is looking to grow into a large company.",
			imgUrl: projImg3,
		},
		{
			title: "Business Startup",
			description: "A business startup that is looking to grow into a large company.",
			imgUrl: projImg3,
		},
		{
			title: "Business Startup",
			description: "A business startup that is looking to grow into a large company.",
			imgUrl: projImg3,
		},
		{
			title: "Business Startup",
			description: "A business startup that is looking to grow into a large company.",
			imgUrl: projImg3,
		},
		{
			title: "Business Startup",
			description: "A business startup that is looking to grow into a large company.",
			imgUrl: projImg3,
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
						<h2>Projects</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
						<TabContainer id="projects-tab" defaultActiveKey="first">
							<Nav variant="pills" defaultActiveKey="/home">
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
