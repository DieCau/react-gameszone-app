import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/shared/Footer";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/shared/Header";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/Login";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";
import Home from "./components/pages/Home";
import FormJuegos from "./components/pages/juegos/FormJuegos";
import Administrador from "./components/pages/Administrador";
import Shooter from "./components/pages/categorias/Shooter";
import Simulacion from "./components/pages/categorias/Simulacion";
import Aventura from "./components/pages/categorias/Aventura";
import Sandbox from "./components/pages/categorias/Sandbox";
import Rpg from "./components/pages/categorias/Rpg";
import { useEffect, useState } from "react";
import DetalleProducto from "./components/pages/DetailProduct";
import PreguntasFrecuentes from "./components/pages/Answers";
import SobreNosotros from "./components/pages/About";
import { v4 as uuidv4 } from "uuid";
import BotonComprar from "./components/pages/ButtonBuy";
import Register from "./components/pages/Register";

function App() {
  const usuarioLogueado = JSON.parse(localStorage.getItem("userKeyJuego")) || false;
  const juegosLocalstorage = JSON.parse(localStorage.getItem("listaJuegos")) || [];
  const cuentasLocalStorage = JSON.parse(localStorage.getItem("cuentasUsuarios")) || [];
  const [juegos, setJuegos] = useState(juegosLocalstorage);
  const [usuarioAdmin, setUsuarioAdmin] = useState(usuarioLogueado);
  const [busqueda, setBusqueda] = useState("");
  const [cuentas, setCuentas] = useState(cuentasLocalStorage);
  const [nombreUsuario, setNombreUsuario] = useState(localStorage.getItem("userNombre") || "");

  useEffect(() => {
    localStorage.setItem("listaJuegos", JSON.stringify(juegos));
    localStorage.setItem("cuentasUsuarios", JSON.stringify(cuentas));
  }, [juegos, cuentas]);

  const crearJuego = (juegoNuevo) => {
    juegoNuevo.id = uuidv4();
    setJuegos([...juegos, juegoNuevo]);
    return true;
  };

  const borrarJuego = (idJuego) => {
    const juegosFiltrados = juegos.filter((itemJuego) => itemJuego.id !== idJuego);
    setJuegos(juegosFiltrados);
    return true;
  };

  const buscarJuego = (idJuego) => {
    const juegoBuscado = juegos.find((itemJuego) => itemJuego.id === idJuego);
    return juegoBuscado;
  };

  const editarJuego = (idJuego, juegoActualizado) => {
    const juegoEditados = juegos.map((itemJuego) => {
      if (itemJuego.id === idJuego) {
        return {
          ...itemJuego,
          ...juegoActualizado,
        };
      } else {
        return itemJuego;
      }
    });
    setJuegos(juegoEditados);
    return true;
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const juegosFiltados = juegos.filter((juegoBuscado) =>
    juegoBuscado.nombreJuego.toLowerCase().includes(busqueda.toLowerCase())
  );

  const registrarCuenta = (nuevaCuenta) => {
    const existe = cuentas.some((cuenta) => cuenta.email === nuevaCuenta.email);
    if (existe) {
      return false; // Ya existe ese email
    }
    setCuentas([...cuentas, nuevaCuenta]);
    return true;
  };

  return (
    <>
      <BrowserRouter>
        <Header
          usuarioAdmin={usuarioAdmin}
          setUsuarioAdmin={setUsuarioAdmin}
          setNombreUsuario={setNombreUsuario}
          nombreUsuario={nombreUsuario}
        ></Header>
        <main>
          <Routes>
            <Route path="/" element={<Home juegos={juegos}></Home>}></Route>
            <Route path="/detalle/:id" element={<DetalleProducto buscarJuego={buscarJuego}></DetalleProducto>}></Route>
            <Route
              path="/login"
              element={
                <Login setUsuarioAdmin={setUsuarioAdmin} setNombreUsuario={setNombreUsuario} cuentas={cuentas}></Login>
              }
            ></Route>
            <Route path="/registro" element={<Register registrarCuenta={registrarCuenta}></Register>}></Route>
            <Route path="/shooter" element={<Shooter juegos={juegos}></Shooter>}></Route>
            <Route path="/simulacion" element={<Simulacion juegos={juegos}></Simulacion>}></Route>
            <Route path="/aventura" element={<Aventura juegos={juegos}></Aventura>}></Route>
            <Route path="/sandbox" element={<Sandbox juegos={juegos}></Sandbox>}></Route>
            <Route path="/rpg" element={<Rpg juegos={juegos}></Rpg>}></Route>
            <Route path="/sobreNosotros" element={<SobreNosotros></SobreNosotros>}></Route>
            <Route path="/preguntasFrecuentes" element={<PreguntasFrecuentes></PreguntasFrecuentes>}></Route>
            <Route path="/comprar" element={<BotonComprar></BotonComprar>}></Route>

            <Route path="/administrador" element={<ProtectorAdmin isAdmin={usuarioAdmin}></ProtectorAdmin>}>
              <Route
                index
                element={
                  <Administrador
                    setJuegos={setJuegos}
                    borrarJuego={borrarJuego}
                    busqueda={busqueda}
                    handleChange={handleChange}
                    juegosFiltados={juegosFiltados}
                  ></Administrador>
                }
              ></Route>
              <Route
                path="crear"
                element={<FormJuegos titulo={"Crear juegos"} crearJuego={crearJuego}></FormJuegos>}
              ></Route>
              <Route
                path="editar/:id"
                element={
                  <FormJuegos
                    titulo={"Editar juego"}
                    buscarJuego={buscarJuego}
                    editarJuego={editarJuego}
                  ></FormJuegos>
                }
              ></Route>
            </Route>

            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;