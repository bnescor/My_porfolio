import { useContext } from "react"
import About from "./Components/About"
import Contact from "./Components/Contac"
import Header from "./Components/Header"
import Portfolio from "./Components/Porfolio"
import Skills from "./Components/Skills"
import useIntersection from "./Hook/useIntersection"
import { Themecontext } from "./Context/Themecontext"

function App() {
  const [referent_contact, state_contact_boto, state_contact_referent] = useIntersection({
    threshold: 0.8,
  })
  const [referent_skill, state_skill_boto, state_skill_referent] = useIntersection({
    threshold: 0.4,
  },)
  const [referent_portfolio, state_portfolio_boto, state_portfolio_referent] = useIntersection({
    threshold: 0.3,
  })
  const [referent_about, state_about_boto, state_about_referent] = useIntersection({
    threshold: 0.2,
  })
  const { theme } = useContext(Themecontext)

  return (
    <main className={`App ${theme}`}>
      <Header
        state={state_about_boto}
        state2={state_portfolio_boto}
        state3={state_skill_boto}
        state4={state_contact_boto}
      />
      <About
        referent={referent_about}
        state={state_about_referent}
      />
      <Portfolio
        referent={referent_portfolio}
        state={state_portfolio_referent} />
      <Skills
        referent={referent_skill}
        state={state_skill_referent} />
      <Contact
        referent={referent_contact}
        state={state_contact_referent} />
    </main>
  )
}

export default App
