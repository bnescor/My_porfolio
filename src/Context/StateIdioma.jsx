import React, { useState } from 'react'
import { Idiomacontext } from './Idiomacontext'

const StateIdioma = ({ children }) => {
    const en = {
        header: {
            logosubtitle: 'Developer',
            link: ['Profile', 'Projects', 'Skills', 'Contact']
        },
        about: {
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
            textbutton: 'Descargar cv'
        },
        porfolio: 'PROYECTO',
        skills: 'HABILIDADES',
        contact: {
            title: 'CONTACTO',
            email: <p><b>Correo</b>Copiado</p>,
            phone: <p><b>teléfono</b>Copiado</p>
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