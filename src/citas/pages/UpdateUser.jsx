// iconos
import { FiX } from 'react-icons/fi';

//hook
import { useUpdateUser } from '../hooks/useUpdateUser';

//css
import '../css/UpdateUser.css';
import { Loading } from '../../components/Loading';


export const UpdateUser = ({ UpdateUserView }) => {
    const { onInputChange, UpdateDataUser, formState, isLoading } = useUpdateUser();

    return (
        <div className="UpdateUser">
            {
                isLoading && <Loading />
            }
            <div className='UpdateUser__exit' onClick={UpdateUserView}>
                <FiX />
            </div>
            <div className='UpdateUser__content'>
                <h2 className='UpdateUser__tittle'>Actualizar datos</h2>
                <form className='UpdateUser__form'>
                    <div className='UpdateUser__Inf'>
                        <label htmlFor="Nombre">Nombre:</label>
                        <input type="text" name='username' placeholder='Nombre' onChange={onInputChange} value={formState?.username} />
                    </div>
                    <div className='UpdateUser__Inf'>
                        <label htmlFor="Apellido">Apellido:</label>
                        <input type="text" name='lastname' placeholder='Nombre' value={formState?.lastname} onChange={onInputChange} />
                    </div>
                    <div className='UpdateUser__Inf'>
                        <label htmlFor="Telefono">Numero de telefono:</label>
                        <input type="number" name='phone' maxLength={10} value={formState?.phone} onChange={onInputChange} />
                    </div>
                    <div className='UpdateUser__btns'>
                        <button className='UpdateUser__btn' type='submit' onClick={UpdateDataUser}>Actualizar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
