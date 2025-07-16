import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('ส่งข้อความเรียบร้อย!')
    setFormData({ name: '', email: '', message: '' })
  }

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

  const stats = [
    { label: 'Projects', value: '50+' },
    { label: 'Happy Clients', value: '100+' },
    { label: 'Team Members', value: '10+' },
    { label: 'Awards', value: '5+' }
  ]

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-neutral-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-web-green-500 text-white px-3 py-2 rounded-md font-bold text-lg">
                Dev
              </div>
              <span className="ml-2 text-xl font-semibold text-neutral-900">Studio</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'services', 'contact'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? 'bg-web-green-100 text-web-green-700'
                        : 'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-web-green-50 to-white py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h1 className="text-5xl font-bold text-neutral-900 mb-6">
                    สร้างสรรค์เว็บไซต์ที่
                    <span className="text-web-green-600"> น่าประทับใจ</span>
                  </h1>
                  <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
                    พัฒนาด้วยเทคโนโลยีล่าสุด React 18, Node.js 22, และ Tailwind CSS v4 
                    เพื่อประสบการณ์ที่ดีที่สุด
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-web-green-500 hover:bg-web-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                      เริ่มต้นโปรเจค
                    </button>
                    <button className="border border-neutral-300 text-neutral-700 hover:bg-neutral-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                      ดูผลงาน
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-web-green-600 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-neutral-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Features Section */}
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
                    <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === 'about' && (
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">เกี่ยวกับเรา</h2>
                <div className="prose prose-lg text-neutral-600">
                  <p className="mb-4">
                    เราเป็นทีมที่มีประสบการณ์ในการพัฒนาเว็บไซต์และแอปพลิเคชันที่ทันสมัย 
                    ด้วยความเชี่ยวชาญในเทคโนโลยีล่าสุด
                  </p>
                  <p className="mb-4">
                    ใช้เครื่องมือและเฟรมเวิร์คที่ดีที่สุด เช่น React, Node.js, และ Tailwind CSS 
                    เพื่อสร้างผลงานที่มีคุณภาพสูง
                  </p>
                  <div className="bg-web-green-50 p-6 rounded-lg border border-web-green-200">
                    <h3 className="text-web-green-800 font-semibold mb-2">✨ วิสัยทัศน์ของเรา</h3>
                    <p className="text-web-green-700">
                      สร้างเว็บไซต์ที่ไม่เพียงแค่สวยงาม แต่ยังใช้งานได้จริงและตอบโจทย์ผู้ใช้งาน
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'services' && (
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">บริการของเรา</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: 'Web Development', price: '฿15,000+', features: ['Responsive Design', 'SEO Optimized', 'Performance'] },
                  { title: 'E-commerce', price: '฿25,000+', features: ['Shopping Cart', 'Payment Gateway', 'Admin Panel'] },
                  { title: 'Mobile App', price: '฿30,000+', features: ['iOS & Android', 'Push Notifications', 'Offline Support'] }
                ].map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 hover:border-web-green-300 transition-colors">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">{service.title}</h3>
                    <div className="text-2xl font-bold text-web-green-600 mb-4">{service.price}</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-neutral-600">
                          <span className="text-web-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'contact' && (
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6 text-center">ติดต่อเรา</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        ชื่อ
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-web-green-500 focus:border-web-green-500 transition-colors"
                        placeholder="กรุณาใส่ชื่อของคุณ"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        อีเมล
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-web-green-500 focus:border-web-green-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      ข้อความ
                    </label>
                    <textarea
                      required
                      rows="5"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-web-green-500 focus:border-web-green-500 transition-colors"
                      placeholder="อยากให้เราช่วยอะไรบ้างครับ?"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-web-green-500 hover:bg-web-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    ส่งข้อความ
                  </button>
                </form>

                <div className="mt-12 pt-8 border-t border-neutral-200">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl mb-2">📧</div>
                      <div className="font-medium text-neutral-900">Email</div>
                      <div className="text-neutral-600">hello@devstudio.com</div>
                    </div>
                    <div>
                      <div className="text-2xl mb-2">📱</div>
                      <div className="font-medium text-neutral-900">Phone</div>
                      <div className="text-neutral-600">+66 2 123 4567</div>
                    </div>
                    <div>
                      <div className="text-2xl mb-2">📍</div>
                      <div className="font-medium text-neutral-900">Location</div>
                      <div className="text-neutral-600">Bangkok, Thailand</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="bg-web-green-500 text-white px-3 py-2 rounded-md font-bold text-lg">
                  Dev
                </div>
                <span className="ml-2 text-xl font-semibold">Studio</span>
              </div>
              <p className="text-neutral-400 mb-4">
                สร้างเว็บไซต์และแอปพลิเคชันที่ทันสมัยด้วยเทคโนโลยีล่าสุด
              </p>
              <div className="flex space-x-4">
                {['🌐', '📘', '📸', '🐦'].map((icon, index) => (
                  <button key={index} className="bg-neutral-700 hover:bg-web-green-600 p-2 rounded-lg transition-colors">
                    {icon}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">E-commerce</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-neutral-400">
                <li>📧 hello@devstudio.com</li>
                <li>📱 +66 2 123 4567</li>
                <li>📍 Bangkok, Thailand</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400">
            <p>&copy; 2025 Dev Studio. Built with ❤️ using React 18, Node.js 22, and Tailwind CSS v4</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
