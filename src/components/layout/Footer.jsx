import Logo from '../ui/Logo'
import SocialButton from '../ui/SocialButton'

function Footer() {
  const services = [
    'Web Development',
    'Mobile Apps', 
    'E-commerce',
    'Consulting'
  ]

  const socialIcons = ['🌐', '📘', '📸', '🐦']

  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo variant="dark" />
            </div>
            <p className="text-neutral-400 mb-4">
              สร้างเว็บไซต์และแอปพลิเคชันที่ทันสมัยด้วยเทคโนโลยีล่าสุด
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((icon, index) => (
                <SocialButton key={index} icon={icon} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-neutral-400">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
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
  )
}

export default Footer
