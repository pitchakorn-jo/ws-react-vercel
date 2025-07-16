import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import Logo from '../ui/Logo'

function Header({ activeTab, setActiveTab }) {
  const navItems = ['home', 'about', 'services', 'contact']

  return (
    <header className="bg-white shadow-sm border-b border-neutral-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab && setActiveTab(tab)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-web-green-100 text-web-green-700'
                      : 'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
              <Link to="/login">
                <Button variant="primary" size="sm">
                  เข้าสู่ระบบ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
