import { Container, Nav, Navbar} from "react-bootstrap"

export function NavBar () {
    return (
        <NavBar bg="dark" variant="dark">
            <Container>
                <NavBar.Brand href="/dashboard">LinkTree</NavBar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="dashboard/meus-links">Meus Links</Nav.Link>
                    <Nav.Link href="dashboard/perfil">Perfil</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link eventKey={2} onClick={() => {alert("Fazer a função que desloga")}}>
                        Sair
                    </Nav.Link>
                </Nav>
            </Container>
        </NavBar>
    )
}