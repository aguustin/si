import './contacto.css';
import pie from '../imgs/pie.png';
import cabecera from '../imgs/cabecera.png';

const Contacto = () => {
    return(
        <div className='contacto mx-auto'>
        <nav>
            <img src={cabecera} alt=""></img>
        </nav>
        <div className='form'>
        <div className='form-header'>
            <h3>Contactate con nosotros</h3>
        </div>
            <form method="POST">
            <div className='form-container'>
                <div className='form-group'>
                    <input className='form-input' type="text" name="nombre" placeholder=' '></input>
                    <label className='form-label'>Nombre</label>
                </div>
                <div className='form-group'>
                    <input className='form-input' type="text" name="email" placeholder=' '></input>
                    <label className='form-label'>Email</label>
                </div>
                <div className='form-group'>
                    <input className='form-input' type="text" name="telefono" placeholder=' '></input>
                    <label className='form-label'>Telefono</label>
                </div>
                <div className='form-group'>
                    <textarea type="text" name="" placeholder=' ' col='30' rows='6'></textarea>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <button type="submit">Enviar</button>
                </div>
            </div>
            </form>
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

export default Contacto;