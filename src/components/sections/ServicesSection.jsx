import Card from '../ui/Card'

function ServicesSection() {
  const services = [
    { 
      title: 'Web Development', 
      price: '฿15,000+', 
      features: ['Responsive Design', 'SEO Optimized', 'Performance'] 
    },
    { 
      title: 'E-commerce', 
      price: '฿25,000+', 
      features: ['Shopping Cart', 'Payment Gateway', 'Admin Panel'] 
    },
    { 
      title: 'Mobile App', 
      price: '฿30,000+', 
      features: ['iOS & Android', 'Push Notifications', 'Offline Support'] 
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
          บริการของเรา
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} hover>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {service.title}
              </h3>
              <div className="text-2xl font-bold text-web-green-600 mb-4">
                {service.price}
              </div>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-neutral-600">
                    <span className="text-web-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
