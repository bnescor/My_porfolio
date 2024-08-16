import React, { useState } from 'react'
import { Idiomacontext } from './Idiomacontext'
import proyecto1 from '../img/Proyecto1.webp'
import proyecto2 from '../img/Proyecto2.webp'
import proyecto3 from '../img/Proyecto3.webp'

const StateIdioma = ({ children }) => {
    const en = {
        header: {
            logosubtitle: 'Developer',
            link: [
                { name: 'Profile', to: 'About' },
                { name: 'Projects', to: 'Porfolio' },
                { name: 'Experience', to: 'Experience' }
            ]
        },
        about: {
            textInfo: <p>
                Junior <b>frontend developer</b>, interested in creating <b>web applications</b>. Committed to <b>continuous learning</b>.
                <b>FullStack Developer</b>, passionate about creating <b>web applications</b>. Committed to continuous learning and development in both <b>frontend and backend</b>, to provide comprehensive and high quality solutions.
            </p>,
            textHello: "Hi, I'm Brian Escorcia",
            textbutton: 'Available for work',
            tag_email: 'Contact me',
            tag_github: 'Repository'
        },
        porfolio: {
            litle: 'Projects', projects: [
                {
                    name: 'EcoSocial',
                    description: 'It is a social network that allows users to register, log in, publish and connect with other users. It focuses on providing an engaging user experience with features that encourage social interaction and content creation.',
                    preview: 'https://socialv01.netlify.app/#/',
                    code: 'https://github.com/JesusVergara89/Social',
                    img: proyecto1,
                    state: true
                },
                {
                    name: 'Unibarranquilla Newspaper',
                    description: 'It is an online news portal that provides updated information on various topics relevant to the university community of Barranquilla and its surroundings.',
                    preview: 'https://unibarranquilla-newspaper.netlify.app/#/',
                    code: 'https://github.com/JesusVergara89/unibarranquillanews',
                    img: proyecto2,
                    state: true
                },
                {
                    name: 'Weather report',
                    description: 'It is a website that provides accurate and timely weather reports, from the current GPS location of the device. It provides weather information, including forecasts for the week.',
                    preview: 'https://weatherreport789.netlify.app/#/',
                    code: 'https://github.com/bnescor/Weather_report',
                    img: proyecto3,
                    state: false
                }
            ]
        },
        experience: { title: 'Work experience', job: 'Freelance', datejob: 'Currently...', descrijob: 'I have worked on projects ranging from small informative pages to more complex web applications, always ensuring a clean design and an intuitive user experience, integrating APIs and database management such as MySQL and Firabase.' },
        footer: <p>© 2024 All rights reserved. Design inspired by <a href="https://midudev.com" target="_blank">midudev</a></p>
    }
    const es = {
        header: {
            logosubtitle: 'Desarrollador',
            link: [
                { name: 'Perfil', to: 'About' },
                { name: 'Proyectos', to: 'Porfolio' },
                { name: 'Experiencia', to: 'Experience' }
            ]
        },
        about: {
            textInfo: <p>
                <b>Desarrollador fullStack</b>, apasionado por la creación de <b>aplicaciones web</b>. Comprometido con el aprendizaje continuo y con el desarrollo tanto en <b>frontend como en backend,</b> para ofrecer soluciones integrales y de alta calidad.
            </p>,
            textHello: "Hola, Soy Brian Escorcia",
            textbutton: 'Disponible para trabajar',
            tag_email: 'Contáctame',
            tag_github: 'Repositorio'
        },
        porfolio: {
            litle: 'Proyectos', projects: [
                {
                    name: 'EcoSocial',
                    description: 'Es una rede social que permite a los usuario registrarse, iniciar sesión, publicar y conectar con otros usuario. Se centra en ofrecer una experiencia de usuario atractiva con funciones que fomentan la interacción social y la creación de contenido.',
                    preview: 'https://socialv01.netlify.app/#/',
                    code: 'https://github.com/JesusVergara89/Social',
                    img: proyecto1,
                    state: true
                },
                {
                    name: 'Unibarranquilla Newspaper',
                    description: 'Es un portal de noticias en línea que ofrece información actualizada sobre diversos temas relevantes para la comunidad universitaria Barranquilla y sus alrededores.',
                    preview: 'https://unibarranquilla-newspaper.netlify.app/#/',
                    code: 'https://github.com/JesusVergara89/unibarranquillanews',
                    img: proyecto2,
                    state: true
                },
                {
                    name: 'Weather report',
                    description: 'Es un sitio web que ofrece informes meteorológicos precisos y puntuales, de la ubicación actual del GPS del dispositivo. Proporciona información meteorológica, incluido los pronostico de la semana.',
                    preview: 'https://weatherreport789.netlify.app/#/',
                    code: 'https://github.com/bnescor/Weather_report',
                    img: proyecto3,
                    state: false
                }
            ]
        },
        experience: { title: 'Experiencia laboral', job: 'Freelance', datejob: 'Actualmente...', descrijob: 'He trabajado en proyectos que van desde pequeñas páginas informativas hasta aplicaciones web más complejas, asegurando siempre un diseño limpio y una experiencia de usuario intuitiva. integrando APIs y manejo de bases de datos como MySQL y Firabase.' },
        footer: <p>© 2024 Todos los derechos reservados. Diseño inspirado por <a href="https://midudev.com" target="_blank">midudev</a></p>
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