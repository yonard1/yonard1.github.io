import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress((window.scrollY / totalHeight) * 100)

      const sections = ["about", "skills", "projects", "contact"]
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const { top } = el.getBoundingClientRect()
          if (top <= 120) setActiveSection(id)
        }
      }

      if (window.scrollY < 100) setActiveSection("")
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-blue-950/90 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}>
      <div
        className="h-0.5 bg-blue-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl text-white font-semibold">Porto.</span>
        <div className="flex gap-8 text-sm">
          {["About", "Skills", "Projects", "Contact"].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition-colors ${
                activeSection === item.toLowerCase()
                  ? "text-blue-400 font-medium"
                  : "text-blue-300 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}