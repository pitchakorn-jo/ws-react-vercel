import { useState } from 'react'
import Card from '../ui/Card'
import Input from '../ui/Input'
import Button from '../ui/Button'

function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('ส่งข้อความเรียบร้อย!')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'hello@devstudio.com' },
    { icon: '📱', label: 'Phone', value: '+66 2 123 4567' },
    { icon: '📍', label: 'Location', value: 'Bangkok, Thailand' }
  ]

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card padding="lg">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6 text-center">
            ติดต่อเรา
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="ชื่อ"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="กรุณาใส่ชื่อของคุณ"
                required
              />
              <Input
                type="email"
                label="อีเมล"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                ข้อความ
              </label>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-web-green-500 focus:border-web-green-500 transition-colors"
                placeholder="อยากให้เราช่วยอะไรบ้างครับ?"
              />
            </div>
            
            <Button type="submit" className="w-full">
              ส่งข้อความ
            </Button>
          </form>

          <div className="mt-12 pt-8 border-t border-neutral-200">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {contactInfo.map((info, index) => (
                <div key={index}>
                  <div className="text-2xl mb-2">{info.icon}</div>
                  <div className="font-medium text-neutral-900">{info.label}</div>
                  <div className="text-neutral-600">{info.value}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default ContactSection
