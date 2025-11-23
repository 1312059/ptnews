import "./Page404.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Page404 () {
    return (
        <div className="Page404 bg-secondary text-white d-flex justify-content-center align-items-center">
          <Container className="d-flex flex-column justify-content-center align-items-center">
            <p className="h4 text-center">
                This page is unavailable.
            </p>
            <strong className="error404">404</strong>
          </Container>
          <p className="h4 text-center">
            Return to the <Link to="/" className="bg-dark">homepage</Link>
            </p>
        </div>
    );
}

export default Page404;