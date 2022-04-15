import { Nav } from 'react-bootstrap';

const Navbar = () => {

    return (
        <Nav variant='tabs' defaultActiveKey='/'>
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/day">Day View</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/week">Week View</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/month">Month View</Nav.Link>
            </Nav.Item>

        </Nav>
    );
}

export default Navbar;