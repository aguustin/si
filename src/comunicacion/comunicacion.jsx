//import icono1 from '../imgs/icono 1.png';
import marcaCabecera from '../imgs/marca cabecera.png';
import cabeceraComunicacion from '../imgs/icono cabecera comunicacion empresaria.png';
import marcaMarketing from '../imgs/icono cabecera mkt.png';
import marcaProgramacion from '../imgs/icono cabecera programacion.png';
import marcaPymes from '../imgs/pymes icono cabecera.png';
import instagram from '../imgs/instagram.png';
import face from '../imgs/face.png';
import pie from '../imgs/pie.png';
import './comunicacion.css';
import { SeccionA } from '../secciones/seccionA';
import { SeccionB } from '../secciones/seccionB';
import { SeccionC } from '../secciones/seccionC';
import { SeccionD } from '../secciones/seccionD';
import { useState } from 'react';

export const Comunicacion = () => {

    const [seccionComunicacion, setSeccionComunicacion] = useState(true);
    const [seccionMarketing, setSeccionMarketing] = useState(false);
    const [seccionPymes, setSeccionPymes] = useState(false);
    const [seccionProgramacion, setSeccionProgramacion] = useState(false);

    const comunicacionn = () => {
        setSeccionComunicacion(true);
        setSeccionMarketing(false);
        setSeccionPymes(false);
        setSeccionProgramacion(false);
    }
    const marketing = () => {
        setSeccionMarketing(true);
        setSeccionComunicacion(false);
        setSeccionPymes(false);
        setSeccionProgramacion(false);
    }
    const pymes = () => {
        setSeccionPymes(true);
        setSeccionMarketing(false);
        setSeccionComunicacion(false);
        setSeccionProgramacion(false);
    }
    const programacion = () => {
        setSeccionProgramacion(true);
        setSeccionMarketing(false);
        setSeccionPymes(false);
        setSeccionComunicacion(false);
    }



    const SeccionComunicacion = () => {
        return(
            <div>
                <SeccionA/>
            </div>
        )
    }

    const SeccionMarketing = () => {
        return(
            <div>
                <SeccionB/>
            </div>
        )
    }

    const SeccionPymes = () => {
        return(
            <div>
                <SeccionC/>
            </div>
        )
    }

    const SeccionProgramacion = () => {
        return(
            <div>
                <SeccionD/>
            </div>
        )
    }

    return(
        <div className='comunicacion'>
            <nav className='d-flex'>
            <div className='marcaCabecera'>
                <img src={marcaCabecera} alt=""></img>
            </div>
            <div className='marcasRubros'>
                <button onClick={() => comunicacionn()}><img src={cabeceraComunicacion} alt=""></img></button>
                <button onClick={() => marketing()}><img src={marcaMarketing} alt=""></img></button>
                <button onClick={() => pymes()}><img src={marcaProgramacion} alt=""></img></button>
                <button onClick={() => programacion()}><img src={marcaPymes} alt=""></img></button>
            </div>
            <div className='marcasRedesSociales'>
                <button><img src={instagram} alt=""></img></button>
                <button><img src={face} alt=""></img></button>
            </div>
               
            </nav>
            {seccionComunicacion ? <SeccionComunicacion/> : null}
            {seccionMarketing ? <SeccionMarketing/> : null}
            {seccionPymes ? <SeccionPymes/> : null}
            {seccionProgramacion ? <SeccionProgramacion/> : null}
            <footer>
            <div className='pediTuPresupuesto'>
                <img src={pie} alt=""></img>
                <h2>Pedi tu presupuesto</h2>
            </div>
              
            </footer>
        </div>
    )

    
}
