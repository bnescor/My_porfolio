import React, { useContext } from 'react'
import "../Style/contact.css"
import { Themecontext } from '../Context/Themecontext'
import { Idiomacontext } from '../Context/Idiomacontext'

const Contac = ({ refernce, state }) => {
  const { theme } = useContext(Themecontext)
  const { Lenguacont } = useContext(Idiomacontext)
  return (
    <section ref={refernce} className={`Contac ${theme}`}>
      <h2>{Lenguacont.contact.title}</h2>
      <footer>
        <div className='Phone'>
          <i className='bx bx-phone'></i>
          <h4>{Lenguacont.contact.phone}</h4>
          <p>3022856682</p>
        </div>
        <div className='Email'>
          <i className='bx bxs-envelope' ></i>
          <h4>{Lenguacont.contact.email}</h4>
          <p>Naziegonzalez5@gmail.com</p>
        </div>
      </footer>
    </section>
  )
}

export default Contac