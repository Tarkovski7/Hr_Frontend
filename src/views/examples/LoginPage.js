import React, { useState, useContext } from "react"; // useState ve useContext hook'larını import ediyoruz
import { Link, useNavigate } from "react-router-dom"; // Link bileşenini ve useNavigate hook'unu import ediyoruz
import Swal from "sweetalert2";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function LoginPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

  const [email, setEmail] = useState(""); // E-posta state'i
  const [password, setPassword] = useState(""); // Şifre state'i
  const [emailError, setEmailError] = useState(""); // E-posta hata mesajı state'i
  const [passwordError, setPasswordError] = useState(""); // Şifre hata mesajı state'i
  const navigate = useNavigate();

  const validateEmail = () => {
    if (!email) {
      setEmailError("E-posta adresi boş olamaz.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Geçersiz e-posta adresi.");
      return false;
    }

    setEmailError(""); // Eğer hata yoksa hata mesajını temizle
    return true;
  };


  const validatePassword = () => {
    if (!password) {
      setPasswordError("Şifre boş olamaz.");
      return false;
    }

    // Şifrenin belirli bir uzunlukta olması gerektiğini kontrol edebilirsiniz
    if (password.length < 6) {
      setPasswordError("Şifre en az 6 karakter olmalıdır.");
      return false;
    }

    setPasswordError(""); // Eğer hata yoksa hata mesajını temizle
    return true;
  };


  const handleLogin = (e) => {
    e.preventDefault(); // Formun sayfa yenilenmesini engelle

    // E-posta ve şifre doğrulama fonksiyonlarını çağır
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // Eğer e-posta ve şifre geçerliyse, giriş yap
    if (isEmailValid && isPasswordValid) {
      // Giriş işlemi burada gerçekleştirilecek
      console.log("Giriş başarılı!");
      navigate("/profile-page")
    }
  };



  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login.jpg") + ")",
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/now-logo.png")}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="E-mail..."
                        type="email"
                        value={email}
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        onChange={(e) => setEmail(e.target.value)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_lock-circle-open"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Şifre"
                        type="password"
                        value={password}
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                        onChange={(e) => setPassword(e.target.value)}
                      ></Input>
                    </InputGroup>
                  </CardBody>

                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      // to="/profile-page"
                      color="info"
                      href="#pablo"
                      size="lg"
                      onClick={handleLogin}
                      // tag={Link}
                    >
                      Giriş Yap
                    </Button>

                    <div className="pull-left">
                      <h6>
                        <a
                          className="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Kayıt Ol
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Bize Ulaşın
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default LoginPage;
