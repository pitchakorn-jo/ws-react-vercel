import Header from './Header'
import Footer from './Footer'

function Layout({ children, activeTab, setActiveTab, showHeader = true, showFooter = true }) {
  return (
    <div className="min-h-screen bg-neutral-50">
      {showHeader && <Header activeTab={activeTab} setActiveTab={setActiveTab} />}
      <main className={showHeader ? '' : 'min-h-screen'}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  )
}

export default Layout
