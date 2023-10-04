import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar"
import { useNavigate } from "react-router-dom";
import { User } from "../Types";

export const AuthenticatedLayout = () => {
  const nav = useNavigate();

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
    if (!user) {
      nav('/entrar')
    } 
  }, [])

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center">
      <Navbar user={user}/>
      sas
    </div>
  )
}
