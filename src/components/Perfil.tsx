import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../assets/img/fotico.jpeg";
import "../App.css";
export const Perfil = () => {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <img src={img} alt="foto" className="imgen" />
        </Col>
      </Row>
    </Container>
  );
};
