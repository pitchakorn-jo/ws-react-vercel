function Card({ children, className = '', hover = false, padding = 'md' }) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const baseClasses = `bg-white rounded-xl shadow-sm border border-neutral-200 ${paddingClasses[padding]}`
  const hoverClasses = hover ? 'hover:shadow-md hover:border-web-green-300 transition-all duration-200' : ''
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}

export default Card
