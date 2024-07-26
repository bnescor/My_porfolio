import React, { useContext } from "react";
import "../Style/about.css";
import Perfil from "../img/foto-perfil.avif";
import { Idiomacontext } from "../Context/Idiomacontext";
import { Themecontext } from "../Context/Themecontext";

const About = ({ referent, state }) => {
  const { Lenguacont } = useContext(Idiomacontext);
  const { theme } = useContext(Themecontext)
  return (
    <section ref={referent} className={state ? `About on ${theme}` : "About"}>
      <article className="perfil">
        <img loading="lazy" className="Photo" src={Perfil} alt="" />
        <div>
          <p>{Lenguacont.about.textbutton}</p>
        </div>
      </article>
      <article className="Me">
        <h2>{Lenguacont.about.textHello}</h2>
        {Lenguacont.about.textInfo}
      </article>
      <article className="Contact">
        <a target="_blank" href="https://linkedin.com/in/brian-escorcia-gonzalez"><i className='bx bxl-linkedin' />LinkedIn</a>
        <a target="_blank" href="mailto:naziegonzalez5@gmail.com"><i class='bx bx-envelope' />{Lenguacont.about.tag_email}</a>
        <a target="_blank" href="https://github.com/bnescor?tab=repositories">
          <i className="bx bxl-github bx" /> {Lenguacont.about.tag_github}
        </a>
      </article>
    </section>
  );
};

export default About;
