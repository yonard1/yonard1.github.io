import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-blue-950 px-6">
      <div className="max-w-5xl w-full flex flex-col gap-6">

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
          style={{ fontFamily: "Plus Jakarta Sans" }}
          className="text-6xl md:text-8xl text-white leading-tight"
        >
          Leonardo Alfian Bait
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-blue-200 text-lg max-w-xl"
        >
          Lulusan SMK Jurusan RPL · Laravel · Android · Desktop · Database
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
    </section>
  )
}