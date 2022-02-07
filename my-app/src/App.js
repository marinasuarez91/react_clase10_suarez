import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Tienda from "./pages/Tienda";
import Contacto from "./pages/Contacto";
import TiendaDetails from "./pages/TiendaDetails";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import CartPay from "./components/CartWidget/CartPay";
import { CartProvider } from "./components/CartContext/CartContext";
import FAQPage from "./pages/FAQ";

function App() {

  return (
    <>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="/Tienda">
                  <Route index element ={<Tienda />} />
                  <Route path=":id" element={<TiendaDetails />} />
                </Route>  
                <Route path="/FAQ" element={<FAQPage />} />
                <Route path="/Contacto" element={<Contacto />} />
                <Route path="/Carrito" element={<Cart />} />
                <Route path="/Finalizar" element={<CartPay />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>           
          </BrowserRouter>
        </CartProvider>

      {/* <NavBar />
      <ItemListContainer /> */}
    </>
  );
}

export default App;
