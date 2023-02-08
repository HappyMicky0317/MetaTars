import React from "react";
import { Navbar, Nav, Row, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <div className="mobile-section">
            <Row className="g-0 align-items-center">
              <div className="col-4 logo-image"><img height={'70px'} src="/images/logo.gif" alt="" /> <span className="logo-text"> MetaTars </span></div>
              <div className="col-6">
                {/* <div className="social-link-header">
                  <ul>
                    <li><a target="_blank" href="https://discord.gg/2G4vHsJj"><img width={'20px'} src="/images/social/discord.png" /></a> </li>
                    <li><a target="_blank" href="https://www.facebook.com/DeStormPower"><img width={'20px'} src="/images/social/facebook.png" /></a> </li>
                    <li><a target="_blank" href="https://www.instagram.com/destorm/?hl=en"><img width={'20px'} src="/images/social/instagram.png" /></a> </li>
                    <li><a target="_blank" href="https://twitter.com/destorm?lang=en"><img width={'20px'} src="/images/social/twitter.png" /></a> </li>
                  </ul>
                </div> */}
              </div>
              <div className="col-2"><Navbar.Toggle aria-controls="responsive-navbar-nav" /></div>
            </Row>
          </div>

        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#aboutus">Benefits</Nav.Link>
            <Nav.Link target={'_blank'} href="/images/whitepaper.pdf">Whitepaper</Nav.Link>
            <Nav.Link href="#giveaways">Giveaways</Nav.Link>
            <Nav.Link href="#roadmap">Roadmap</Nav.Link>
            <Nav.Link href="#ourpartner">Our Partners</Nav.Link>
          </Nav>
          <div className="social-link-header">
            <ul>
              <li><a target="_blank" href="https://discord.com/invite/paHAFY2pXc"><img width={'30px'} src="/images/social/discord.png" /></a> </li>
              <li><a target="_blank" href="https://www.facebook.com/DeStormPower"><img width={'30px'} src="/images/social/facebook.png" /></a> </li>
              <li><a target="_blank" href="https://www.instagram.com/destorm/?hl=en"><img width={'30px'} src="/images/social/instagram.png" /></a> </li>
              <li><a target="_blank" href="https://twitter.com/destorm?lang=en"><img width={'30px'} src="/images/social/twitter.png" /></a> </li>
            </ul>
          </div>
          <Nav>
            <Nav.Link href="https://discord.com/invite/paHAFY2pXc" className="nav-social">
              <div>
                <img src="/images/social/discord.png" />
              </div>
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/DeStormPower" className="nav-social">
              <div>
                <img src="/images/social/facebook.png" />
              </div>
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/destorm/?hl=en" className="nav-social">
              <div>
                <img src="/images/social/instagram.png" />
              </div>
            </Nav.Link>
            <Nav.Link href="https://twitter.com/destorm?lang=en" className="nav-social">
              <div>
                <img src="/images/social/twitter.png" />
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
