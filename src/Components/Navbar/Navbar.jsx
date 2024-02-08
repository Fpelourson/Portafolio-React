import Sidebar from "../Sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          <a href="https://github.com/Fpelourson" target="blank">
            <img src="/public/git.png"></img>
          </a>
          <a href="https://www.linkedin.com/in/federico-pelourson/" target="blank">
            <img src="/public/linkedin.png"></img>
          </a>
          <a href="https://www.instagram.com/fedepelourson/" target="blank">
            <img src="../public/instagram.jpg"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
