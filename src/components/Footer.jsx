import Container from "react-bootstrap/Container";

function Footer () {
    const year = new Date() .getFullYear()
    return (
        <footer className="bg-secondary">
            <Container>
                <p className="text-light text-center m-0 py-3">
                    Political Thought Studio Copyright {year}. All rights reserved.
                </p>
            </Container>
        </footer>
    );
}

export default Footer;