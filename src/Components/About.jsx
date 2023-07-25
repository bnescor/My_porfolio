import React from 'react'
import "../Style/about.css"
import useTypewriter from '../Hook/useTypewriter';
import Perfil from "../img/Perfil-removebg.png"
import Ware from './Ware';

const About = ({refernce,state}) => {
  const text = "Desarrollador web con sólidos conocimientos en HTML, CSS, JavaScript y React. Mi enfoque se centra en crear experiencias digitales intuitivas y atractivas, combinando la estética con la funcionalidad. Siempre busco aprender y mejorar para ofrecer soluciones web de alta calidad y eficiencia.";
  const ResultText = useTypewriter(text)
  return (
    <main ref={refernce} className={ state? 'About on':'About'}>
      <section className='About-main'>
        <div className='perfil'>
          <img className='Photo' src={Perfil} alt="" />
          <h2>Brian Escorcia Gonzalez</h2>
          <a target='_blank' href="https://github.com/bnescor?tab=repositories"> <i className='bx bxl-github'></i></a>
        </div>
        <article className='Me'>
          <p className='Ab'>{ResultText}<p className="Cursor">I</p>
          </p>
          <button className='download'>Download CV <i className='bx bxs-download'></i></button>
        </article>
      </section>
      <Ware />
    </main>

  )
}

export default About
