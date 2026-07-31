import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import foto from "../assets/Leon.png"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-blue-950 px-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-700 flex-shrink-0"
        >
          <img src={foto} alt="Foto Profil" className="w-full h-full object-cover" />
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-400 text-sm tracking-widest uppercase"
          >
            Halo, perkenalkan saya
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl text-white font-semibold leading-tight"
          >
            Leonardo Alfian Bait
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-blue-300 text-xl font-light"
          >
            <TypeAnimation
              sequence={[
                "Fullstack Developer", 2000,
                "Android Developer", 2000,
                "Desktop Developer", 2000,
                "Database Engineer", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-blue-200 text-base max-w-xl"
          >
            Lulusan SMK Jurusan RPL · Siap berkontribusi di dunia industri teknologi
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4 mt-2"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-500 transition-colors"
            >
              Lihat Project
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-blue-700 text-blue-200 text-sm rounded-full hover:border-blue-400 transition-colors"
            >
              Hubungi Saya
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  )
}