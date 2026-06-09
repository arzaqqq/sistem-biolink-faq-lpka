import React, { useState, useMemo } from 'react';
import { FiSearch, FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    id: 1,
    category: 'Informasi Umum',
    question: 'Apa itu LPKA Kelas II Banda Aceh?',
    answer:
      'LPKA Kelas II Banda Aceh adalah lembaga yang menyelenggarakan pembinaan bagi anak yang berhadapan dengan hukum sesuai dengan ketentuan peraturan perundang-undangan.',
  },
  {
    id: 2,
    category: 'Informasi Umum',
    question: 'Siapa yang dapat ditempatkan di LPKA?',
    answer:
      'Anak yang telah memperoleh putusan pengadilan dan ditetapkan untuk menjalani masa pembinaan di LPKA.',
  },
  {
    id: 3,
    category: 'Informasi Umum',
    question: 'Apa tujuan pembinaan di LPKA?',
    answer:
      'Membentuk anak menjadi pribadi yang lebih baik, bertanggung jawab, mandiri, serta siap kembali ke lingkungan keluarga dan masyarakat.',
  },
  {
    id: 4,
    category: 'Informasi Umum',
    question: 'Hak apa saja yang dimiliki Anak Binaan?',
    answer:
      'Anak Binaan berhak memperoleh pendidikan, pelayanan kesehatan, pembinaan keagamaan, kunjungan keluarga, serta hak-hak lainnya sesuai ketentuan yang berlaku.',
  },
  {
    id: 5,
    category: 'Informasi Umum',
    question: 'Apakah layanan di LPKA dipungut biaya?',
    answer:
      'Tidak. Seluruh layanan yang diberikan oleh LPKA Kelas II Banda Aceh tidak dipungut biaya.',
  },

  {
    id: 6,
    category: 'Kunjungan & Komunikasi',
    question: 'Kapan jadwal kunjungan dilaksanakan?',
    answer:
      'Jadwal kunjungan mengikuti ketentuan yang berlaku dan dapat berubah sewaktu-waktu sesuai kebijakan.',
  },
  {
    id: 7,
    category: 'Kunjungan & Komunikasi',
    question: 'Apa syarat untuk berkunjung?',
    answer:
      'Pengunjung wajib membawa identitas diri yang sah dan mematuhi tata tertib kunjungan.',
  },
  {
    id: 8,
    category: 'Kunjungan & Komunikasi',
    question: 'Siapa saja yang dapat mengunjungi Anak Binaan?',
    answer:
      'Keluarga, wali, penasihat hukum, dan pihak lain yang memperoleh izin sesuai ketentuan.',
  },
  {
    id: 9,
    category: 'Kunjungan & Komunikasi',
    question: 'Apakah Anak Binaan dapat berkomunikasi dengan keluarganya?',
    answer:
      'Ya. Komunikasi dapat dilakukan sesuai mekanisme dan jadwal yang telah ditetapkan.',
  },
  {
    id: 10,
    category: 'Kunjungan & Komunikasi',
    question: 'Apakah pengunjung boleh membawa anak saat berkunjung?',
    answer:
      'Diperbolehkan dengan pendampingan orang tua atau wali serta tetap mematuhi aturan kunjungan.',
  },

  {
    id: 11,
    category: 'Pembinaan & Pelayanan',
    question: 'Apakah Anak Binaan tetap mendapatkan pendidikan?',
    answer:
      'Ya. LPKA menyediakan program pendidikan formal maupun nonformal sesuai kebutuhan anak.',
  },
  {
    id: 12,
    category: 'Pembinaan & Pelayanan',
    question: 'Program pembinaan apa saja yang tersedia?',
    answer:
      'Meliputi pembinaan kepribadian, keagamaan, pendidikan, keterampilan, olahraga, seni, dan kegiatan pengembangan diri lainnya.',
  },
  {
    id: 13,
    category: 'Pembinaan & Pelayanan',
    question: 'Apakah tersedia pelatihan keterampilan?',
    answer:
      'Ya. Anak Binaan dapat mengikuti berbagai program pelatihan keterampilan dan kemandirian.',
  },
  {
    id: 14,
    category: 'Pembinaan & Pelayanan',
    question: 'Apakah Anak Binaan mendapatkan pelayanan kesehatan?',
    answer:
      'Ya. LPKA menyediakan layanan kesehatan dasar dan rujukan apabila diperlukan.',
  },
  {
    id: 15,
    category: 'Pembinaan & Pelayanan',
    question: 'Apakah tersedia pembinaan keagamaan?',
    answer:
      'Ya. Pembinaan keagamaan diberikan sesuai agama dan kepercayaan masing-masing Anak Binaan.',
  },

  {
    id: 16,
    category: 'Layanan & Pengaduan',
    question: 'Apakah keluarga dapat mengirimkan makanan atau barang?',
    answer:
      'Ya, selama memenuhi ketentuan yang berlaku dan lolos pemeriksaan petugas.',
  },
  {
    id: 17,
    category: 'Layanan & Pengaduan',
    question: 'Apakah semua barang titipan dapat diterima?',
    answer:
      'Tidak. Barang akan diperiksa terlebih dahulu untuk memastikan keamanan dan ketertiban.',
  },
  {
    id: 18,
    category: 'Layanan & Pengaduan',
    question: 'Bagaimana cara menyampaikan pengaduan atau keluhan?',
    answer:
      'Pengaduan dapat disampaikan melalui petugas layanan, media sosial resmi, kotak pengaduan, atau kanal layanan pengaduan yang tersedia.',
  },
  {
    id: 19,
    category: 'Layanan & Pengaduan',
    question: 'Apakah identitas pelapor akan dirahasiakan?',
    answer:
      'Ya. Identitas pelapor akan dijaga sesuai ketentuan yang berlaku.',
  },
  {
    id: 20,
    category: 'Layanan & Pengaduan',
    question: 'Bagaimana cara mendapatkan informasi lebih lanjut tentang layanan LPKA?',
    answer:
      'Masyarakat dapat menghubungi petugas layanan informasi atau mengikuti media sosial resmi LPKA Kelas II Banda Aceh untuk memperoleh informasi terbaru.',
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div
      className={`mb-4 rounded-2xl border transition-all duration-300  ${
        isOpen
          ? 'bg-[#0b5481] border-[#0b5481] shadow-lg scale-[1.01]'
          : 'bg-white hover:shadow-md border-b-[3px] border-[#084469]'
      }`}
    >
      {/* QUESTION */}
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center gap-4 p-5 text-left hover:cursor-pointer"
      >
        <span
          className={`font-semibold text-[16px] md:text-base ${
            isOpen ? 'text-white' : 'text-gray-800'
          }`}
        >
          {faq.question}
        </span>

        {isOpen ? (
          <FiMinus className="text-white text-xl shrink-0" />
        ) : (
          <FiPlus className="text-gray-400 text-xl shrink-0" />
        )}
      </button>

      {/* ANSWER */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 border-t border-blue-400 bg-[#0b5481]">
              <p className="text-white text-sm md:text-base leading-relaxed whitespace-pre-line">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openId, setOpenId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Semua');

  // CATEGORY LIST
  const categories = [
    'Semua',
    ...new Set(faqData.map(item => item.category)),
  ];

  // FILTER FAQ
  const filteredFaq = useMemo(() => {
    return faqData.filter(item => {
      const matchSearch =
        item.question
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.answer
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchCategory =
        activeCategory === 'Semua' ||
        item.category === activeCategory;

      return matchSearch && matchCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            FAQ
          </h2>

          <p className="text-lg md:text-2xl text-gray-500">
            Pertanyaan dan Jawaban Layanan Keimigrasian
          </p>
        </div>

        {/* INFO BOX */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-white shadow-lg border-b-[5px] border-blue-700 rounded-2xl p-6 text-center">
            <h3 className="text-lg font-bold text-[#0b5481] mb-2">
              Butuh Bantuan?
            </h3>

            <p className="text-gray-600 text-sm">
              Temukan jawaban cepat seputar layanan paspor,
              visa, dan keimigrasian.
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="relative mb-6">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Cari pertanyaan..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setOpenId(null);
            }}
            className="w-full pl-12 pr-4 py-4 border-2 border-blue-700 rounded-2xl shadow-sm focus:ring-2 focus:ring-[#0b5481] outline-none bg-white"
          />
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide pb-2">
          {categories.map(category => (
           <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenId(null);
              }}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#0b5481] text-white shadow-md'
                  : 'bg-white border border-gray-300 text-gray-600 hover:border-[#0b5481]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ LIST */}
        {filteredFaq.length > 0 ? (
          filteredFaq.map(faq => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() =>
                setOpenId(openId === faq.id ? null : faq.id)
              }
            />
          ))
        ) : (
          <div className="text-center py-10 text-gray-400">
            Tidak ditemukan hasil
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;