import { Rocket, Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <div className="p-2 bg-primary-600 rounded-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span>
                Plataforma de <span className="text-accent-500">Vender Muito</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Comercialize tecnologia de ponta com sua marca e ganhe comissões recorrentes.
              O Programa White Label Partner é a oportunidade perfeita para empreendedores e agências.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#o-que-e"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('#o-que-e')
                  }}
                  className="hover:text-accent-500 transition-colors"
                >
                  O que é White Label
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('#beneficios')
                  }}
                  className="hover:text-accent-500 transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#comissoes"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('#comissoes')
                  }}
                  className="hover:text-accent-500 transition-colors"
                >
                  Tabela de Comissões
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('#como-funciona')
                  }}
                  className="hover:text-accent-500 transition-colors"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('#faq')
                  }}
                  className="hover:text-accent-500 transition-colors"
                >
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-500" />
                <a
                  href="mailto:contato@plataformadevendermuitocom.br"
                  className="hover:text-accent-500 transition-colors"
                >
                  contato@plataformadevendermuitocom.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-500" />
                <a
                  href="tel:+5511999999999"
                  className="hover:text-accent-500 transition-colors"
                >
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent-500 mt-1" />
                <span>Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} WG Soluções Tecnológicas LTDA. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-accent-500 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-accent-500 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
