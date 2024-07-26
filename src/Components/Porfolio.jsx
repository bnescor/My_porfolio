import React, { useContext } from 'react'
import "../Style/portfolio.css"
import { Idiomacontext } from '../Context/Idiomacontext'
import react from '../img/react.svg'
import firebase from '../img/firebase.svg'
import { Themecontext } from '../Context/Themecontext'

const Portfolio = ({ referent, state }) => {
  const { Lenguacont } = useContext(Idiomacontext)
  const { theme } = useContext(Themecontext)
  return (
    <section ref={referent} className={state ? `Porfolio on ${theme}` : `Porfolio ${theme}`}>
      <h2>{Lenguacont.porfolio.litle}</h2>
      {Lenguacont.porfolio.projects.map(data => (
        <article className='Work' key={data.name}>
          <img src={data.img} />
          <article className='Description_work'>
            <h3>{data.name}</h3>
            <div className='Tecnologia'>
              <p className='React'> <img src={react} alt="icono React" />React</p>
              {data.state && <p className='Firebase'> <img src={firebase} alt="icono Firebase" />Firebases</p>}
            </div>
            <p className='description_job'>{data.description}</p>
            <div className='Deploy'>
              <a target='_blank' href={data.preview}>
                <i class='bx bx-link' />
                Preview
              </a>
              <a target='_blank' href={data.code}>
                <i class='bx bxl-github' />
                Code
              </a>
            </div>
          </article>
        </article>
      ))
      }
    </section >
  )
}

export default Portfolio