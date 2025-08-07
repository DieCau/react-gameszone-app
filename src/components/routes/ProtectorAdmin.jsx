import { Navigate, Outlet } from "react-router";

// Componente ProtectorAdmin que verifica si el usuario es administrador
// Si no es administrador, redirige a la página principal
// Recibe la propiedad isAdmin que indica si el usuario es administrador
const ProtectorAdmin = ({ isAdmin }) => {
  if (!isAdmin) {
    return <Navigate to={"/"}></Navigate>;
  }

  return (
    <Outlet />
  );
};

export default ProtectorAdmin;
