import React, { useContext, useState } from 'react'
import "../Style/header.css"
import { Link } from 'react-scroll'
import Select from 'react-select'
import es from '../img/Esp.svg'
import en from '../img/Us.svg'
import { Themecontext } from '../Context/Themecontext'
import { Idiomacontext } from '../Context/Idiomacontext'
const optiones = [
  { label: <div className='conatiner-icono'> <img loading="lazy" className='icono' src={es} alt="" /></div>, value: 'es' },
  { label: <div className='conatiner-icono'> <img loading="lazy" className='icono' src={en} alt="" /></div>, value: 'en' }
]

const Header = ({ state, state2, state3 }) => {
  const { theme, changeTheme } = useContext(Themecontext)
  const { Lenguacont, changeLengua } = useContext(Idiomacontext)
  const [load, setLoad] = useState(false)
  const menuchange = () => setLoad(!load)
  const change = ({ value }) => {
    changeLengua(value)
  }
  let condition = [state && !state3, state2 && !state3, state3]
  return (
    <header className={`Header-main ${theme}`}>
      <article className='Description'>
        <p>Brian Escorcia <br />
          {Lenguacont.header.logosubtitle} Frontend</p>
        <button onClick={menuchange} className={load ? 'Sub_menu on' : 'Sub_menu off'}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </article>
      <article className={load ? 'Botonera on' : 'Botonera off'}>
        <ul className='menu'>
          {Lenguacont.header.link.map((data, index) => (
            <li key={data.name}>
              <Link className={condition[index] ? 'vincu on ' : 'vincu'} to={data.to} smooth={true} offset={-50} duration={700}>{data.name}</Link>
            </li>
          ))}
        </ul>
        <div className='menu-option'>
          <button onClick={changeTheme} className={`mode ${theme}`}>
            <i className='bx bxs-moon'></i>
            <i className='bx bxs-sun' ></i>
          </button>
          <Select
            defaultValue={optiones[0]}
            isSearchable={false}
            options={optiones}
            onChange={change}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: undefined,
                primary50: undefined,
                neutral0: '#201e43',
                primary: '#6b728080',
              },
            })}
          />
        </div>
      </article>
      <div onClick={menuchange} className={load ? 'close on' : 'close'}>
      </div>
    </header>
  )
}

export default Header