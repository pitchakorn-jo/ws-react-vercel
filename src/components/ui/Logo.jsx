import { Link } from 'react-router-dom'

function Logo({ variant = 'light' }) {
  const textColor = variant === 'dark' ? 'text-white' : 'text-neutral-900'
  
  return (
    <Link to="/" className="flex items-center">
      <div className="bg-web-green-500 text-white px-3 py-2 rounded-md font-bold text-lg">
        Dev
      </div>
      <span className={`ml-2 text-xl font-semibold ${textColor}`}>Studio</span>
    </Link>
  )
}

export default Logo
