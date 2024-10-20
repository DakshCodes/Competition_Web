import { Footer } from "./components/Footer"
import Navbar from "./components/Navbar"
import { HeroHighlightDemo } from "./pages/Details"
import { FeaturesSectionDemo, SkeletonFour } from "./pages/Featured"
import Hero from "./pages/Hero"
import Home from "./pages/Home"
import { CanvasRevealEffectDemo } from "./pages/Team-page"

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
      <CanvasRevealEffectDemo />
      <HeroHighlightDemo />
      <Footer />
      <>
      <a href="https://forms.gle/H69Bz836LUAZaAyb7" target={"_blank"}>

        <button className="button-2">
          <p className="button__text">
            <span style={{ "--index": 0 }}>A</span>
            <span style={{ "--index": 1 }}>P</span>
            <span style={{ "--index": 2 }}>P</span>
            <span style={{ "--index": 3 }}>L</span>
            <span style={{ "--index": 4 }}>Y</span>
            <span style={{ "--index": 5 }}>               </span>
            <span style={{ "--index": 6 }}>F</span>
            <span style={{ "--index": 7 }}>O</span>
            <span style={{ "--index": 8 }}>R</span>
            <span style={{ "--index": 9 }}>M</span>
          </p>

          <div className="button__circle">
            <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" classname="button__icon" width={14}>
              <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
            </svg>


            <svg
              viewBox="0 0 14 15"
              fill="none"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
              className="button__icon button__icon--copy"
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </a>
      </>
    </div>
  )
}

export default App
