import React from "react";
import { Container, Nav, NavDropdown, Row, Col } from "react-bootstrap"
import { MdOutlineEmail } from "react-icons/md"
import { BsAt, BsGithub } from "react-icons/bs"
const Navbar = () => {
    
    return (
        <Container className="border-bottom border-success">

            <Nav variant="success" activeKey="1" className="text-dark">
                <Row className="w-100">
                    <Col className="col-12 col-md-6  text-md-end">
                        <NavDropdown className="text-dark w-100" title="Instrukcja" id="nav-dropdown">

                            <Container >
                                Wpisz i zaznacz województwo, w którym twoim zdaniem znajduje się <br />podana miejscowość, a tym samym
                                zobacz, jak dobrze znasz geografię Polski!<br />
                                <hr />
                                Jeżeli nie trafisz, strzałka pokaże Ci, w którą stronę od<br /> podanego województwa znajduje się szukane województwo.
                                <br />
                                <h4>Powodzenia!</h4>

                            </Container>
                        </NavDropdown>
                    </Col>
                    <Col className="col-12 col-md-6">
                        <NavDropdown className="text-dark w-100"  title="Kontakt" id="nav-dropdown">

                            <Container >
                                Jeżeli wystąpił jakiś problem, lub chcesz się po prostu skontaktować, napisz emaila!<br />
                                <a href="mailto:lukaszkepa03@gmail.com" style={{ textDecoration: "none" }}><MdOutlineEmail /> Lukaszkepa03<BsAt />gmail.com</a>
                                <hr />
                                Możesz też zerknąc na moje pozostałe projekty tutaj:
                                <br />
                                <a href="https://github.com/kepa-lukasz" style={{ textDecoration: "none" }}><BsGithub/> https://github.com/kepa-lukasz</a>


                            </Container>
                        </NavDropdown>
                    </Col>
                </Row>
            </Nav>
        </Container>
    )
}
export default Navbar