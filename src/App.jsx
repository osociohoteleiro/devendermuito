import Header from './components/Header'
import Hero from './components/Hero'
import WhatIsWhiteLabel from './components/WhatIsWhiteLabel'
import Benefits from './components/Benefits'
import CommissionLevels from './components/CommissionLevels'
import HowItWorks from './components/HowItWorks'
import Responsibilities from './components/Responsibilities'
import Rules from './components/Rules'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WhatIsWhiteLabel />
        <Benefits />
        <CommissionLevels />
        <HowItWorks />
        <Responsibilities />
        <Rules />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
