import icono2 from '../imgs/icono 2.png';

export const SeccionB = () => {
    return(
        <div className='seccion d-flex'>
            <div className='seccionImg'>
                <img src={icono2} alt=""></img>
            </div>
            <div className='seccionInfo'>
                <p>
                    - Asesoramiento en imagen personal a directores y
                    funcionarios de la empresa.
                </p>
                <p>
                - Asesoramiento en oratoria, expresión corporal, relaciones 
                    con los públicos, comunicación a voceros, directores y
                    funcionarios de la organización.
                </p>
                <p>
                - Organización de videoconferencias.
                </p>
                <p>
                - Producción de programas de radio y televisión.
                </p>
                <p>
                - Cursos in company
                </p>
            </div>
        </div>
    )
}