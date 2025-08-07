import { Col, Card } from "react-bootstrap";
import { Link } from "react-router";

// Componente CardJuegos que muestra la información de un juego
// Recibe un objeto juegos con propiedades como imagen, nombreJuego, precio, categoria, plataforma
// y descripcion, y renderiza una tarjeta con estos datos.

const CardJuegos = ({ juegos }) => {
  return (
    <>
      <Col xs={12} md={4} lg={3} className="mb-3">
        <Card className="h-100 d-flex flex-column p-0 card-hover tamaño">
          <Card.Img variant="top" src={juegos.imagen} alt={juegos.nombreJuego} className="img-fluid w-100" />
          <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
            <div className="flex-grow-1 p-0">
              <ul className="list-unstyled">
                <li className="mb-1">
                  <strong>Precio:</strong> ${juegos.precio}
                </li>
                <li className="mb-1">
                  <strong>Categoria:</strong> {juegos.categoria}
                </li>
                <li className="mb-1">
                  <strong>Plataforma:</strong> {juegos.plataforma}
                </li>
                <li className="mb-1">
                  <strong>
                    Descripción: <br></br>
                  </strong>{" "}
                  <small>{juegos.descripcion.substring(0, 50) + "..."}</small>
                </li>
              </ul>
            </div>
          </Card.Body>
          <Card.Footer className="text-end">
            <Link className="btn btn-danger" to={"/detalle/" + juegos.id}>
              Ver más
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default CardJuegos;
