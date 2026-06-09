import React from "react";
import { MapPin, Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#07213d] text-white">
      <div className="container max-w-6xl mx-auto px-4 py-10">

        {/* GRID UTAMA */}
        <div className="grid gap-10 lg:grid-cols-2 items-start">

          {/* INFORMASI KANTOR */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 leading-snug">
              LPKA Kelas II Banda Aceh
            </h3>

            <div className="flex items-start gap-3 text-blue-100">
              <MapPin size={18} className="mt-1 shrink-0" />

              <p className="text-sm leading-relaxed">
                Jl. Lembaga Desa Bineh Blang Kec. Ingin Jaya Kab. Aceh Besar, Lambaro, Aceh, Indonesia
              </p>
            </div>
          </div>

        

          {/* GOOGLE MAPS */}
          <div className="w-full h-[260px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              title="Lokasi Kantor Imigrasi Takengon"
              src="https://www.google.com/maps?q=Kantor+Imigrasi+Takengon&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-blue-700 mt-10 pt-5 text-center text-sm text-blue-200">
          Copyright © 2026 TIM HumasLPKA Kelas II Banda Aceh
        </div>

      </div>
    </footer>
  );
}