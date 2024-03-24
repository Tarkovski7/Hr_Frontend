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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);

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
  const validatePassword = () => {
    if (!/(?=.[a-z])/.test(password)) {
      setPasswordError("Parola küçük harf içermelidir.");
      return false;
    }

    if (!/(?=.[A-Z])/.test(password)) {
      setPasswordError("Parola büyük harf içermelidir.");
      return false;
    }

    if (!/(?=.\d)/.test(password)) {
      setPasswordError("Parola rakam içermelidir.");
      return false;
    }

    if (!/(?=.[!@#$%^&*.,])/.test(password)) {
      setPasswordError("Parola özel karakter içermelidir.");
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    if (!email.endsWith("@bilgeadam.com")) {
      setEmailError("E-Mail adresi @bilgeadam.com ile bitmelidir.");
      return false;
    }

    return true;
  };

  const login = async () => {
    // Giriş işlemi burada gerçekleştirilecek
  };

  // navigate fonksiyonunu burada tanımlayın
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    // E-posta ve şifre bilgilerini state'ten al
    console.log(email);
    console.log(password);

    // Hata mesajlarını temizle
    setPasswordError("");
    setEmailError("");

    // Şifre ve e-posta doğrulama fonksiyonlarını çağır
    const isPasswordValid = validatePassword();
    const isEmailValid = validateEmail();

    // Eğer her iki doğrulama da başarılı ise giriş yap
    if (isPasswordValid && isEmailValid) {
      try {
        // Giriş işlemini gerçekleştir
        await login(email, password);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Giriş başarılı",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/profile-page"); // Giriş başarılı olduğunda profile-page'e yönlendir
        }, 1500);
      } catch (error) {
        // Hata durumunda kullanıcıya bilgi ver
        Swal.fire({
          icon: "error",
          title: "Giriş Başarısız!",
          text: "Lütfen bilgilerinizi kontrol ederek tekrar deneyiniz.",
        });
      }
    }
  };
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
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
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
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                  </CardBody>

                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      to="/profile-page"
                      color="info"
                      href="#pablo"
                      onClick={handleLogin}
                      size="lg"
                      tag={Link}
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
