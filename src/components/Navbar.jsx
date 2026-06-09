import React, { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#07213d] px-4 fixed top-0 left-0 w-full z-50">
      <div className="max-w-5xl mx-auto flex text-center items-center justify-center h-20">
        
        {/* Logo & Title */}
        <div className="flex items-center">
          <img
            src="/images/logo1.png"
            alt="Logo 1"
            className="max-w-11 md:max-w-14 "
          />
          <img
            src="/images/logo2.png"
            alt="Logo 2"
            className="max-w-11 md:max-w-14 "
          />
          <span className="text-mist-300  ml-2 leading-tight text-[8px] md:text-[10px] font-semibold text-left">
            KEMENTRIAN IMIGRASI DAN PEMASYARAKATAN
            <br />
            DIREKTORAT JENDERAL PEMASYARAKATAN
            <br />
            LEMBAGA PEMBINAAN KHUSUS ANAK
            <br />
            LPKA Kelas II Banda Aceh
          </span>

          <img
            src="/images/logo3.png"
            alt="Logo 3"
            className=" max-w-14 md:max-w-18 mt-1"
          />
        </div>

        <div id="google_translate_element"></div>

      </div>

      
    </nav>
  );
}
