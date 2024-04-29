import {useState} from "react";
import {IoPersonOutline} from "react-icons/io5";
import {TfiHelpAlt} from "react-icons/tfi";
import {Link, useNavigate} from "react-router-dom";
import {Logo} from "../utils/Logo";
import {GrClose} from "react-icons/gr";
import {FiMenu} from "react-icons/fi";
import { useAuthStore } from "../../store/useAuthStore";
import {ClipLoader} from 'react-spinners'

export function Navigation() {
 
  const user = useAuthStore((state=>state.user))
  const logout = useAuthStore((state=>state.logout))
  const navigate = useNavigate(); 
  const [showLoading, setShowLoading] = useState(false)


  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  

  return (
    <> 

{

showLoading? 

<div className='fixed inset-0 flex justify-center flex-col gap-2 items-center bg-gray-950 bg-opacity-100 z-50'>
        
          <ClipLoader
          className='loader'
          size={60}
          color=""
          />
          <p className="text-white text-2xl">Logging out</p>
      </div>

: 
null
}

    <div className={`navbar shadow-md z-10 sticky top-0 bg-white full-bleed`}>
      <nav className=" w-screen px-10 pb-2 flex justify-between items-center" id="top">
        <div className="mt-4 lg:mt-1">
          <Link to={`/`}>
            <Logo />
          </Link>
        </div>
        <ul className="flex justify-between items-center">
          <div className="lg:flex hidden gap-5">
            <li title="rsvp for an event">
              <Link to={`rsvp/7`} className="uppercase font-medi">
                RSVP
              </Link>
            </li>
            <li title="create new event">
              <Link to={ user? `create-event`:`login`} className="uppercase font-medi">
                Create Event
              </Link>
            </li>
            <li className={`${user?"hidden": null}`} >
              <button
                className="w-28 h-8 pt-1 -mt-2 text-sm bg-green-900 text-white font-medi hover:shadow-lg rounded-xl hover:bg-white hover:text-green-950 uppercase"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </li>
            <li title="profile" className="icon">
              <Link to={ user ? `profile` : `login`}>
                <IoPersonOutline size={21} />
              </Link>
            </li>
            <li title="help" className="icon">
              <Link to={`help`}>
                <TfiHelpAlt size={21} />
              </Link>
            </li>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="lg:hidden xl:hidden 2xl:hidden visible z-10 cursor-pointer"
          >
           { !open &&  <FiMenu size={50} className="mt-1 pt-3" />}
          </div>
        </ul>
      </nav>

      {open && (
        <div className="mobile-menu-overlay px-10 fixed lg:hidden z-20 top-0 right-0 bottom-0 left-0 w-screen leading-10 ">
          <GrClose
            onClick={toggleMenu}
            size={40}
            color="green"
            className="z-20 cursor-pointer ml-auto mt-5"
          />
          <ul className="py-1 mt-10 mb-8 justify-center">
            <li className="rsvp">
              <Link
                to={`rsvp/7`}
                onClick={
                  toggleMenu
                }
                className="text-lg uppercase"
              >
                RSVP
              </Link>
            </li>
            <li onClick={()=>{user ? navigate("create-event"): navigate("login")}} className="text-lg create-event">
              <Link to={`create-event`} onClick={toggleMenu}>
                Create Event
              </Link>
            </li>
          </ul>

          <div className="">
            <ul className="flex items-center gap-4 text-lg pb-64">
              <li className="self-center">
                <Link to={`help`} onClick={toggleMenu}>
                  <TfiHelpAlt size={22} />
                </Link>
              </li>
              <li onClick={()=>{user ? navigate("profile"): navigate("login")}}  className="self-center">
                <Link to={`profile`} onClick={toggleMenu}>
                  <IoPersonOutline size={22} />
                </Link>
              </li>
              <li onClick={()=>{
                if(!user){
                  navigate(`login`)
                }else{

                   logout()
                  setShowLoading(!showLoading)
                  setTimeout(() => {
                  setShowLoading(false)
                  navigate(`login`)

                  }, 3000)
                 
                }
                
              }} className={`self-center rounded-full border hover:bg-white px-3 shadow text-lg uppercase pt-2  ${user?"text-red-500":"text-blue-500"}`}>
                <Link  onClick={toggleMenu} className="font-smbld ">
                  {user ? "Logout": "Login"}
                </Link>
              </li>
            </ul>

            <Link to={`/`} onClick={toggleMenu} className="flex mb-64">
              <Logo />
            </Link>
          </div>
        </div>
      )}
    </div>

        
    </>
  );
}
