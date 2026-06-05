import { motion } from "framer-motion"

const projects = [
  {
    title: "Aplikasi Kasir",
    type: "Desktop App",
    desc: "Aplikasi kasir berbasis desktop untuk mengelola transaksi penjualan, stok barang, dan laporan keuangan.",
    tech: ["Java", "MySQL"],
  },
  {
    title: "Website Toko Online",
    type: "Web App",
    desc: "Website e-commerce dengan fitur produk, keranjang belanja, dan manajemen pesanan menggunakan Laravel.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
  },
  {
    title: "Aplikasi Absensi",
    type: "Android App",
    desc: "Aplikasi absensi siswa berbasis Android dengan fitur scan QR code dan rekap kehadiran.",
    tech: ["Android Studio", "Java", "SQLite"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-blue-950">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-400 text-sm tracking-widest uppercase mb-4">Portfolio</p>
          <h2
            style={{ fontFamily: "Plus Jakarta Sans" }}
            className="text-4xl md:text-5xl text-white"
          >
            Project yang pernah saya buat
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group border border-blue-800 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <span className="text-blue-200 text-xs tracking-widest uppercase">
                    {project.type}
                  </span>
                  <h3
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    className="text-2xl text-white"
                  >
                    {project.title}
                  </h3>
                  <p className="text-blue-200 text-sm leading-relaxed max-w-xl">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-blue-800 border-blue-700 text-blue-300 text-xs rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-blue-700 group-hover:text-blue-300 transition-colors text-2xl">
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}