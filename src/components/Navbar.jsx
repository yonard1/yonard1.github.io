import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-blue-950/90 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700 }} className="text-xl text-blue-900">Porto.</span>
        <div className="flex gap-8 text-sm text-blue-400">
          {["About", "Skills", "Projects", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-900 transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}