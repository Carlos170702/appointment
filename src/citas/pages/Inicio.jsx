//css
import '../css/Inicio.css'
//components
import { NavBar } from "../../components/NavBar"
import { Link } from 'react-router-dom'
export const Inicio = () => {
    return (
        <>
            <div className='inicio'>
                <NavBar className="" />
                <div className="inicioContent">
                    <div className='inicioData'>
                        <h1 className='inicioTittle'>Realiza tu cita online.</h1>
                    </div>
                    <div className="inicioNav">
                        <Link to={'/client'} className='inicioRecervar'>Recervar cita</Link>
                    </div>
                </div>
            </div>
            <div className="inicioInfo">
                <div className='inicioInfoData'>
                    <img src="https://citadoctor.com.mx/wp-content/uploads/2022/03/especialistas-verific-300x260.png" alt="verificado" />
                    <p>Especialista verificado con cédula de especialidad vigente</p>
                </div>
                <div className='inicioInfoData'>
                    <div className='imgResolveContent'>
                        <img className='imgResolve' src="https://citadoctor.com.mx/wp-content/uploads/2022/03/comentarios-verificados-300x260.png" alt="recomendaciones" />
                    </div>
                    <p className='infResolve'>Sistema avanzado de opiniones 100% de pacientes reales</p>
                </div>
                <div className='inicioInfoData'>
                    <img src="https://citadoctor.com.mx/wp-content/uploads/2022/03/especialistas-verificados-300x260.png" alt="agenda" />
                    <p>Agenda tu cita de manera online en solo 3 pasos</p>
                </div>
            </div>
        </>
    )
}
