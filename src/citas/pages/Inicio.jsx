//css
import '../css/Inicio.css'
//components
import { NavBar } from "../../components/NavBar"
export const Inicio = () => {
    return (
        <div>
            <NavBar />
            <div className='inicio'>
                <div className="inicioLogo">
                    <img src="https://firebasestorage.googleapis.com/v0/b/asdasd-f0797.appspot.com/o/_0046%201.png?alt=media&token=d7904ddc-db3a-4cd1-8c2a-f9373fbfe069" alt="logo de doctor" />
                </div>
            </div>
        </div>
    )
}
