import Card from '../ui/Card'

function AboutSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card padding="lg">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">เกี่ยวกับเรา</h2>
          <div className="prose prose-lg text-neutral-600">
            <p className="mb-4">
              เราเป็นทีมที่มีประสบการณ์ในการพัฒนาเว็บไซต์และแอปพลิเคชันที่ทันสมัย 
              ด้วยความเชี่ยวชาญในเทคโนโลยีล่าสุด
            </p>
            <p className="mb-4">
              ใช้เครื่องมือและเฟรมเวิร์คที่ดีที่สุด เช่น React, Node.js, และ Tailwind CSS 
              เพื่อสร้างผลงานที่มีคุณภาพสูง
            </p>
            <div className="bg-web-green-50 p-6 rounded-lg border border-web-green-200">
              <h3 className="text-web-green-800 font-semibold mb-2">✨ วิสัยทัศน์ของเรา</h3>
              <p className="text-web-green-700">
                สร้างเว็บไซต์ที่ไม่เพียงแค่สวยงาม แต่ยังใช้งานได้จริงและตอบโจทย์ผู้ใช้งาน
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default AboutSection
