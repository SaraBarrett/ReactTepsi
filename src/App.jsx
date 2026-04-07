import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import FirstComponent from './components/FirstComponent'
import MainGoal from './components/MainGoal'
import './App.css'
import user from './data/user'
import goals from './data/goals'
import { CourseGoal } from './components/CourseGoal'
import OurButton from './components/OurButton'
import Login from './components/auth/Login'
import Discount from './components/Discount'
import { EXAMPLES } from './data/coreConcepts'



function App() {
  const [count, setCount] = useState(0)
  const [myContent, setMyContent] = useState('components');


      function hello(){
        alert('hello world!')
    }

      function goodbye(){
        alert('goodbye world!')
    }

    
    function content(subject){
      setMyContent(subject)
    }


  return (
    <>
      <h3>Eventos Dinâmicos</h3>
      <menu>
        <OurButton clickFunction={()=>content('jsx')} >JSX</OurButton>
        <OurButton clickFunction={()=>content('props')}>Props</OurButton>
        <OurButton clickFunction={()=>content('state')}>State</OurButton>
      </menu>
      <div>
        <h5>Título:{myContent}</h5>
        <p>Descrição:{EXAMPLES[myContent].description}</p>
      </div>


      <section id="center">
        <Discount/>
        <OurButton clickFunction={hello}>Login</OurButton>
        <OurButton clickFunction={goodbye}>Logout</OurButton>
        <FirstComponent 
        name = 'Tiago'
        job= 'Marketing Digital'
        />
        <FirstComponent
        name='Kai'
        job='empregado de mesa'
        />
        <FirstComponent
          {...user}
        />

        <MainGoal
        objective={goals[0]}
        />
        <MainGoal
        objective={goals[1]}
        />
        <MainGoal
        objective={goals[2]}
        />
           <Login/>
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
   
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>
 

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>
      <CourseGoal
      title='React'
      description='Aprender aprofundadamente o mundo do FE'
      />

      <div className="ticks"></div>
      <section id="spacer"></section>
  </>
  )
}

export default App;
