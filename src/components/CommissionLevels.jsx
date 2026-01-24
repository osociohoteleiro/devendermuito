import { Check, Star, Crown, Rocket, ArrowRight } from 'lucide-react'

const levels = [
  {
    name: 'Iniciante',
    icon: Star,
    range: 'até 5',
    commission: '25%',
    earnings: 'R$ 247,50',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    features: [
      'Plataforma White Label completa',
      'Suporte técnico incluso',
      'Atualizações automáticas',
      'Material de vendas',
    ],
  },
  {
    name: 'Parceiro',
    icon: Crown,
    range: '6 a 50',
    commission: '35%',
    earnings: 'R$ 346,50',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    popular: true,
    features: [
      'Tudo do nível Iniciante',
      'Prioridade no suporte',
      'Treinamentos exclusivos',
      'Mentorias periódicas',
    ],
  },
  {
    name: 'Avançado',
    icon: Rocket,
    range: 'acima de 50',
    commission: '45%',
    earnings: 'R$ 445,50',
    color: 'from-accent-400 to-accent-600',
    bgColor: 'bg-accent-50',
    borderColor: 'border-accent-200',
    features: [
      'Tudo do nível Parceiro',
      'Gerente de conta dedicado',
      'Condições especiais',
      'Acesso antecipado a novidades',
    ],
  },
]

function CommissionLevels() {
  return (
    <section id="comissoes" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
            Comissões
          </span>
          <h2 className="section-title">
            Quanto você pode{' '}
            <span className="text-gradient">ganhar</span>?
          </h2>
          <p className="section-subtitle">
            Suas comissões crescem conforme você traz mais clientes.
            O valor base da licença é <strong>R$ 990,00/mês</strong>.
          </p>
        </div>

        {/* Commission Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {levels.map((level, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${level.bgColor} border-2 ${level.borderColor} card-hover ${
                level.popular ? 'ring-2 ring-purple-500 ring-offset-2' : ''
              }`}
            >
              {level.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center mb-6`}>
                <level.icon className="w-8 h-8 text-white" />
              </div>

              {/* Level Info */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {level.name}
              </h3>
              <p className="text-gray-600 mb-6">
                <strong>{level.range}</strong> indicações ativas
              </p>

              {/* Commission */}
              <div className="mb-6">
                <div className="text-5xl font-bold text-gray-900 mb-1">
                  {level.commission}
                </div>
                <div className="text-gray-500">
                  de comissão por licença
                </div>
                <div className="mt-2 text-lg font-semibold text-accent-600">
                  {level.earnings}/mês por cliente
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {level.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Example Calculation */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Exemplo de ganhos no nível Avançado
            </h3>
            <p className="text-white/80 mb-8">
              Com 60 clientes ativos pagando R$ 990,00/mês, sua comissão de 45% seria:
            </p>
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-left">
                <div className="text-4xl md:text-5xl font-bold text-accent-400">
                  R$ 26.730,00
                </div>
                <div className="text-white/70 mt-2">por mês em comissões</div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg transition-all"
              >
                Começar agora
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-gray-500 text-sm mt-8">
          * Considera-se indicação ativa o cliente com contrato vigente e pagamentos em dia.
        </p>
      </div>
    </section>
  )
}

export default CommissionLevels
