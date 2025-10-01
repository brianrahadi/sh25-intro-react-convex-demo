import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <Header />

      <main>
        <HeroSection />
        <section className="content-container" id="about">
          <div className="about--content">
            <div>
              <h2>About Me</h2>
              <p>Hey there, my name is Sebastian Lee (he/him) and I am a software systems student at <a
                href="https://sfu.ca">Simon Fraser
                University.</a> I have always been fascinated by technology and its potential to make a positive impact on
                the
                world.

                My goal is to use my skills and knowledge to develop innovative solutions that can improve people's lives! I
                am dedicated to building high-quality products that help make the world a better place. To do this, I have
                completed <a href="#projects">various projects</a> that solve real-world problems.</p>
            </div>
          </div>
          <img src="./assets/profile.jpg" alt="Sebastian Lee's profile image" />

        </section>

        <section className="content-container" id="projects">
          <h2>Projects</h2>
          <div className="project--item">
            <img src="./assets/project-1-img.png" alt="Project image" />
              <div className="project--item--description">
                <h3>SSSS Website v2</h3>
                <p>The official website of the Software Systems Student Society (SSSS). Created alongside the SSSS website committee.</p>
                <div className="project--item--actions">
                  <a href="#" className="btn">View Project</a>
                  <a href="#" className="btn secondary">View Site</a>
                </div>
              </div>
          </div>
        </section>
      </main>
      <script src="script.js"></script>
    </body>
  )
}

export default App