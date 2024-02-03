import React, { useContext } from "react";
import "../Style/about.css";
import Perfil from "../img/Perfil.png";
import Ware from "./Ware";
import { Idiomacontext } from "../Context/Idiomacontext";

const About = ({ referent, state }) => {
  const { Lenguacont } = useContext(Idiomacontext);
  return (
    <main ref={referent} className={state ? "About on" : "About"}>
      <section className="About-main">
        <div className="perfil">
          <img loading="lazy" className="Photo" src={Perfil} alt="" />
          <p>Brian Escorcia Gonzalez</p>
          <a target="_blank" href="https://github.com/bnescor?tab=repositories">
            <i className="bx bxl-github bx"></i>
          </a>
        </div>
        <article className="Me">
          <p className="Ab">
            {Lenguacont.about.textInfo}
          </p>
          <a
            className="download"
            href="https://drive.google.com/file/d/1IAPY-dkMJuEm1YdXq1xg9XIDGVC1Njo8/view?usp=sharing"
            target="_blank"
          >
            {Lenguacont.about.textbutton}
            <i className="bx bxs-download"></i>
          </a>
        </article>
      </section>
      <Ware />
    </main>
  );
};

export default About;
