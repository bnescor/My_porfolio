import About from "./Components/About"
import Contac from "./Components/Contac"
import Header from "./Components/Header"
import Porfolio from "./Components/Porfolio"
import Skills from "./Components/Skills"
import useIntersection from "./Hook/useIntersection"

function App() {
  const [refernce4, state4] = useIntersection({
    threshold: 0.8,
  })
  const [refernce3, state3] = useIntersection({
    threshold: 0.4,
  },)
  const [refernce2, state2] = useIntersection({
    threshold: 0.3,
  },state3)
  const [refernce, state] = useIntersection({
    threshold: 0.2,
  },state2)
  return (
    <main className="App">
      <Header
        state={state}
        state2={state2}
        state3={state3}
        state4={state4}
      />
      <About
        refernce={refernce}
        state={state}
      />
      <Porfolio
        refernce={refernce2}
        state={state2} />
      <Skills
        refernce={refernce3}
        state={state3} />
      <Contac
        refernce={refernce4}
        state={state4} />
    </main>
  )
}

export default App
