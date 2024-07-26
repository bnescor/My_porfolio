import React, { useContext } from "react";
import "../Style/footer.css";
import { Idiomacontext } from "../Context/Idiomacontext";

const Footer = () => {
  const { Lenguacont } = useContext(Idiomacontext);
  return (
    <footer className='footer'>
      {Lenguacont.footer}
    </footer>
  );
};

export default Footer;
