import React from 'react'
import "../Style/contact.css"

const Contac = ({refernce,state}) => {
  return (
    <section ref={refernce} className='Contac'>
      <h2>CONTACT</h2>
      <footer>
        <div className='Phone'>
          <i className='bx bx-phone'></i>
          <h4>Numero de Telefono</h4>
          <p>3022856682</p>
        </div>
        <div className='Email'>
          <i className='bx bxs-envelope' ></i>
          <h4>Correo Electronico</h4>
          <p>Naziegonzalez5@gmail.com</p>
        </div>
      </footer>
    </section>
  )
}

export default Contac