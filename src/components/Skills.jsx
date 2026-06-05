import { motion } from "framer-motion"

const skills = [
  { category: "Web", items: ["Laravel", "PHP", "HTML", "CSS", "JavaScript"] },
  { category: "Mobile", items: ["Android Studio", "Java", "XML"] },
  { category: "Desktop", items: ["C#", "Visual Basic"] },
  { category: "Database", items: ["MySQL", "MariaDB"] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-blue-950">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-400 text-sm tracking-widest uppercase mb-4">Keahlian</p>
          <h2
            style={{ fontFamily: "Plus Jakarta Sans" }}
            className="text-4xl md:text-5xl text-white"
          >
            Yang saya kuasai
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-900 border-blue-800 rounded-2xl p-8"
            >
              <p className="text-blue-200 text-xs tracking-widest uppercase mb-4">
                {skill.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.items.map(item => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-blue-800 border-blue-700 text-blue-200 text-sm rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}