import icono4 from '../imgs/icono 4.png';

export const SeccionD = () => {
    return(
        <div className='seccion d-flex'>
            <div className='seccionImg'>
                <img src={icono4} alt=""></img>
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