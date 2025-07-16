import { useState, useMemo, useRef, useEffect } from 'react'

function DatePicker({ 
  value, 
  onChange, 
  label, 
  placeholder = "เลือกวันที่", 
  required = false,
  className = "",
  maxDate = null
}) {
  const [showCalendar, setShowCalendar] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const calendarRef = useRef(null)

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false)
      }
    }

    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showCalendar])

  const formattedDate = useMemo(() => {
    if (!value) return ''
    const date = new Date(value)
    return date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }, [value])

  const weekdays = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส']

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()

  const calendarDays = useMemo(() => {
    const days = []
    const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay()
    
    // Previous month days
    const prevMonthDays = daysInMonth(currentYear, currentMonth - 1)
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(currentYear, currentMonth - 1, prevMonthDays - i),
        otherMonth: true,
      })
    }
    
    // Current month days
    const thisMonthDays = daysInMonth(currentYear, currentMonth)
    for (let i = 1; i <= thisMonthDays; i++) {
      days.push({ 
        date: new Date(currentYear, currentMonth, i), 
        otherMonth: false 
      })
    }
    
    // Next month days (fill to 6 weeks grid)
    const nextDays = 42 - days.length
    for (let i = 1; i <= nextDays; i++) {
      days.push({ 
        date: new Date(currentYear, currentMonth + 1, i), 
        otherMonth: true 
      })
    }
    
    return days
  }, [currentYear, currentMonth])

  const currentMonthName = useMemo(() => {
    return new Date(currentYear, currentMonth).toLocaleDateString('th-TH', { 
      month: 'long',
      year: 'numeric'
    })
  }, [currentYear, currentMonth])

  const toggleCalendar = () => setShowCalendar(!showCalendar)

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const selectDate = (day) => {
    if (day.otherMonth) return
    
    // Check if date is after maxDate
    if (maxDate && day.date > new Date(maxDate)) return
    
    const dateString = day.date.toISOString().split('T')[0]
    onChange({ target: { name: 'birthdate', value: dateString } })
    setShowCalendar(false)
  }

  const isSelected = (day) => {
    if (!value) return false
    const selectedDate = new Date(value)
    return day.date.toDateString() === selectedDate.toDateString()
  }

  const isDisabled = (day) => {
    if (maxDate && day.date > new Date(maxDate)) return true
    return false
  }

  return (
    <div className={`relative inline-block w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        type="text"
        readOnly
        value={formattedDate}
        onClick={toggleCalendar}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-neutral-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-web-green-500 focus:border-web-green-500 transition-colors bg-white text-neutral-900"
        required={required}
      />
      
      {showCalendar && (
        <div 
          ref={calendarRef}
          className="absolute top-full left-0 mt-2 bg-white border border-neutral-300 rounded-lg shadow-lg z-50 p-4 min-w-72"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <button
              type="button"
              onClick={prevMonth}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="font-semibold text-neutral-900">{currentMonthName}</span>
            <button
              type="button"
              onClick={nextMonth}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Weekdays */}
          <div className="grid grid-cols-7 text-center mb-2">
            {weekdays.map((day) => (
              <span key={day} className="font-semibold text-neutral-600 p-2 text-sm">
                {day}
              </span>
            ))}
          </div>
          
          {/* Days */}
          <div className="grid grid-cols-7 text-center">
            {calendarDays.map((day, index) => (
              <button
                key={index}
                type="button"
                onClick={() => selectDate(day)}
                disabled={day.otherMonth || isDisabled(day)}
                className={`
                  p-2 rounded-lg text-sm transition-colors
                  ${day.otherMonth 
                    ? 'text-neutral-300 cursor-not-allowed' 
                    : isDisabled(day)
                    ? 'text-neutral-300 cursor-not-allowed'
                    : 'text-neutral-900 cursor-pointer hover:bg-web-green-100'
                  }
                  ${isSelected(day) 
                    ? 'bg-web-green-500 text-white hover:bg-web-green-600' 
                    : ''
                  }
                `}
              >
                {day.date.getDate()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DatePicker
