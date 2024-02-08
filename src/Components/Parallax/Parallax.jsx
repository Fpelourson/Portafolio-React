import "./parallax.scss"
import {motion} from "framer-motion"

const variants = {
  scrollButton:{
    opacity:0,
    y: 10,
    transition:{
      duration:2,
      repeat: Infinity
    }
  }
}

const Parallax = () => {
  return (
    <div className='parallax'>
      <span>Proyectos</span>
      <motion.img variants={variants} animate='scrollButton' src="./scroll.png"/>
    </div>
  )
}

export default Parallax
