import Accordion from 'react-bootstrap/Accordion';

export default function Faqs(){
    return(
    <div className="text-center">
            <h1 className="fs-2 text-light m-5">FAQs</h1>

            <Accordion data-bs-theme="dark">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header><span className="badge text-bg-primary rounded-circle" style={{backgroundColor:"rgba(1,1,12)"}}>1</span> &nbsp;&nbsp;What is Careerlink?</Accordion.Header>
                    <Accordion.Body>
                        CareerLink is a simple, intuitive way to connect, share, and grow. Whether it’s exchanging knowledge, finding collaborators, or accessing resources, our platform empowers individuals to build meaningful relationships and achieve goals faster through collective support and shared experiences.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header><span className="badge text-bg-primary rounded-circle" style={{backgroundColor:"rgba(1,1,12)"}}>2</span> &nbsp;&nbsp;Why go for Careerlink?</Accordion.Header>
                    <Accordion.Body>
                        CareerLink solves the challenge of disconnected communities and scattered resources.<br/>
                        By linking people and ideas, we create a unified space where collaboration thrives, knowledge flows easily, and opportunities become accessible to everyone, regardless of background or location.
                        Our idea behind this project is to create a platform that connects people, ideas, and resources seamlessly. By fostering collaboration and accessibility, we aim to build meaningful links that empower users to share knowledge, grow together, and strengthen communities through simple, intuitive, and engaging digital experiences.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header><span className="badge text-bg-primary rounded-circle" style={{backgroundColor:"rgba(1,1,12)"}}>3</span> &nbsp;&nbsp;What makes CareerLink unique?</Accordion.Header>
                    <Accordion.Body>
                        Unlike traditional platforms, Careerlink focuses on meaningful connections rather than just networking. We emphasize collaboration, accessibility, and shared growth, ensuring that users don’t just meet but truly engage, learn, and create together in a supportive digital environment.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header><span className="badge text-bg-primary rounded-circle" style={{backgroundColor:"rgba(1,1,12)"}}>4</span> &nbsp;&nbsp;Who can use CareerLink?</Accordion.Header>
                    <Accordion.Body>
                        Our project is designed for anyone seeking connection — students, professionals, creators, or communities. Whether you want to share knowledge, collaborate on projects, or discover new opportunities, Linked provides an inclusive space where everyone can participate and benefit.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header><span className="badge text-bg-primary rounded-circle" style={{backgroundColor:"rgba(1,1,12)"}}>5</span> &nbsp;&nbsp;Why did we choose the name “CareerLink”?</Accordion.Header>
                    <Accordion.Body>
                        The name “CareerLink” reflects our vision of building bridges between people, ideas, and communities. It symbolizes connection, collaboration, and growth — reminding users that every link they create strengthens the network and opens new possibilities for learning and progress.
                    </Accordion.Body>
                  </Accordion.Item>


                </Accordion>
    </div>
    )
}
