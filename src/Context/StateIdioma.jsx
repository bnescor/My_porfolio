import React, { useState } from 'react'
import { Idiomacontext } from './Idiomacontext'

const StateIdioma = ({ children }) => {
    const en = {
        header: {
            logosubtitle: 'Developer',
            link: ['Profile', 'Projects', 'Skills', 'Contact']
        },
        about: {
            textInfo: 'Developer with a focus on creating intuitive and engaging digital experiences, combining aesthetics with functionality. I am always looking to learn and improve to offer efficient and high quality web solutions.',
            textbutton: 'download cv'
        },
        porfolio: 'PORTFOLIO',
        skills: 'SKILLS',
        contact: {
            title: 'CONTACT',
            email: <p>Copied <b>e-mail</b></p>,
            phone: <p>Copied <b>Phone number</b></p>
        }
    }
    const es = {
        header: {
            logosubtitle: 'Desarrollador',
            link: ['Perfil', 'Proyectos', 'Habilidades', 'Contacto']
        },
        about: {
            textInfo: 'Desarrollador con enfoque de crear experiencias digitales intuitivas y atractivas, combinando estética con funcionalidad. Siempre estoy buscando aprender y mejorar para ofrecer soluciones web eficientes y de alta calidad.',
            textbutton: 'Descargar cv'
        },
        porfolio: 'PROYECTOS',
        skills: 'HABILIDADES',
        contact: {
            title: 'CONTACTO',
            email: <p><b>Correo</b> Copiado</p>,
            phone: <p><b>teléfono</b> Copiado</p>
        }
    }
    const [Lenguacont, setLenguacont] = useState(es)
    const [auxi, setauxi] = useState(false)
    const changeLengua = (idioma) => {
        if (idioma === 'en') {
            setLenguacont(en)
        } else {
            setLenguacont(es)
        }
        setauxi(!auxi)
    }
    const data = { Lenguacont, changeLengua, auxi }
    return (<Idiomacontext.Provider value={data}>{children}</Idiomacontext.Provider>)
}

export default StateIdioma