import { ArrowRight, CheckCircle, TrendingUp, Users, Zap } from 'lucide-react'

function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Programa White Label Partner</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Tenha sua própria{' '}
              <span className="text-accent-400">plataforma de automação</span>{' '}
              e vendas
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              Comercialize a Plataforma de Vender Muito com sua marca e ganhe{' '}
              <strong className="text-accent-400">comissões recorrentes de até 45%</strong>.
              Zero investimento em tecnologia.
            </p>

            {/* Benefits Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span className="text-sm">Sua marca na plataforma</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-accent-400" />
                <span className="text-sm">Até 45% de comissão</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-accent-400" />
                <span className="text-sm">Tecnologia pronta</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="btn-primary flex items-center justify-center gap-2 text-lg"
              >
                Quero ser Parceiro
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#como-funciona"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#como-funciona')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-outline flex items-center justify-center gap-2"
              >
                Como Funciona
              </a>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="hidden lg:block animate-slide-in-right">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-accent-400 mb-2">45%</div>
                    <div className="text-white/80 text-sm">Comissão Máxima</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-accent-400 mb-2">R$990</div>
                    <div className="text-white/80 text-sm">Valor da Licença</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-accent-400 mb-2">0%</div>
                    <div className="text-white/80 text-sm">Investimento Inicial</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-accent-400 mb-2">100%</div>
                    <div className="text-white/80 text-sm">Sua Marca</div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent-100 rounded-lg">
                    <Users className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Parceiros ativos</div>
                    <div className="text-xl font-bold text-gray-900">+50 parceiros</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
