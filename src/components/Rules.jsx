import { DollarSign, Lock, Scale, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

const rules = [
  {
    icon: DollarSign,
    title: 'Preço Oficial: R$ 990,00',
    description: 'Este é o valor público de referência da licença. Não é permitido divulgar preços menores em materiais públicos.',
    type: 'info',
  },
  {
    icon: Lock,
    title: 'Confidencialidade Técnica',
    description: 'Informações sobre arquitetura, código e processos internos são confidenciais e não devem ser compartilhadas.',
    type: 'info',
  },
  {
    icon: Scale,
    title: 'Ética Comercial',
    description: 'Proibido praticar concorrência desleal, usar a plataforma para fins ilegais ou sugerir que é o desenvolvedor.',
    type: 'info',
  },
]

const allowed = [
  'Usar a plataforma com marca própria',
  'Comercializar como parte do seu portfólio',
  'Definir sua estratégia comercial',
  'Repassar parte da comissão ao cliente em negociação privada',
]

const notAllowed = [
  'Divulgar preços menores que R$ 990 publicamente',
  'Publicar descontos em sites, landing pages ou anúncios',
  'Prometer funcionalidades ou prazos sem autorização',
  'Tentar copiar ou fazer engenharia reversa da plataforma',
]

function Rules() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            Regras importantes
          </span>
          <h2 className="section-title">
            O que você{' '}
            <span className="text-gradient">precisa saber</span>
          </h2>
          <p className="section-subtitle">
            Para manter uma parceria saudável e duradoura, algumas regras são essenciais.
          </p>
        </div>

        {/* Main Rules */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <rule.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {rule.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {rule.description}
              </p>
            </div>
          ))}
        </div>

        {/* Allowed vs Not Allowed */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Allowed */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-2 border-accent-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Permitido</h3>
            </div>
            <ul className="space-y-4">
              {allowed.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Allowed */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-2 border-red-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Proibido</h3>
            </div>
            <ul className="space-y-4">
              {notAllowed.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Warning */}
        <div className="mt-12 bg-orange-50 border border-orange-200 rounded-xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-orange-100 rounded-lg flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Penalidades</h4>
              <p className="text-gray-700">
                O descumprimento das regras pode acarretar advertência formal, suspensão temporária,
                perda de comissões ou até exclusão definitiva do Programa White Label Partner.
                Mantenha uma conduta ética e profissional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rules
