import { useState } from "react"
import { useLocation } from "react-router-dom"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Legal Resources", href: "/resources" },
    { name: "News", href: "/news" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-300 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center py-6 lg:py-10 justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo3.png"
              alt="Solnik & Solnik"
              className="h-28 sm:h-32 md:h-40 lg:h-46 xl:h-54 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition ${
                  location.pathname === link.href
                    ? "text-yellow-500 border-b-2 border-yellow-500"
                    : "text-blue-900 hover:text-yellow-500"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Contact Info */}
            <div className="ml-10 flex flex-col gap-1 text-sm">
              <a
                href="tel:+4167677506"
                className="flex items-center gap-2 text-blue-900 hover:text-yellow-500"
              >
                {/* Phone SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.07 22 2 13.93 2 3.5a1 1 0 0 1 1-1H6.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.01l-2.2 2.21z" />
                </svg>
                (416) 767-7506
              </a>

              <a
                href="mailto:info@solnikandsolnik.com"
                className="flex items-center gap-2 text-blue-900 hover:text-yellow-500"
              >
                {/* Mail SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                info@solnikandsolnik.com
              </a>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              /* Close (X) SVG */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger SVG */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200 px-6 py-6 space-y-4 text-center font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block transition ${
                location.pathname === link.href
                  ? "text-yellow-500"
                  : "text-blue-900 hover:text-yellow-500"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Contact */}
          <div className="pt-4 border-t space-y-3 text-sm">
            <a href="tel:+4167677506" className="flex justify-center items-center gap-2 text-blue-900">
              📞 (416) 767-7506
            </a>
            <a
              href="mailto:info@solnikandsolnik.com"
              className="flex justify-center items-center gap-2 text-blue-900"
            >
              ✉ info@solnikandsolnik.com
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
