import "./aboutMe.scss";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="background-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"></img>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <div className="container">
        <div className="textContainer">
          <h2>Soy Federico Pelourson</h2>
          <p>
            Desarrollador Frontend. Me encanta crear sitios web atractivos y
            funcionales, usando HTML5, CSS3, JavaScript y React, entre otras.
            También utilizo Github para colaborar con otros desarrolladores y
            organizar mis proyectos. Día a día me capacito en nuevas tecnologías
            y en mejorar el inglés, Soy muy comprometido en lo que hago. Entre
            mis habilidades blandas se destacan el trabajo en equipo y la
            comunicación lo que me ha permitido llevar mis proyectos de
            desarrollo Web a un nivel superior.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
