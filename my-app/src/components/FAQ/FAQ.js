import { useNavigate } from "react-router-dom";
import "./FAQ.css"

function FAQ () {

    let navigate = useNavigate();

    const goToContacto = () => {
        navigate ("/Contacto");
    }


    return <div className="servicios--frame">
    <div className="servicio1--container">
        <main>
            <div className="img__servicio--container">
                <img className="servicio__img" src={require("../Images/faq/cuidados.jpg")} alt="Cuidados"></img>
            </div>             
        </main>

        <aside>
            <div className="servicio__text">
                <h3>¿CUÁLES SON LOS CUIDADOS?</h3>

                <p>Es una característica propia de los cueros naturales que se rayen y que presenten marcas. Estas variaciones no deben ser consideradas como fallas sino como prueba de ser un material vivo y natural.</p>

                <p>-Te recomendamos guardar nuestras piezas en lugares con buena ventilación. El contacto con tintas, agua, perfumes, maquillajes, alcohol, aceites y solventes provocan el deterioro del material de forma irrecuperable.</p>
                    
                <p>Evitá la exposición prolongada al sol, esto puede provocar que el cuero se decolore.</p>
                    
                <p>Si el cuero se ensucia te sugerimos limpiarlo con un paño suave seco de color blanco..</p>
                
                <p onClick= {goToContacto} class="contacto--link">Contactanos para mayor información</p>
            </div>
        </aside>
    </div>

    <div className="servicio2--container">
        <main>
            <div className="img__servicio--container">
            <img className="servicio__img" src={require("../Images/faq/compraOnline.jpg")} alt="Compra"></img>
            </div>             
        </main>

        <aside>
            <div className="servicio__text">
                <h3>¿CÓMO COMPRAR ONLINE?</h3>

                <p>Aceptamos los siguientes medios de pago: tarjeta de débito/ crédito o mercado pago.</p>

                <p>Podés retirar el producto de manera gratuita por nuestro local ubicado en Av. Triunvirato 4325, CABA.</p>
                    
                <p>Para envíos, el costo corre a cuenta del comprador por correo argentino o mensajería (esto último si estás en Capital Federal).</p>
                    
                <p>En todos los casos, se coordinará una fecha y horario de entrega entre el vendedor y el comprador.</p>
                
                <p onClick= {goToContacto} class="contacto--link">Contactanos para mayor información</p>
            </div>
        </aside>
    </div>

    <div className="servicio3--container">
        <main>
            <div className="img__servicio--container">
            <img className="servicio__img" src={require("../Images/faq/pack.jpg")} alt="Devoluciones"></img>
            </div>             
        </main>

        <aside>
            <div className="servicio__text">
                <h3>¿CUÁL ES LA POLÍTICA DE DEVOLUCIÓN?</h3>

                <p>Hacemos envíos a todo el país por medio de correo Argentino o mensajería si estás en Capital Federal.</p>

                <p>Nuestro compromiso con la sustentabilidad la trasladamos a nuestro pákaging, te pedimos que lo recicles o reutilices.</p>
                    
                <p>Si por algún motivo una de nuestras piezas no era lo que esperabas podés cambiarla por otra. Tenés 15 días a partir de que fue entregada, con sus etiquetas y el packaging correspondiente, sin uso y en perfectas condiciones.</p>
                                                             
                <p onClick= {goToContacto} class="contacto--link">Contactanos para mayor información</p>
            </div>
        </aside>
    </div>
</div>
}

export default FAQ