import { useState } from 'react'

function Input({ 
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  required = false,
  error,
  className = ''
}) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const inputType = isPassword && showPassword ? 'text' : type
  
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border rounded-lg transition-colors placeholder-neutral-400 ${
            error 
              ? 'border-error focus:ring-2 focus:ring-error focus:border-error' 
              : 'border-neutral-300 focus:ring-2 focus:ring-web-green-500 focus:border-web-green-500'
          } ${isPassword ? 'pr-12' : ''}`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700 transition-colors"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
    </div>
  )
}

export default Input
