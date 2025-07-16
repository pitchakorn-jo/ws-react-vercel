import Button from '../ui/Button'

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-web-green-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-neutral-900 mb-6">
            สร้างสรรค์เว็บไซต์ที่
            <span className="text-web-green-600"> น่าประทับใจ</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            พัฒนาด้วยเทคโนโลยีล่าสุด React 18, Node.js 22, และ Tailwind CSS v4 
            เพื่อประสบการณ์ที่ดีที่สุด
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              เริ่มต้นโปรเจค
            </Button>
            <Button variant="secondary" size="lg">
              ดูผลงาน
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
