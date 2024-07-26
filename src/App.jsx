import { useContext } from "react"
import About from "./Components/About"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Portfolio from "./Components/Porfolio"
import useIntersection from "./Hook/useIntersection"
import { Themecontext } from "./Context/Themecontext"
import Experience from "./Components/Experience"

function App() {
  const [referent_experience, state_experience_boto, state_experience_referent] = useIntersection({
    threshold: 0.3,
  },)
  const [referent_portfolio, state_portfolio_boto, state_portfolio_referent] = useIntersection({
    threshold: 0.2,
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
        state3={state_experience_boto}
      />
      <About
        referent={referent_about}
        state={state_about_referent}
      />
      <Experience
        referent={referent_experience}
        state={state_experience_referent} />
      <Portfolio
        referent={referent_portfolio}
        state={state_portfolio_referent} />
      <Footer />
    </main>
  )
}

export default App
