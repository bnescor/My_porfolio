import React, { useContext, useState } from 'react'
import "../Style/skills.css"
import Html from "../img/html5.png"
import Css from "../img/css.png"
import react from "../img/react.png"
import Javascript from "../img/javascrip.png"
import { Idiomacontext } from '../Context/Idiomacontext'
import { Themecontext } from '../Context/Themecontext'
const Skills = ({ refernce, state }) => {
  const [CurrentIndex, setCurrentIndex] = useState(false)
  const datos_skill = [
    {
      name: 'Javascript',
      imagen: Javascript
    },
    {
      name: 'HTML',
      imagen: Html
    },
    {
      name: 'CSS',
      imagen: Css
    },
    {
      name: 'REACT',
      imagen: react
    }
  ]
  const { Lenguacont } = useContext(Idiomacontext)
  const { theme } = useContext(Themecontext)
  return (
    <main ref={refernce} className='Skills'>
      <h2>{Lenguacont.skills}</h2>
      <div className={`sub_container ${theme}`}>
        <section className={CurrentIndex ? 'Skills-main motionR' : 'Skills-main motionL'}>
          {datos_skill.map((user, index) => (
            <article key={index} className={state ? `Element on ${theme}`
              : 'Element'}>
              <h3>{user.name}</h3>
              <img className='img_skill' src={user.imagen} alt="" />
            </article>
          ))
          }
        </section>
        <div className='front'>
          <i onClick={() => setCurrentIndex(!CurrentIndex)} className='bx bx-chevron-left'></i>
          <i onClick={() => setCurrentIndex(!CurrentIndex)} className='bx bx-chevron-right' ></i>
        </div>
      </div>
      <div className={`botton ${theme}`}>
        <div className={!CurrentIndex ? 'here on' : 'here off'}></div>
        <div className={CurrentIndex ? 'here on' : 'here off'}></div>
      </div>
    </main >

  )
}

export default Skills