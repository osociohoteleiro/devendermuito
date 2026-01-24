import { UserPlus, Palette, Megaphone, Banknote, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Cadastre-se como Parceiro',
    description: 'Preencha o formulário de interesse e nossa equipe entrará em contato para alinhar os próximos passos.',
    color: 'bg-blue-500',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Personalize sua Plataforma',
    description: 'Configure sua marca, cores e domínio. A plataforma ficará com a cara da sua empresa.',
    color: 'bg-purple-500',
  },
  {
    number: '03',
    icon: Megaphone,
    title: 'Comece a Vender',
    description: 'Com materiais de apoio e treinamento, você está pronto para prospectar e fechar negócios.',
    color: 'bg-orange-500',
  },
  {
    number: '04',
    icon: Banknote,
    title: 'Receba Comissões',
    description: 'A cada cliente ativo, você recebe comissões recorrentes mensais diretamente na sua conta.',
    color: 'bg-accent-500',
  },
]

function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Passo a passo
          </span>
          <h2 className="section-title">
            Como{' '}
            <span className="text-gradient">funciona</span>?
          </h2>
          <p className="section-subtitle">
            Em apenas 4 passos simples você começa a ganhar dinheiro como nosso parceiro.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-accent-500"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg card-hover h-full">
                  {/* Number Badge */}
                  <div className="relative z-10 mb-6">
                    <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Mobile/Tablet) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Pronto para começar sua jornada como parceiro?
          </p>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Começar agora
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
