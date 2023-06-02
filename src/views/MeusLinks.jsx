import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./../styles/style.css";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { buscarLinksPorId, adicionarLink, editarLink, deletarLink } from "./../services/LinkService";
import Form from "react-bootstrap/Form";
import { LINKS } from "./../data/Links";
import Image from "react-bootstrap/Image";

export function MeusLinks() {
  const USER_ID = "6438a0f9b616d2ec7911a0aa";
  const [links, setLinks] = useState([]);
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editLink, setEditLink] = useState({
    tipo: null,
    nome: null,
    url: null,
    _id: null
  });

  const getImagem = (tipo = null) => {
    const item = LINKS.find((l) => l.tipo === tipo);
    return item.imagem;
  };
  const handleChange = (nomeCampo) => {
    return (e) => {
      setEditLink((estadoAnterior) => {
        return {
          ...estadoAnterior,
          [nomeCampo]: e.target.value,
        };
      });
    };
  };

  const handleDanger = async () => {
    if(isEdit) {
      await deletarLink(USER_ID, editLink._id)
      await buscarLinksPorId(USER_ID).then((res) => setLinks(res)) 
    }
    handleClose()
  }
  const handleClick = async () => {
    if (isEdit) {
      await editarLink(USER_ID, editLink)
    } else {
      await adicionarLink(USER_ID, editLink);
    }

    await buscarLinksPorId(USER_ID).then((res) => setLinks(res))
    handleClose()
  };

  const handleClose = () => {
    setEditLink({ tipo: null, nome: null, url: null, _id: null });
    setIsEdit(false);
    setShow(false);
  };

  const handleShow = (data) => {
    if (data.tipo) {
      console.log(data);
      setIsEdit(true)
    }
    setEditLink(data);
    setShow(true);
  };

  useEffect(() => {
    buscarLinksPorId(USER_ID).then((response) => {
      setLinks(response);
    });
  }, []);
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs={12} style={{ textAlign: "end" }}>
            <Button variant="success" onClick={() => handleShow({})}>
              Novo Link
            </Button>
          </Col>
          {links?.map((link, index) => (
            <Col key={`hash-${index}`} xs={12} md={6} className="my-3">
              <Card className="card-clicavel" onClick={() => handleShow(link)}>
                <Card.Body>
                  <Row>
                    <Col xs={10}>
                      <Card.Text>{link.nome}</Card.Text>
                    </Col>
                    <Col xs={2}>
                      <Image
                        width={50}
                        height={50}
                        src={getImagem(link.tipo)}
                        thumbnail
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? 'Editar Link' : 'Novo Link'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Tipo</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={editLink.tipo}
                disabled={isEdit}
                onChange={handleChange("tipo")}
              >
                {
                  LINKS.map(link => <option value={link.tipo}>{link.label}</option>)
                }
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Nome Exibido</Form.Label>
              <Form.Control
                type="text"
                value={editLink.nome}
                onChange={handleChange('nome')}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>URL</Form.Label>
              <Form.Control
                type="text"
                value={editLink.url}
                onChange={handleChange('url')}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDanger} >{isEdit ? 'Apagar link' : 'Cancelar'}</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleClick()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}