//css
import '../css/Profile.css'

//hoook
import { useProfile } from '../hooks/useProfile'

//componentes
import { NavBar } from "../../components/NavBar"
import { useEffect } from 'react'

export const Profile = () => {
  const { getUserByEmail} = useProfile()

  useEffect(() => {
    getUserByEmail()
  }, [])
  
  return (
    <>
      <NavBar />
    </>
  )
}
