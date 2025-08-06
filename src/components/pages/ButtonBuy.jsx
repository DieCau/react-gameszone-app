import { Link } from "react-router";

// Componente ButtonBuy muestra un mensaje de mantenimiento
// Informa a los usuarios que el servicio de compra está temporalmente inactivo
// Explica que se están realizando actualizaciones en los sistemas de pago y beneficios de afiliación
// Incluye un enlace para regresar al inicio de la aplicación

const ButtonBuy = () => {
  return (
    <section className="container my-5 maintenance-container text-center">
      <h1 className="maintenance-title">🚧 Servicio en mantenimiento 🚧</h1>
      <p className="maintenance-text">
        Actualmente estamos realizando tareas de actualización en nuestros
        acuerdos con proveedores externos, incluyendo sistemas de pago y
        beneficios de afiliación.
      </p>
      <p className="maintenance-text">
        Por este motivo, temporalmente no está disponible la compra de títulos,
        membresías ni contenidos premium dentro de la plataforma.
      </p>
      <p className="maintenance-text">
        El equipo de <span className="gamerzone-brand">GamerZone</span> se
        encuentra trabajando para restaurar el servicio lo antes posible.
        Gracias por tu comprensión y por seguir jugando con nosotros. 🎮
      </p>
      <Link className="btn-return" to={"/"}>
        Volver al inicio
      </Link>
    </section>
  );
};

export default ButtonBuy;
