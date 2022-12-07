//css
import '../css/Profile.css'

//hoook
import { useProfile } from '../hooks/useProfile'

//componentes
import { NavBar } from "../../components/NavBar"
import { Loading } from '../../components/Loading';
import { Warning } from '../../components/Warning';
import { UpdateUser } from './UpdateUser';

export const Profile = () => {
  const { update, user, warning, warningView, DeleteAccount, UpdateUserView } = useProfile();

  return (
    <>
      <NavBar />
      {
        user?.isLoading && <Loading />
      }
      {
        warning && <Warning warningView={warningView} DeleteAccount={DeleteAccount} />
      }
      {
        update && <UpdateUser UpdateUserView={UpdateUserView} />
      }
      <div className='profile'>
        <div className='profile__contentimg'>
          <div className='profile__img'>
            <img src='https://i.dietdoctor.com/es/wp-content/uploads/2021/02/andreas-ipad-frontp-img-1.png?auto=compress%2Cformat&w=400&h=452&fit=crop' alt="imagen de doctor" />
          </div>
        </div>

        <div className='profile__contentinf'>
          <h1 className='profile__tittle'>Profile</h1>
          <div className='profile__data'>
            <h3>{`DR.${user?.data[0]?.username}`}</h3>
            <p>Hospital General Regional "María Ignacia Gandulfo”</p>
          </div>
          <h2 className='profile__subtittle'>Datos</h2>
          <div className='profile__data'>
            <h2>Nombre</h2>
            <p>{`${user?.data[0]?.username} ${user?.data[0]?.lastname}`}</p>
          </div>
          <div className='profile__data'>
            <h2 className=''>Email</h2>
            <p>{user?.data[0]?.email}</p>
          </div>
          <div className='profile__data'>
            <h2 className=''>Telefono</h2>
            <p>{user?.data[0]?.phone}</p>
          </div>
          <div className='profile__data'>
            <h2 className=''>Rol</h2>
            <p>{user?.data[0]?.rol}</p>
          </div>
          <div className='profile__deleteandUpdate'>
            <button className='profile__btn profile__update'
              onClick={UpdateUserView}>Actualizar cuenta</button>
            <button className='profile__btn profile__delete' onClick={warningView}>Eliminar Cuenta</button>
          </div>
        </div>
      </div>
    </>
  )
}
