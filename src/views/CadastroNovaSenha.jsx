/* eslint-disable no-restricted-globals */
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";
import { atualizarSenhaComToken } from "../services/CadastroService";


export function CadastroNovaSenha() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const atualizarSenha = async () => {
    if(password !== passwordConfirm) {
      alert('As senhas devem ser iguais')
      return
    }

    if(location.search.includes('token=')) {
      const [, token] = location.search.split('=')
      await atualizarSenhaComToken(token, password)
      location.href = 'http://localhost:3000/login'
    }

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
                  </Col>
                  <Col style={{ textAlign: "center" }} xs={10}>
                    Cadastro De Nova Senha
                  </Col>
                </Row>
              </Card.Title>

              <Form>

                <Form.Label>Nova Senha</Form.Label>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <InputGroup className="mb-3">
                <InputGroup.Text onClick={() => setShowPassword(state => !state) }>{showPassword ? '°_°' : '-_-'}</InputGroup.Text>
                  <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Sua Senha"
                  />
                </InputGroup>
                </Form.Group>

                <Form.Label>Confirme Nova Senha</Form.Label>
                <Form.Group  controlId="formBasicPassword">
                <InputGroup className="mb-3">
                <InputGroup.Text onClick={() => setShowPassword(state => !state) }>{showPassword ? '°_°' : '-_-'}</InputGroup.Text>
                  <Form.Control
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    value={passwordConfirm}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirme Sua Senha"
                  />
                </InputGroup>
                </Form.Group>
                <div className="d-grid gap-2 mt-4">
                  <Button
                    variant="success"
                    type="button"
                    onClick={() => atualizarSenha()}
                  >
                    Atualizar senha
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