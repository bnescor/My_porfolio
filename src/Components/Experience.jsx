import React, { useContext } from 'react'
import '../Style/experience.css'
import { Themecontext } from '../Context/Themecontext'
import { Idiomacontext } from '../Context/Idiomacontext'
const Experience = ({ referent, state }) => {
  const { theme } = useContext(Themecontext)
  const { Lenguacont } = useContext(Idiomacontext)
  return (
    <section ref={referent} className={state ? `Experience on ${theme}` : `Experience ${theme}`}>
      <h2>{Lenguacont.experience.title}</h2>
      <article className='Puesto'>
        <div className='Information_Puesto'>
          <h3>{Lenguacont.experience.job}</h3>
          <p>{Lenguacont.experience.datejob}</p>
        </div>
        <div className='Description_Puesto'>
          <p>
           {Lenguacont.experience.descrijob}
          </p>
        </div>
      </article>
    </section>
  )
}

export default Experience