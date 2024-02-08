import "./contact.scss";
import { motion } from "framer-motion"

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView={"animate"}>
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Contacto</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Email</h2>
          <span>fede_pelourson@hotmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Ubicación</h2>
          <span>Rosario, Argentina</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Telefono</h2>
          <span>+5492477674315</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Nombre" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Mensaje" />
          <button>Enviar</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
