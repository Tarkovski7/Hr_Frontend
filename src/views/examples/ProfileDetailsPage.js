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


import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function ProfileDetailsPage() {
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
            <Row className="mt-3 mb-3">
              <Col md="3">
                <Input placeholder="Fotoğraf" readOnly type="text" disabled />
              </Col>
            </Row>
            <Row className="mt-3 mb-3">
              <Col md="3">
                <Input placeholder="Ad" readOnly type="text" disabled />
              </Col>
              <Col md="3">
                <Input placeholder="Soyad" readOnly type="text" disabled />
              </Col>
              <Col md="3">
                <Input placeholder="Doğum Tarihi" readOnly type="text" disabled />
              </Col>
              <Col md="3">
                <Input placeholder="Doğum Yeri" readOnly type="text" disabled />
              </Col>
            </Row>
            <Row className="mt-3 mb-3">
              <Col md="3">
                <Input placeholder="TC" readOnly type="text" disabled />
              </Col>
              <Col md="3">
                <Input placeholder="İşe Giriş Tarihi" readOnly type="text" disabled />
              </Col>
              <Col md="3">
                <Input placeholder="İşten Çıkış Tarihi" readOnly type="text" disabled />
              </Col>
              <Col md="3">
                <Input placeholder="Aktiflik Durumu" readOnly type="text" disabled />
              </Col>
            </Row>
            <Row className="mt-3 mb-3">
              <Col md="3">
                <Input placeholder="Şirketi" readOnly type="text" disabled />
              </Col>
              <Col md="3">
                <Input placeholder="Mesleği" readOnly type="text" disabled />
              </Col>
              <Col md="3">
                <Input placeholder="Departman" readOnly type="text" disabled />
              </Col>
              <Col md="3">
                <Input placeholder="E-mail" readOnly type="text" disabled />
              </Col>
            </Row>
            <Row className="mt-3 mb-3">
              <Col md="3">
                <Input placeholder="Adres" readOnly type="text" disabled />
              </Col>
              <Col md="3">
                <Input placeholder="Telefon" readOnly type="text" disabled />
              </Col>
              <Col md="3">
                <Input placeholder="Maaş Özellikleri" readOnly type="text" disabled />
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfileDetailsPage;
