import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import {
  Button,
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";
import DefaultFooter from "components/Footers/DefaultFooter";

function ProfilePage() {
  const [userData, setUserData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7198/api/SiteOwner/GetSummarySiteOwner?id=${id}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function if needed
    };
  }, [id]);

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="section">
          <Container>
            <Row>
              <Col md="6">
                <ProfilePageHeader />
              </Col>
              <Col md="6">
                <div className="button-container">
                  <Button className="btn-round" color="info" size="lg">
                    Tüm Detaylar
                  </Button>
                  <Row className="mt-3 mb-3">
                    <Col md="6">
                      <FormGroup>
                        <Label for="firstName">Ad</Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={userData.firstName || ""}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="lastName">Soyad</Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={userData.lastName || ""}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mt-3 mb-3">
                    <Col md="6">
                      <FormGroup>
                        <Label for="fullName">Tam Ad</Label>
                        <Input
                          id="fullName"
                          type="text"
                          value={userData.fullName || ""}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="email">E-posta</Label>
                        <Input
                          id="email"
                          type="email"
                          value={userData.email || ""}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mt-3 mb-3">
                    <Col md="6">
                      <FormGroup>
                        <Label for="phoneNumber">Telefon</Label>
                        <Input
                          id="phoneNumber"
                          type="text"
                          value={userData.phoneNumber || ""}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="address">Adres</Label>
                        <Input
                          id="address"
                          type="text"
                          value={userData.address || ""}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mt-3 mb-3">
                    <Col md="6">
                      <FormGroup>
                        <Label for="departmentName">Departman</Label>
                        <Input
                          id="departmentName"
                          type="text"
                          value={userData.departmentName || ""}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
