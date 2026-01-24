import { Layers, Tag, Building2, ArrowRight } from 'lucide-react'

function WhatIsWhiteLabel() {
  return (
    <section id="o-que-e" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Entenda o modelo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O que é{' '}
              <span className="text-gradient">White Label</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              White Label é um modelo de negócio onde você comercializa uma plataforma completa
              como se fosse sua. Toda a tecnologia é desenvolvida e mantida por nós, mas seus
              clientes veem apenas a <strong>sua marca</strong>.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Você não precisa investir em desenvolvimento, infraestrutura ou equipe técnica.
              Foque apenas em <strong>vender e atender seus clientes</strong>, enquanto cuidamos
              de toda a parte tecnológica.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Tag className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Sua Marca em Destaque</h4>
                  <p className="text-gray-600">
                    Logo, cores e domínio personalizados. Seus clientes não sabem da nossa existência.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Layers className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Tecnologia Completa</h4>
                  <p className="text-gray-600">
                    Plataforma robusta com todas as funcionalidades prontas para uso imediato.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Building2 className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Seu Negócio, Suas Regras</h4>
                  <p className="text-gray-600">
                    Defina sua estratégia de preços e atendimento. Você é dono do relacionamento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
              {/* Diagram */}
              <div className="space-y-6">
                {/* WG Layer */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-primary-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                      <Layers className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">WG Soluções</div>
                      <div className="text-sm text-gray-500">Desenvolvimento & Infraestrutura</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                      Tecnologia
                    </span>
                    <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                      Manutenção
                    </span>
                    <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                      Atualizações
                    </span>
                    <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                      Segurança
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-primary-400 rotate-90" />
                </div>

                {/* Partner Layer */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-accent-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Você (Parceiro)</div>
                      <div className="text-sm text-gray-500">Comercialização & Atendimento</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-xs font-medium">
                      Sua Marca
                    </span>
                    <span className="px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-xs font-medium">
                      Vendas
                    </span>
                    <span className="px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-xs font-medium">
                      Suporte N1
                    </span>
                    <span className="px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-xs font-medium">
                      Relacionamento
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-accent-400 rotate-90" />
                </div>

                {/* Client Layer */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Seus Clientes</div>
                      <div className="text-sm text-gray-500">Veem apenas a sua marca</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsWhiteLabel
