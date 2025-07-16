import { useState } from 'react'
import Layout from '../components/layout/Layout'
import HeroSection from '../components/sections/HeroSection'
import StatsSection from '../components/sections/StatsSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import ContactSection from '../components/sections/ContactSection'

function Home() {
  const [activeTab, setActiveTab] = useState('home')

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <HeroSection />
            <StatsSection />
            <FeaturesSection />
          </>
        )
      case 'about':
        return <AboutSection />
      case 'services':
        return <ServicesSection />
      case 'contact':
        return <ContactSection />
      default:
        return (
          <>
            <HeroSection />
            <StatsSection />
            <FeaturesSection />
          </>
        )
    }
  }

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  )
}

export default Home
