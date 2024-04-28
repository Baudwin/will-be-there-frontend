import {useState} from "react";
import {IoPersonOutline} from "react-icons/io5";
import {TfiHelpAlt} from "react-icons/tfi";
import {Link, useNavigate} from "react-router-dom";
import {Logo} from "../utils/Logo";
import {GrClose} from "react-icons/gr";
import {FiMenu} from "react-icons/fi";
import { useAuthStore } from "../../store/useAuthStore";

export function Navigation() {
  const user = useAuthStore((state=>state.user))
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const navigate = useNavigate();

  return (
    <div className={`navbar shadow-lg z-10 sticky bg-white full-bleed`}>
      <nav className="h-20 w-screen px-10 flex justify-between" id="top">
        <div className="mt-4 lg:mt-1">
          <Link to={`/`}>
            <Logo />
          </Link>
        </div>
        <ul className="flex justify-between items-center">
          <div className="lg:flex hidden gap-5">
            <li>
              <Link to={`rsvp/7`} className="uppercase font-medi">
                RSVP
              </Link>
            </li>
            <li>
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
            <li className="icon">
              <Link to={ user ? `profile` : `login`}>
                <IoPersonOutline size={21} />
              </Link>
            </li>
            <li className="icon">
              <Link to={`help`}>
                <TfiHelpAlt size={21} />
              </Link>
            </li>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="lg:hidden xl:hidden 2xl:hidden visible z-10 cursor-pointer"
          >
            <FiMenu size={50} className="mt-1 pt-3" />
          </div>
        </ul>
      </nav>

      {open && (
        <div className="mobile-menu-overlay px-10 fixed lg:hidden  z-20 top-0 right-0 bottom-0 left-0 w-screen leading-10 ">
          <GrClose
            onClick={toggleMenu}
            size={40}
            color="green"
            className="z-20 cursor-pointer ml-auto mt-6"
          />
          <ul className="py-1 mt-10 mb-8 justify-center">
            <li className="rsvp">
              <Link
                to={`rsvp`}
                onClick={toggleMenu}
                className="text-lg uppercase"
              >
                RSVP
              </Link>
            </li>
            <li className="text-lg create-event">
              <Link to={`create-event`} onClick={toggleMenu}>
                Create Event
              </Link>
            </li>
          </ul>

          <div>
            <ul className="flex gap-2 text-lg pb-64">
              <li className="self-center">
                <Link to={`help`} onClick={toggleMenu}>
                  <TfiHelpAlt size={22} />
                </Link>
              </li>
              <li className="self-center">
                <Link to={`profile`} onClick={toggleMenu}>
                  <IoPersonOutline size={22} />
                </Link>
              </li>
              <li className="self-center text-lg uppercase pt-2">
                <Link to={`login`} onClick={toggleMenu} className="font-smbld">
                  Login
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
  );
}
