import React, { useContext, useState } from 'react'
import "../Style/portfolio.css"
import Clima from "../img/Clima.png"
import Rick_Morti from "../img/Rick and Morty.png"
import Random from "../img/Card random.png"
import { Idiomacontext } from '../Context/Idiomacontext'
import { Swiper, SwiperSlide } from 'swiper/react';

const Portfolio = ({ referent, state }) => {
  let My_datos = [{
    name: "Clima Web",
    imagen: Clima,
    web: "https://weatherreport789.netlify.app",
    reposi: "https://github.com/bnescor/Test2.git"
  },
  {
    name: "Rick and Morty",
    imagen: Rick_Morti,
    web: "https://cardrickandmorty.netlify.app",
    reposi: "https://github.com/bnescor/RickandMorty.git"
  },
  {
    name: "Card Random",
    imagen: Random,
    web: "https://randocard.netlify.app",
    reposi: "https://github.com/bnescor/Card-Rando.git"
  }
  ]
  const [load, setload] = useState([
    false,
    false,
    false
  ])
  const cambio = (index) => {
    const newLoad = load.map((v, i) => {
      if (i == index) {
        return !v
      } else {
        return v
      }
    }
    )
    setload(newLoad)
  }
  const { Lenguacont } = useContext(Idiomacontext)
  return (
    <section ref={referent} className={state ? 'Porfolio on' : 'Porfolio'}>
      <h2>{Lenguacont.porfolio}</h2>
      <article className='Work'>
        {My_datos?.map((user, index) => (
          <article key={index} className={load[index] ? 'Work_1 on' : 'Work_1'}>
            <div className='zoom'>
              <img className='img_work' src={user.imagen} alt="" />
            </div>
            <button onClick={() => {
              cambio(index)
            }} className={load[index] ? 'menuf on' : 'menuf off'}>
              <i className={load[index] ? 'one bx bx-x' : ' one bx bx-menu'}></i>
              <i className='two bx bxs-down-arrow' ></i>
            </button>
            <div className={load[index] ? 'Conten on' : 'Conten'}>
              <div className='Hability-pag'>
                <h3>{user.name}</h3>
                <div className='Hability-group'>
                  <div className="Hability">CSS</div>
                  <div className="Hability">Javascript</div>
                  <div className="Hability">React</div>
                </div>
                <i onClick={() => {
                  cambio(index)
                }} className='three bx bxs-up-arrow'></i>
              </div>
              <div className='Extencion'>
                <a target='_blank' href={user.web}><i className='bx bx-link-external bx-tada' ></i></a>
                <a target='_blank' href={user.reposi}> <i className='bx bxl-github bx-tada'></i></a>
              </div>
            </div>
          </article>
        ))}
      </article>
    </section >
  )
}

export default Portfolio