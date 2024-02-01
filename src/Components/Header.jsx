import React, { useContext, useState } from 'react'
import "../Style/header.css"
import { Link } from 'react-scroll'
import Select from 'react-select'
import es from '../img/Esp.svg'
import en from '../img/Us.svg'
import { Themecontext } from '../Context/Themecontext'
import { Idiomacontext } from '../Context/Idiomacontext'
const optiones = [
  { label: <div className='conatiner-icono'> <img className='icono' src={es} alt="" /> es</div>, value: 'es' },
  { label: <div className='conatiner-icono'> <img className='icono' src={en} alt="" /> en</div>, value: 'en' }
]

const Header = ({ state, state2, state3, state4 }) => {
  const { theme, changeTheme } = useContext(Themecontext)
  const { Lenguacont, changeLengua } = useContext(Idiomacontext)
  const [load, setLoad] = useState(false)
  const menuchange = () => setLoad(!load)
  const change = ({ value }) => {
    changeLengua(value)
  }
  const Style_select = {
    control: (styles) => {
      return {
        ...styles,
        backgroundColor: theme === "dark" ? "#30504d" : "#669b94"
      }
    }, option: (styles, { isDisabled, isSelected, isFocused }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? undefined
          : theme === "dark" && isSelected ?
            "#30504d" :
            theme === "light" && isSelected ?
              "#669b94" :
              isFocused ?
                "#dcebe8" :
                undefined
      }
    }, singleValue: (styles) => {
      return {
        ...styles,
        color: "#dcebe8"
      }
    }, input: (base) => {
      return {
        ...base,
        color: "#dcebe8"
      }
    }
  }
  return (
    <header className={`Header-main ${theme}`}>
      <article className='Description'>
        <p>Brian Escorcia <br />
          {Lenguacont.header.logosubtitle} Frontend</p>
      </article>
      <article className='Botonera'>
        <ul className={load ? 'menu on' : 'menu off'}>
          <li>
            <Link className={state ? 'vincu on ' : 'vincu'} to='About' smooth={true} offset={-50} duration={700}>{Lenguacont.header.link[0]}</Link>
          </li>
          <li>
            <Link className={(state2 && !state) ? 'vincu on ' : 'vincu'} to='Porfolio' smooth={true} offset={-100} duration={700}>{Lenguacont.header.link[1]}</Link>
          </li>
          <li>
            <Link className={(state3 && !state2 && !state4) ? 'vincu on ' : 'vincu'} to='Skills' smooth={true} offset={-330} duration={700}>{Lenguacont.header.link[2]}</Link>
          </li>
          <li>
            <Link className={state4 ? 'vincu on ' : 'vincu'} to='Contac' smooth={true} offset={-50} duration={700}>{Lenguacont.header.link[3]}</Link>
          </li>
        </ul>
        <div onClick={menuchange} className={load ? 'close on' : 'close'}>
        </div>
        <button onClick={menuchange} className={load ? 'Sub_menu on' : 'Sub_menu off'}>
          <div></div>
          <div></div>
          <div></div>
        </button>
        <div className={load ? 'menu-option on' : 'menu-option off'}>
          <button onClick={changeTheme} className={`mode ${theme}`}>
            <i className='bx bxs-moon'></i>
            <i class='bx bxs-sun' ></i>
          </button>
          <Select
            defaultValue={optiones[0]}
            options={optiones}
            onChange={change}
            styles={Style_select}
          />
        </div>
      </article>
    </header>
  )
}

export default Header