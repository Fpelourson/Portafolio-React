import "./aboutMe.scss";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <h1>Sobre mi</h1>
      <div className="container">
        <div className="imgContainer">
          <img src="../public/fp.jpg" />
        </div>
        <div className="textContainer">
          <h2>Soy Federico Pelourson</h2>
          <p>
            Desarrollador Frontend. Me encanta crear sitios web atractivos y
            funcionales, usando HTML5, CSS3, JavaScript y React, entre otras. Día a día me capacito en nuevas tecnologías y en
            mejorar el Inglés, soy muy comprometido en lo que hago y me gustaría
            obtener mi Primer empleo en rubro de IT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
