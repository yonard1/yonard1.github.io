import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-blue-950">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-400 text-sm tracking-widest uppercase mb-4">Tentang Saya</p>
          <h2
            style={{ fontFamily: "Plus Jakarta Sans" }}
            className="text-4xl md:text-5xl text-white leading-tight mb-6"
          >
            Seorang developer muda yang suka membangun solusi digital
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 text-blue-200 text-base leading-relaxed"
        >
          <p>
            Halo! Saya lulusan SMK Jurusan Rekayasa Perangkat Lunak (RPL). 
            Selama sekolah saya belajar membangun berbagai jenis aplikasi mulai 
            dari web, desktop, hingga mobile.
          </p>
          <p>
            Saya berpengalaman menggunakan <span className="text-white font-medium">Laravel</span> untuk 
            web, <span className="text-white font-medium">Android Studio</span> untuk mobile, 
            aplikasi <span className="text-white font-medium">Desktop</span>, serta mengelola 
            database dengan <span className="text-white font-medium">MySQL</span>.
          </p>
          <p>
            Saya senang belajar hal baru dan siap berkontribusi di dunia industri teknologi.
          </p>
        </motion.div>

      </div>
    </section>
  )
}