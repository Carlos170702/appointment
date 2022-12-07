//css 
import { FiX } from 'react-icons/fi';
import './css/Warning.css';

export const Warning = ({ warningView, DeleteAccount }) => {
    return (
        <div className="warning">
            <div className='warning__Exit' onClick={warningView}>
                <FiX />
            </div>
            <div className='warning__content animate__animated animate__bounce'>
                <h2>Eliminar cuenta</h2>
                <p>Estas seguro que quieres eliminar tu cuenta?</p>
                <div className='warning__btns'>
                    <button
                        type='submit'
                        className='warning__btn warning__btn--update'
                        onClick={warningView}
                    >Cancelar</button>

                    <button
                        type='submit'
                        className='warning__btn warning__btn--delete'
                        onClick={DeleteAccount}
                    >Eliminar cuenta</button>
                </div>

            </div>
        </div>
    )
}
