import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { atualizarUsuario, carregarPerfil } from "../services/CadastroService";


export function Perfil() {
  const USER_ID = "6438a0f9b616d2ec7911a0aa";

  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const buscarPerfil = async () => {
    carregarPerfil(USER_ID).then(res => {
        setName(res.nome)
        setEmail(res.email)
    })
  }
  useEffect(() => {
    buscarPerfil()
  }, [])
  
  const updatePerfil = async () => {
    const data = {
        nome: name,
        email: email
    }
    await atualizarUsuario(USER_ID, data)
    await buscarPerfil()
    alert('Perfil Atualizado')
  }

  return (

    <Container>

      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card className="mt-5">
            <Card.Body>

              <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Seu Nome"
                  />
                </Form.Group>
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
                    variant="primary"
                    type="button"
                    onClick={() => {alert('Para fazer')}}
                  >
                    Atualizar senha
                  </Button>
                  <Button
                    variant="success"
                    type="button"
                    onClick={() => updatePerfil()}
                  >
                    Salvar
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