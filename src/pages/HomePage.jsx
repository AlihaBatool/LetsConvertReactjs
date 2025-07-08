import Hero from "../components/hero"
import ToolsGrid from "../components/toolsgrid"
import Features from "../components/features"
import Footer from "../components/footer"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <ToolsGrid />
      <Features />
      <Footer />
    </div>
  )
}
