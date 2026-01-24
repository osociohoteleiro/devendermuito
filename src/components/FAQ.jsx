import { useState } from 'react'
import { ChevronDown, MessageCircleQuestion } from 'lucide-react'

const faqs = [
  {
    question: 'O que é White Label?',
    answer: 'White Label é um modelo de negócio onde você comercializa uma plataforma completa como se fosse sua, com sua própria marca. Toda a tecnologia é desenvolvida e mantida por nós, mas seus clientes veem apenas a sua identidade visual.',
  },
  {
    question: 'Como funciona o pagamento das comissões?',
    answer: 'As comissões são calculadas mensalmente sobre o valor das licenças dos clientes ativos (pagantes e adimplentes). O pagamento é realizado até o dia 15 do mês seguinte, diretamente na sua conta bancária.',
  },
  {
    question: 'Posso usar a plataforma para minha própria empresa?',
    answer: 'Sim, você pode usar a plataforma internamente, porém não há desconto ou comissão para uso próprio. O valor cobrado é o integral da licença (R$ 990,00/mês).',
  },
  {
    question: 'Preciso ter conhecimento técnico?',
    answer: 'Não! Você não precisa saber programar ou ter conhecimento técnico. Toda a parte tecnológica é de nossa responsabilidade. Você foca apenas em vendas e relacionamento com clientes.',
  },
  {
    question: 'Qual é o investimento inicial?',
    answer: 'Não há investimento inicial para se tornar um parceiro White Label. Você começa a ganhar comissões assim que seus primeiros clientes ativarem suas licenças.',
  },
  {
    question: 'Como funciona o suporte aos meus clientes?',
    answer: 'Você é responsável pelo suporte de primeiro nível (dúvidas básicas, orientações de uso). Para questões técnicas mais complexas, nossa equipe de suporte está disponível para auxiliar.',
  },
  {
    question: 'Posso oferecer desconto aos meus clientes?',
    answer: 'Você pode repassar parte ou toda a sua comissão ao cliente final, mas apenas em negociações privadas e individuais. É proibido divulgar preços menores que R$ 990,00 publicamente em sites, anúncios ou materiais comerciais.',
  },
  {
    question: 'O que acontece se eu quiser sair do programa?',
    answer: 'Em caso de desligamento, você perde o direito de uso da plataforma White Label e as comissões cessam imediatamente. Os clientes ativos permanecem vinculados à plataforma, sem direito a comissionamento futuro.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Dúvidas frequentes
          </span>
          <h2 className="section-title">
            Perguntas{' '}
            <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="section-subtitle">
            Tire suas principais dúvidas sobre o Programa White Label Partner.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg transition-colors ${
                    openIndex === index ? 'bg-primary-500' : 'bg-primary-100'
                  }`}>
                    <MessageCircleQuestion className={`w-5 h-5 ${
                      openIndex === index ? 'text-white' : 'text-primary-600'
                    }`} />
                  </div>
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="pl-14 pr-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Falar com nossa equipe
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
