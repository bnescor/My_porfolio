import React, { useContext } from "react";
import "../Style/about.css";
import useTypewriter from "../Hook/useTypewriter";
import Perfil from "../img/Perfil-removebg.png";
import Ware from "./Ware";
import { Idiomacontext } from "../Context/Idiomacontext";

const About = ({ referent, state }) => {
  const { Lenguacont } = useContext(Idiomacontext);
  const ResultText = useTypewriter();
  return (
    <main ref={referent} className={state ? "About on" : "About"}>
      <section className="About-main">
        <div className="perfil">
          <img className="Photo" src={Perfil} alt="" />
          <p>Brian Escorcia Gonzalez</p>
          <a target="_blank" href="https://github.com/bnescor?tab=repositories">
            <i className="bx bxl-github bx"></i>
          </a>
        </div>
        <article className="Me">
          <section className="Container_para">
            <p className="Ab">
              {ResultText}
              <p className="Cursor">I</p>
            </p>
          </section>
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
