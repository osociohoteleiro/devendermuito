import {
  Palette,
  TrendingUp,
  Code2,
  HeadphonesIcon,
  RefreshCw,
  Shield
} from 'lucide-react'

const benefits = [
  {
    icon: Palette,
    title: 'Sua Marca, Nossa Tecnologia',
    description: 'Use sua identidade visual completa. Seus clientes verão apenas a sua marca na plataforma.',
    color: 'bg-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Comissões Recorrentes',
    description: 'Ganhe todo mês enquanto o cliente estiver ativo. Até 45% de comissão sobre cada licença.',
    color: 'bg-green-500',
  },
  {
    icon: Code2,
    title: 'Zero Desenvolvimento',
    description: 'Plataforma pronta para uso. Sem custos de desenvolvimento, manutenção ou infraestrutura.',
    color: 'bg-purple-500',
  },
  {
    icon: HeadphonesIcon,
    title: 'Suporte Técnico Incluso',
    description: 'Nossa equipe cuida de toda a parte técnica. Você foca apenas nas vendas e relacionamento.',
    color: 'bg-orange-500',
  },
  {
    icon: RefreshCw,
    title: 'Atualizações Automáticas',
    description: 'Sempre na versão mais recente. Novas funcionalidades e melhorias sem custo adicional.',
    color: 'bg-pink-500',
  },
  {
    icon: Shield,
    title: 'Segurança Garantida',
    description: 'Infraestrutura robusta com backup, SSL e proteção de dados. Tranquilidade para você e seus clientes.',
    color: 'bg-cyan-500',
  },
]

function Benefits() {
  return (
    <section id="beneficios" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Vantagens
          </span>
          <h2 className="section-title">
            Por que se tornar um{' '}
            <span className="text-gradient">Parceiro White Label</span>?
          </h2>
          <p className="section-subtitle">
            Benefícios exclusivos que fazem do nosso programa uma oportunidade única de negócio.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg card-hover border border-gray-100"
            >
              <div className={`${benefit.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Quero esses benefícios
            <TrendingUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Benefits
