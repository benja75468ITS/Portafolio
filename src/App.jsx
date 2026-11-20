import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProjectStrip } from './components/ProjectStrip'
import { ProjectsFaq } from './components/ProjectsFaq'
import { AboutSkills } from './components/AboutSkills'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#E5E5E5] font-sans selection:bg-[#E61919] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProjectStrip />
        <ProjectsFaq />
        <AboutSkills />
      </main>
      <Footer />
    </div>
  )
}

export default App
