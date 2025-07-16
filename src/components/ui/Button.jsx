function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  loading = false,
  type = 'button',
  onClick,
  className = ''
}) {
  const baseClasses = 'font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: disabled || loading 
      ? 'bg-neutral-400 text-neutral-600 cursor-not-allowed'
      : 'bg-web-green-500 hover:bg-web-green-600 text-white shadow-sm hover:shadow-md focus:ring-web-green-500',
    secondary: 'border border-neutral-300 text-neutral-700 hover:bg-neutral-50 focus:ring-neutral-500',
    outline: 'border border-web-green-500 text-web-green-600 hover:bg-web-green-50 focus:ring-web-green-500'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-3 text-lg'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
          {children}
        </div>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
