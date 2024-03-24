import React from "react";

import { Input } from "reactstrap";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function ProfilePage() {
  const [pills, setPills] = React.useState("3");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />

      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button className="btn-round" color="info" size="lg">
                Tüm Detaylar
              </Button>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip515203352"
                size="lg"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Follow me on Twitter
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip340339231"
                size="lg"
              >
                <i className="fab fa-instagram"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                Follow me on Instagram
              </UncontrolledTooltip>
            </div>
            <Row className="mt-3 mb-3">
              <Col md="3">
                <Input placeholder="{adı}" readonly="" type="text" disabled />
              </Col>
              <Col md="3">
                <Input
                  placeholder="{Soyadı}"
                  readonly=""
                  type="text"
                  disabled
                />
              </Col>
              <Col md="3">
                <Input placeholder="{Mail}" readonly="" type="text" disabled />
              </Col>
              <Col md="3">
                <Input
                  placeholder="{Telefon}"
                  readonly=""
                  type="text"
                  disabled
                />
              </Col>
            </Row>
            <Row className="mt-3 mb-3">
              <Col md="3">
                <Input placeholder="{adres}" readonly="" type="text" disabled />
              </Col>
              <Col md="3">
                <Input
                  placeholder="{Meslek}"
                  readonly=""
                  type="text"
                  disabled
                />
              </Col>
              <Col md="3">
                <Input
                  placeholder="{Departman}"
                  readonly=""
                  type="text"
                  disabled
                />
              </Col>
              <Col md="3">
                <Input placeholder="{adı}" readonly="" type="text" disabled />
              </Col>
            </Row>
            <Row className="mt-3 mb-3">
              <Col md="3">
                <Input placeholder="{adı}" readonly="" type="text" disabled />
              </Col>
              <Col md="3">
                <Input placeholder="{adı}" readonly="" type="text" disabled />
              </Col>
              <Col md="3">
                <Input placeholder="{adı}" readonly="" type="text" disabled />
              </Col>
              <Col md="3">
                <Input placeholder="{adı}" readonly="" type="text" disabled />
              </Col>
            </Row>

            {/* Portfolio */}
            
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
