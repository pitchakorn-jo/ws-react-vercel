import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import Logo from '../components/ui/Logo'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      alert(`ล็อกอินสำเร็จ! Email: ${formData.email}`)
      setIsLoading(false)
      navigate('/')
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const socialLogins = [
    { icon: '🔍', text: 'เข้าสู่ระบบด้วย Google' },
    { icon: '📘', text: 'เข้าสู่ระบบด้วย Facebook' }
  ]

  return (
    <Layout showHeader={false} showFooter={false}>
      <div className="flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-6">
              <Logo />
            </div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">เข้าสู่ระบบ</h1>
            <p className="text-neutral-600">ยินดีต้อนรับกลับมา! กรุณาเข้าสู่ระบบ</p>
          </div>

          {/* Login Form */}
          <Card padding="lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <Input
                type="email"
                label="อีเมล"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="กรุณาใส่อีเมลของคุณ"
                required
              />

              {/* Password Field */}
              <Input
                type="password"
                label="รหัสผ่าน"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="กรุณาใส่รหัสผ่าน"
                required
              />

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-web-green-600 border-neutral-300 rounded focus:ring-web-green-500"
                  />
                  <span className="ml-2 text-sm text-neutral-600">จดจำฉันไว้</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-web-green-600 hover:text-web-green-700 transition-colors"
                >
                  ลืมรหัสผ่าน?
                </button>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                loading={isLoading}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
              </Button>
            </form>

            {/* Divider */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-neutral-500">หรือ</span>
                </div>
              </div>
            </div>

            {/* Social Login */}
            <div className="mt-6 space-y-3">
              {socialLogins.map((social, index) => (
                <Button
                  key={index}
                  variant="secondary"
                  className="w-full flex items-center justify-center"
                  onClick={() => console.log(`Login with ${social.text}`)}
                >
                  <span className="mr-2">{social.icon}</span>
                  {social.text}
                </Button>
              ))}
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-neutral-600">
                ยังไม่มีบัญชี?{' '}
                <button className="text-web-green-600 hover:text-web-green-700 font-semibold transition-colors">
                  สมัครสมาชิก
                </button>
              </p>
            </div>
          </Card>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-500">
              การเข้าสู่ระบบแสดงว่าคุณยอมรับ{' '}
              <button className="text-web-green-600 hover:text-web-green-700 transition-colors">
                เงื่อนไขการใช้งาน
              </button>{' '}
              และ{' '}
              <button className="text-web-green-600 hover:text-web-green-700 transition-colors">
                นโยบายความเป็นส่วนตัว
              </button>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
