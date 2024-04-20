import { FaEnvelope, FaInstagram, FaMobile, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <div className="border-t border-gray-800 full-bleed pt-8 pb-2 space-y-8">
      <div className="flex justify-center items-center gap-7">
        <FaEnvelope  />
        <FaMobile />
        <FaInstagram />
        <FaYoutube />
      </div>
      <p className="text-center font-bold">WillBeThere. c 2024</p>
    </div>
  );
}
