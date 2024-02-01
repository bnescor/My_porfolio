import React, { useContext } from "react";
import "../Style/contact.css";
import { Themecontext } from "../Context/Themecontext";
import { Idiomacontext } from "../Context/Idiomacontext";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from 'react-hot-toast';

const Contact = ({ referent, state }) => {
  const { theme } = useContext(Themecontext);
  const { Lenguacont } = useContext(Idiomacontext);
  const notify_phone = () => toast.success(Lenguacont.contact.phone);
  const notify_email = () => toast.success(Lenguacont.contact.email);
  return (
    <section ref={referent} className={`Contac ${theme}`}>
      <h2>{Lenguacont.contact.title}</h2>
      <footer>
        <div className="Phone">
          <CopyToClipboard text="3022856682">
            <i onClick={notify_phone} className="bx bx-phone"></i>
          </CopyToClipboard>
        </div>
        <div className="Email">
          <CopyToClipboard text="naziegonzalez5@gmail.com">
            <i onClick={notify_email} className="bx bxs-envelope"></i>
          </CopyToClipboard>
        </div>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />


      </footer>
    </section>
  );
};

export default Contact;
