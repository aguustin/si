import './home.css';
import cabecera from '../imgs/cabecera.png';
import pie from '../imgs/pie.png';
import { SeccionA } from '../secciones/seccionA';
import { SeccionB } from '../secciones/seccionB';
import { SeccionC } from '../secciones/seccionC';
import { SeccionD } from '../secciones/seccionD';
//import { NavigationA, NavigationB, FooterA } from '../navigations/navigations';


const Home = () => {


    return(
        <div className="home mx-auto">
        <nav>
            <img src={cabecera} alt=""></img>
        </nav>
        <div className='exp-juv'>
                    <h1>Expiencia y juventud</h1>
                    <div className='d-flex'>
                        <div className='exp-card'>
                            <div>asd</div>
                        </div>
                        <div className='exp-card'>
                            <div>asd</div>
                        </div>
                        <div className='exp-card'>
                            <div>asd</div>
                        </div>
                    </div>
                </div>
            <div className='secciones container'>
            <div>
                <SeccionA/>
                <button><a href="/secciones">Mas informacion</a></button>
            </div>
            <div>
                <SeccionB/>
                <button><a href="/secciones">Mas informacion</a></button>
            </div>
            <div>
                <SeccionC/>
                <button><a href="/secciones">Mas informacion</a></button>
            </div>
            <div>
                <SeccionD/>
                <button><a href="/secciones">Mas informacion</a></button>
            </div>
            </div>
            <footer>
                <div className='CpediTuPresupuesto'>
                    <img src={pie} alt=""></img>
                    <h2>Contactate con nosotros pedi tu presupuesto</h2>
                </div>
            </footer>
        </div>
    )


}

export default Home;