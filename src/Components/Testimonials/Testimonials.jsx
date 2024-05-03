
import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png"
import prev_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"
import { useRef } from "react"
const Testimonials = () => {

    const slider = useRef()

    let tx = 0

    const slideForward = () => {
        if (tx > -50) {
            tx -=25;
        }

        slider.current.style.transform =`translateX(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx +=25;
        }

        slider.current.style.transform =`translateX(${tx}%)`
    }


    return (
        <div className="testimonials">
            <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
            <img src={prev_icon} alt="" className="back-btn" onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Juli Chawla</h3>
                                    <span>Coimbatore</span>
                                </div>
                            </div>
                            <p>At University Educity, I met my second family. I appreciate all the opportunities and connections I have built here.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Akash Mishra</h3>
                                    <span>Noida</span>
                                </div>
                            </div>
                            <p>At University Educity, discover a vibrant and welcoming environment, full of opportunities for learning and personal growth. The teachers are passionate and dedicated, and the resources available are of first quality. I'm grateful to be part of this inspiring community</p>

                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Lota Mongeskar</h3>
                                    <span>Mumbai</span>
                                </div>
                            </div>
                            <p>My journey at University Educity has been a true transformation. The quality of teaching, the cultural diversity and the opportunities for community involvement made my experience unique and enriching. I am proud to be a part of this institution that values ​​academic development as much as personal development.</p>

                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Julius Caesar</h3>
                                    <span>Pune</span>
                                </div>
                            </div>
                            <p>Studying at University Educity was an incredible experience! I found dedicated professors, inspiring colleagues, and an engaging learning environment. This university not only prepared me for my career, but also helped me grow as a person. I am grateful to be part of this academic community. exceptional</p>

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
