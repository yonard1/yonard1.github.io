import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-blue-950">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-400 text-sm tracking-widest uppercase mb-4">Kontak</p>
          <h2
            style={{ fontFamily: "Plus Jakarta Sans" }}
            className="text-4xl md:text-5xl text-white"
          >
            Mari berkolaborasi
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">

          <motion.a
            href="mailto:alfianleonardo2@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group flex items-center justify-between bg-blue-800 border border-blue-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300"
          >
            <div>
              <p className="text-blue-200 text-xs tracking-widest uppercase mb-2">Email</p>
              <p className="text-white font-medium">alfianleonardo2@gmail.com</p>
            </div>
            <span className="text-blue-600 group-hover:text-blue-300 transition-colors text-2xl">→</span>
          </motion.a>

          <motion.a
            href="https://github.com/yonard1"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group flex items-center justify-between bg-blue-800 border border-blue-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300"
          >
            <div>
              <p className="text-blue-200 text-xs tracking-widest uppercase mb-2">GitHub</p>
              <p className="text-white font-medium">github.com/yonard1</p>
            </div>
            <span className="text-blue-600 group-hover:text-blue-300 transition-colors text-2xl">→</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/leonardoalf/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group flex items-center justify-between bg-blue-800 border border-blue-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300"
          >
            <div>
              <p className="text-blue-200 text-xs tracking-widest uppercase mb-2">LinkedIn</p>
              <p className="text-white font-medium">linkedin.com/in/leonardoalf</p>
            </div>
            <span className="text-blue-600 group-hover:text-blue-300 transition-colors text-2xl">→</span>
          </motion.a>

        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-blue-400 text-sm mt-16"
        >
          © 2026 Leonardo. All rights reserved.
        </motion.p>

      </div>
    </section>
  )
}