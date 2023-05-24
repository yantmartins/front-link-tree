import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useState } from "react";

import { Link } from "react-router-dom";
import { recuperarSenhaPorEmail } from "../services/CadastroService";

export function RecuperarSenhaTelaEmail() {
  const [email, setEmail] = useState("");

  const recuperarSenha = async () => {
    if(!email) {
      alert('Informe o email')
      return
    }

    const response = await recuperarSenhaPorEmail(email)

    console.log(response);
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={4}>
          <Card className="mt-5">
            <Card.Body>
              <Card.Title>
                <Row className="justify-content-md-center">
                  <Col xs={12} style={{ textAlign: "center" }} className="my-3">
                    <Image
                      width={100}
                      height={100}
                      alt="171x180"
                      src="https://www.nicepng.com/png/detail/543-5431552_oktobercat-github-octocat.png"
                    />
                  </Col>
                  <Col style={{ textAlign: "center" }} xs={10}>
                    Recuperação de senha
                  </Col>
                </Row>
              </Card.Title>

              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Seu Email"
                  />
                </Form.Group>
                <div className="d-grid gap-2 mt-4">
                  <Button
                    variant="success"
                    type="button"
                    onClick={() => recuperarSenha()}
                  >
                    Recuperar
                  </Button>

                  <Button variant="link">
                    <Link to='/login'>Já tem conta? Faça Login</Link>
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}