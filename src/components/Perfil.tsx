import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../assets/img/fotico.jpeg";
import "../App.css";
import { useState } from "react";

interface User {
  udi: string;
  name: string;
}
export const Perfil = () => {
  const [users, setUsers] = useState<User>();
  const newTest: User = {
    udi: "esrt123",
    name: "luis"
  }

  const login = () => {
    setUsers({
      udi: "abec123",
      name: "Torcoroma arias",
    });
  };
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <button onClick={login}>ver</button>
          <pre>{JSON.stringify(users)}</pre>
        </Col>
      </Row>
    </Container>
  );
};
