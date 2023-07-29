import React, { useState } from 'react'
import { Idiomacontext } from './Idiomacontext'

const StateIdioma = ({ children }) => {
    const en = {
        header: {
            logosubtitle: 'Developer',
            link: ['Profile', 'Porfolio', 'Skills', 'Contact']
        },
        about: {
            textbutton: 'download cv'
        },
        porfolio: 'PORFOLIO',
        skills: 'SKILLS',
        contact: {
            title: 'CONTACT',
            email: 'E-mail',
            phone: 'Phone number'
        }
    }
    const es = {
        header: {
            logosubtitle: 'Desarrollador',
            link: ['Perfil', 'Portafolio', 'Habilidades', 'Contacto']
        },
        about: {
            textbutton: 'Descargar cv'
        },
        porfolio: 'PORTAFOLIO',
        skills: 'HABILIDADES',
        contact: {
            title: 'CONTACTO',
            email: 'Correo electrónico',
            phone: 'Número de teléfono'
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