import { useRef } from "react";
import "./portafolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Ecommerce",
    img: "../public/captura.png",
    desc: "Sitio web creado con React Vite, utilizando la libreria de Chakra UI y enviando los datos a Firebase para completar la compra",
    rut: "https://dev-computacion.vercel.app/",
    git: "https://github.com/Fpelourson/React-Coderhouse",
  },
  {
    id: 2,
    title: "Saber es clave",
    img: "../public/saber.png",
    desc: "Es un juego de preguntas y respuetas, utilizando JavaScrip y CSS",
    rut: "https://saber-es-clave.netlify.app/",
    git: "https://github.com/Fpelourson/Coderhouse",
  },
  {
    id: 3,
    title: "Clon Spotify",
    img: "../public/a.png",
    desc: "Clon Spotify realizado solo con HTML y CSS",
    rut: "https://spotify-clon-byfederico.netlify.app/",
    git: "https://github.com/Fpelourson/Clon-Spotify",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const gitClick = ()=>{
    window.open(item.git, '_blank')
    }

  const handleClick = ()=>{
    window.open(item.rut, '_blank')
    }
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div>
              <button className="demo" onClick={handleClick}>Ver Demo</button>
              <button className="git" onClick={gitClick}><img src="../public/git.png"></img></button>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portafolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portafolio" ref={ref}>
      <div className="progress">
        <h1>Terminado</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portafolio;
