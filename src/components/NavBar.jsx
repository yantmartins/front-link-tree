import { Container, Nav, Navbar } from "react-bootstrap"


export function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/dashboard">LinkTree</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/dashboard/meus-links">Meus Links</Nav.Link>
            <Nav.Link href="/dashboard/perfil">Perfil</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} onClick={() => {alert('Fazer a função que desloga')}}>
              Sair
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}