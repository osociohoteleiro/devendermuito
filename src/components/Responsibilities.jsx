import {
  User,
  Building2,
  UserCheck,
  HeadphonesIcon,
  Handshake,
  Code2,
  Wrench,
  RefreshCw,
  Shield,
  Server
} from 'lucide-react'

const partnerResponsibilities = [
  {
    icon: UserCheck,
    title: 'Prospecção e Vendas',
    description: 'Encontrar e conquistar novos clientes para a plataforma.',
  },
  {
    icon: User,
    title: 'Onboarding do Cliente',
    description: 'Apresentar a plataforma e ajudar na configuração inicial.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Suporte de Primeiro Nível',
    description: 'Atender dúvidas básicas e orientar sobre funcionalidades.',
  },
  {
    icon: Handshake,
    title: 'Relacionamento Comercial',
    description: 'Manter o cliente satisfeito e identificar oportunidades.',
  },
]

const wgResponsibilities = [
  {
    icon: Code2,
    title: 'Desenvolvimento da Plataforma',
    description: 'Criação de novas funcionalidades e melhorias contínuas.',
  },
  {
    icon: Wrench,
    title: 'Manutenção e Correções',
    description: 'Resolução de bugs e problemas técnicos rapidamente.',
  },
  {
    icon: RefreshCw,
    title: 'Atualizações e Melhorias',
    description: 'Novas versões e recursos sem custo adicional.',
  },
  {
    icon: Server,
    title: 'Infraestrutura e Segurança',
    description: 'Servidores, backup, SSL e proteção de dados.',
  },
]

function Responsibilities() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Divisão de tarefas
          </span>
          <h2 className="section-title">
            Quem faz{' '}
            <span className="text-gradient">o quê</span>?
          </h2>
          <p className="section-subtitle">
            Uma parceria clara onde cada um foca no que faz de melhor.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Partner Column */}
          <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-accent-500 rounded-xl">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Você cuida de</h3>
                <p className="text-gray-600">Comercial e Relacionamento</p>
              </div>
            </div>

            <div className="space-y-4">
              {partnerResponsibilities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                >
                  <div className="p-2 bg-accent-100 rounded-lg flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WG Column */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary-600 rounded-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Nós cuidamos de</h3>
                <p className="text-gray-600">Tecnologia e Infraestrutura</p>
              </div>
            </div>

            <div className="space-y-4">
              {wgResponsibilities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                >
                  <div className="p-2 bg-primary-100 rounded-lg flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-gray-100 px-6 py-3 rounded-full">
            <Handshake className="w-5 h-5 text-primary-600" />
            <span className="text-gray-700">
              Uma parceria onde você foca em vender e nós focamos em entregar tecnologia de qualidade.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Responsibilities
