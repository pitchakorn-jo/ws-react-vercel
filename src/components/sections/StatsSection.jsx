function StatsSection() {
  const stats = [
    { label: 'Projects', value: '50+' },
    { label: 'Happy Clients', value: '100+' },
    { label: 'Team Members', value: '10+' },
    { label: 'Awards', value: '5+' }
  ]

  return (
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
  )
}

export default StatsSection
