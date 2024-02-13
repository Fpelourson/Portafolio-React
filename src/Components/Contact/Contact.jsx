import "./contact.scss";
import { motion } from "framer-motion";

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
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView={"animate"}
    >
      <motion.h1 variants={variants}>Contacto</motion.h1>
      <motion.div className="container">
        <motion.div className="textContainer" variants={variants}>
          <motion.div className="item" variants={variants}>
            <button>WhatsApp</button>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <button>Email</button>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <button>Linkedin</button>
          </motion.div>
        </motion.div>
        <motion.div className="text">
          <p>
            Si quieres compartir ideas, colaborar, dar feedback o tenes una
            propuesta laboral, contáctame por alguno de estos medios y respondo
            a la brevedad.
          </p>
          <h3>¡Hasta Pronto!</h3>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
