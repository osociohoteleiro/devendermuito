import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2, Building2, User } from 'lucide-react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_BASE_URL || '/api'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    personType: '', // 'pf' ou 'pj'
    // Campos Pessoa Jurídica
    company: '',
    cnpj: '',
    website: '',
    instagram: '',
    position: '',
    // Campos Pessoa Física
    businessType: '',
    cpf: '',
    instagramPf: '',
    // Comum
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 2) {
      return `(${numbers}`
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    } else if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
    }
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  const formatCNPJ = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 5) return `${numbers.slice(0, 2)}.${numbers.slice(2)}`
    if (numbers.length <= 8) return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5)}`
    if (numbers.length <= 12) return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8)}`
    return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8, 12)}-${numbers.slice(12, 14)}`
  }

  const formatCPF = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 3) return numbers
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}.${numbers.slice(3)}`
    if (numbers.length <= 9) return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`
  }

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value)
    setFormData((prev) => ({ ...prev, phone: formatted }))
  }

  const handleCNPJChange = (e) => {
    const formatted = formatCNPJ(e.target.value)
    setFormData((prev) => ({ ...prev, cnpj: formatted }))
  }

  const handleCPFChange = (e) => {
    const formatted = formatCPF(e.target.value)
    setFormData((prev) => ({ ...prev, cpf: formatted }))
  }

  const handleInstagramChange = (e, field) => {
    let value = e.target.value
    // Remove @ se o usuário digitar
    if (value.startsWith('@')) {
      value = value.substring(1)
    }
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    // Preparar dados para envio
    const dataToSend = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      personType: formData.personType,
      message: formData.message,
    }

    if (formData.personType === 'pj') {
      dataToSend.company = formData.company
      dataToSend.cnpj = formData.cnpj
      dataToSend.website = formData.website
      dataToSend.instagram = formData.instagram
      dataToSend.position = formData.position
    } else {
      dataToSend.businessType = formData.businessType
      dataToSend.cpf = formData.cpf
      dataToSend.instagram = formData.instagramPf
    }

    try {
      await axios.post(`${API_URL}/whitelabel-partner/lead`, dataToSend)
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        personType: '',
        company: '',
        cnpj: '',
        website: '',
        instagram: '',
        position: '',
        businessType: '',
        cpf: '',
        instagramPf: '',
        message: '',
      })
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error.response?.data?.message ||
        'Ocorreu um erro ao enviar. Por favor, tente novamente.'
      )
    }
  }

  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"

  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="text-white lg:sticky lg:top-24">
            <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              Faça parte do time
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para{' '}
              <span className="text-accent-400">começar</span>?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Preencha o formulário ao lado e nossa equipe entrará em contato
              para alinhar os próximos passos da sua parceria.
            </p>

            {/* Benefits Reminder */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span className="text-white/90">Comissões recorrentes de até 45%</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span className="text-white/90">Sua marca na plataforma</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span className="text-white/90">Zero investimento inicial</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span className="text-white/90">Suporte técnico incluso</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Cadastro recebido!
                </h3>
                <p className="text-gray-600 mb-6">
                  Nossa equipe entrará em contato em breve para dar continuidade
                  ao seu processo de parceria.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-primary-600 font-medium hover:text-primary-700"
                >
                  Enviar outro cadastro
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Cadastre-se como Parceiro
                </h3>

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-red-700 text-sm">{errorMessage}</span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Nome */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="Seu nome"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="seu@email.com"
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      required
                      className={inputClass}
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  {/* Tipo de Pessoa */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de cadastro *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, personType: 'pf' }))}
                        className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all ${
                          formData.personType === 'pf'
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-200 hover:border-gray-300 text-gray-600'
                        }`}
                      >
                        <User className="w-5 h-5" />
                        <span className="font-medium">Pessoa Física</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, personType: 'pj' }))}
                        className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all ${
                          formData.personType === 'pj'
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-200 hover:border-gray-300 text-gray-600'
                        }`}
                      >
                        <Building2 className="w-5 h-5" />
                        <span className="font-medium">Pessoa Jurídica</span>
                      </button>
                    </div>
                  </div>

                  {/* Campos Pessoa Jurídica */}
                  {formData.personType === 'pj' && (
                    <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-900 flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        Dados da Empresa
                      </h4>

                      {/* Nome da Empresa */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Nome da Empresa *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required={formData.personType === 'pj'}
                          className={inputClass}
                          placeholder="Nome da sua empresa"
                        />
                      </div>

                      {/* CNPJ */}
                      <div>
                        <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700 mb-1">
                          CNPJ *
                        </label>
                        <input
                          type="text"
                          id="cnpj"
                          name="cnpj"
                          value={formData.cnpj}
                          onChange={handleCNPJChange}
                          required={formData.personType === 'pj'}
                          maxLength={18}
                          className={inputClass}
                          placeholder="00.000.000/0000-00"
                        />
                      </div>

                      {/* Cargo */}
                      <div>
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                          Seu cargo na empresa *
                        </label>
                        <input
                          type="text"
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          required={formData.personType === 'pj'}
                          className={inputClass}
                          placeholder="Ex: Diretor, Gerente, Sócio..."
                        />
                      </div>

                      {/* Site */}
                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                          Site <span className="text-gray-400">(opcional)</span>
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="https://www.suaempresa.com.br"
                        />
                      </div>

                      {/* Instagram */}
                      <div>
                        <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
                          Instagram da empresa <span className="text-gray-400">(opcional)</span>
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">@</span>
                          <input
                            type="text"
                            id="instagram"
                            name="instagram"
                            value={formData.instagram}
                            onChange={(e) => handleInstagramChange(e, 'instagram')}
                            className={`${inputClass} pl-8`}
                            placeholder="suaempresa"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Campos Pessoa Física */}
                  {formData.personType === 'pf' && (
                    <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-900 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Dados Pessoais
                      </h4>

                      {/* Tipo de Atuação/Negócio */}
                      <div>
                        <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                          Tipo de atuação/negócio *
                        </label>
                        <input
                          type="text"
                          id="businessType"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          required={formData.personType === 'pf'}
                          className={inputClass}
                          placeholder="Ex: Consultor, Freelancer, Agência..."
                        />
                      </div>

                      {/* CPF */}
                      <div>
                        <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
                          CPF *
                        </label>
                        <input
                          type="text"
                          id="cpf"
                          name="cpf"
                          value={formData.cpf}
                          onChange={handleCPFChange}
                          required={formData.personType === 'pf'}
                          maxLength={14}
                          className={inputClass}
                          placeholder="000.000.000-00"
                        />
                      </div>

                      {/* Instagram PF */}
                      <div>
                        <label htmlFor="instagramPf" className="block text-sm font-medium text-gray-700 mb-1">
                          Instagram <span className="text-gray-400">(opcional)</span>
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">@</span>
                          <input
                            type="text"
                            id="instagramPf"
                            name="instagramPf"
                            value={formData.instagramPf}
                            onChange={(e) => handleInstagramChange(e, 'instagramPf')}
                            className={`${inputClass} pl-8`}
                            placeholder="seuperfil"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mensagem */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem <span className="text-gray-400">(opcional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className={`${inputClass} resize-none`}
                      placeholder="Conte-nos mais sobre seu interesse..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading' || !formData.personType}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Quero ser Parceiro
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Ao enviar, você concorda com nossa política de privacidade.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
