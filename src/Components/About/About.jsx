import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"


const About = ({setPlayState}) => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className="about-img" />
            <img src={play_icon} alt="" className="play-icon" onClick={() => setPlayState(true)}/>
        </div>
        <div className="about-right">
            <h3>About A University</h3>
            <h2>Exploring Pathways to Academic Success and Beyond</h2>
            <p>At our university, we are committed to offering an exceptional educational experience that prepares students to face the challenges of the modern world. With a diverse community, a wide range of academic programs and cutting-edge facilities, our institution provides a stimulating environment for learning, research and personal growth.</p>
            <p>Explore our courses, get to know our professors and discover the countless opportunities we have to offer. Join us and be part of an educational journey that goes beyond conventional limits.</p>
        </div>
    </div>
  )
}

export default About