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
            className="max-w-13 "
          />
          <img
            src="/images/logo2.png"
            alt="Logo 2"
            className="max-w-12 "
          />
          <span className="text-white  ml-2 leading-tight text-[10px] md:text-base font-semibold">
            Kantor Wilayah Direktorat Jenderal Imigrasi Aceh
            <br />
            Kantor Imigrasi Kelas III Non TPI Takengon 
          </span>
        </div>

        <div id="google_translate_element"></div>

      </div>

      
    </nav>
  );
}
