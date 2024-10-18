import { Footer } from "./components/Footer"
import Navbar from "./components/Navbar"
import { FeaturesSectionDemo, SkeletonFour } from "./pages/Featured"
import Hero from "./pages/Hero"
import Home from "./pages/Home"

function App() {

  return (
    <div
      className="bg-black bg-radial relative border border-black h-max w-full"
    >
      <img
        alt="bg-noise"
        className="pointer-events-none fixed inset-0 z-10 h-screen w-full object-cover"
        srcSet="https://xield.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-noise.5db3ded2.png&amp;w=1920&amp;q=75 1x, https://xield.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-noise.5db3ded2.png&amp;w=3840&amp;q=75 2x"
        src="https://xield.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-noise.5db3ded2.png&amp;w=3840&amp;q=75"
      ></img>
      <img
        alt="bg-grid"
        className="pointer-events-none fixed inset-0 z-20 h-screen w-full object-cover"
        src="https://xield.io/_next/static/media/bg-grid-line.12099731.svg"
      />
      <Navbar />
      <Home />
      <Hero />
      <FeaturesSectionDemo />
      <Footer /> 
    </div>
  )
}

export default App
