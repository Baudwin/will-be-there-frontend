import {FaEnvelope} from "react-icons/fa";
import {useEffect, useState} from "react";
import {BsInstagram, BsYoutube} from "react-icons/bs";
import {FaMobileScreen} from "react-icons/fa6";
import { Logo } from "../utils/Logo";

export function Footer({date}) {
  const [fullYear, setFullYear] = useState(0);

  useEffect(() => {
    if (date) {
      const newFullYear = new Date(date).getFullYear();
      setFullYear(newFullYear);
    }
  }, [date]);

  return (
    <div className="full-bleed border-t pt-20 pb-1 ">
      <div className="  pt-10 pb-4">
        <div className="icons flex gap-7 justify-center text-green-900 text-2xl">
          <FaEnvelope size={28} />
          <FaMobileScreen size={28} />
          <BsInstagram size={28} />
          <BsYoutube size={28} />
        </div>
      
        <div className="flex justify-center items-center gap-1 mt-20">
          <div>
            <Logo/>
          </div>
          
          <div className="flex items-center mt-3">
            <span className="text-2xl text-gray-700 mt-1"> &copy; </span>
            <span className="font-medi text-lg flex self-center">{fullYear}</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}
