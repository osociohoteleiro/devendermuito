import { useState, useEffect } from 'react'
import { Menu, X, Rocket } from 'lucide-react'

const navLinks = [
  { href: '#o-que-e', label: 'O que é' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#comissoes', label: 'Comissões' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#faq', label: 'FAQ' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-bold"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-primary-600' : 'bg-white/20'}`}>
              <Rocket className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <span className={isScrolled ? 'text-primary-700' : 'text-white'}>
              Plataforma de <span className="text-accent-500">Vender Muito</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className={`text-sm font-medium transition-colors hover:text-accent-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#contato')
              }}
              className="btn-primary text-sm"
            >
              Seja um Parceiro
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 bg-white rounded-b-xl shadow-lg">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <a
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('#contato')
                  }}
                  className="btn-primary block text-center"
                >
                  Seja um Parceiro
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
