import { FaCopyright, FaEnvelope, FaInstagram, FaMobileAlt, FaRegCopyright, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <div className="border-t full-bleed pt-8 pb-2 space-y-8">
      <div className="flex justify-center items-center gap-7">
        <FaEnvelope className="text-green-900" size={30}/>
        <FaMobileAlt className="text-green-900" size={30}/>
        <FaInstagram className="text-green-900" size={30}/>
        <FaYoutube className="text-green-900" size={30}/>
       
      </div>
      <p className="text-center font-bold"> <span className="text-lg ">WillBeThere <span className="text-4xl text-red-500">.</span></span> <FaRegCopyright className="inline"/> 2024</p>
    </div>
  );
}
