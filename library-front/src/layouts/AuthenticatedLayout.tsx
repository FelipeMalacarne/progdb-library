import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar"
import { Outlet, useNavigate } from "react-router-dom";
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
    <div className="flex flex-col h-screen">
      <Navbar user={user}/>
        <div className="h-full flex-1 bg-gray-100 overflow-auto">
          <Outlet/>
        </div>
    </div>
  )
}
