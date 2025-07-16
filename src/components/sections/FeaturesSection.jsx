import Card from '../ui/Card'

function FeaturesSection() {
  const features = [
    {
      icon: '🚀',
      title: 'Performance',
      description: 'ประสิทธิภาพสูงด้วย React 18 และ Vite 6'
    },
    {
      icon: '💚',
      title: 'Modern Design',
      description: 'ออกแบบสวยงามด้วย Tailwind CSS v4'
    },
    {
      icon: '⚡',
      title: 'Fast Development',
      description: 'พัฒนาได้รวดเร็วด้วย Node.js 22'
    }
  ]

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            ทำไมต้องเลือกเรา
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            เรามุ่งมั่นในการสร้างประสบการณ์ที่ดีที่สุดให้กับลูกค้า
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover padding="lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
