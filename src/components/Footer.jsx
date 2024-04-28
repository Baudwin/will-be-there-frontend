import {FaEnvelope} from "react-icons/fa";
import {useEffect, useState} from "react";
// import {LogoSmall} from "../utils/LogoSmall";
import {BsInstagram, BsYoutube} from "react-icons/bs";
import {FaMobileScreen} from "react-icons/fa6";

export function Footer({date}) {
  const [fullYear, setFullYear] = useState(0);

  useEffect(() => {
    if (date) {
      const newFullYear = new Date(date).getFullYear();
      setFullYear(newFullYear);
    }
  }, [date]);

  return (
    <div className="full-bleed h-12 pt-20 pb-1 ">
      <div className="wrapper h-3/4 pt-10 pb-4">
        <div className="icons flex gap-7 justify-center text-green-900 text-2xl">
          <FaEnvelope size={28} />
          <FaMobileScreen size={28} />
          <BsInstagram size={28} />
          <BsYoutube size={28} />
        </div>
      
        <div className="flex place-content-center gap-1 mt-20">
          {/* <LogoSmall /> */}
          <span className="text-2xl text-gray-700 mt-1"> &copy; </span>
          <span className="font-medi text-lg flex self-center">{fullYear}</span>
        </div>
      </div>
    </div>
  );
}
