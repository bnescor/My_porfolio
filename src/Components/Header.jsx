import React, { useState } from 'react'
import "../Style/header.css"
import { Link } from 'react-scroll'

const Header = ({ state, state2, state3, state4 }) => {
  const [load, setLoad] = useState(false)
  const menuchange = () => setLoad(!load)
  return (
    <header className='Header-main'>

      <article className='Description'>
        <p>Brian Escorcia <br />
          Developer Frontend</p>
      </article>
      <div className='Botonera'>
        <ul className={load ? 'menu on' : 'menu off'}>
          <li>
            <Link className={state ? 'vincu on' : 'vincu'} to='About' smooth={true} offset={-50} duration={700}>About</Link>
          </li>
          <li>
            <Link className={(state2 && !state) ? 'vincu on' : 'vincu'} to='Porfolio' smooth={true} offset={-100} duration={700}>Porfolio</Link>
          </li>
          <li>
            <Link className={(state3 && !state2 && !state4 )? 'vincu on' : 'vincu'} to='Skills' smooth={true} offset={-330} duration={700}>Skills</Link>
          </li>
          <li>
            <Link className={state4 ? 'vincu on' : 'vincu'} to='Contac' smooth={true} offset={-50} duration={700}>Contac</Link>
          </li>
        </ul>
        <div onClick={menuchange} className={load ? 'close on' : 'close'}></div>
        <button onClick={menuchange} className={load ? 'Sub_menu on' : 'Sub_menu off'}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </header>
  )
}

export default Header