import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"
import React from "react"

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "056e46d0-7c80-4070-9088-3d96af48139a"
);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
       setTimeout(() => {
        setResult("")
       }, 5000);
        
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>
                    Feel free to contact us by below. Your feedback question suggerstions will strive us
                    </p>
                <ul>
                    <li><img src={mail_icon} alt="" />contact@edusity.edu</li>
                    <li><img src={phone_icon} alt="" />(41) 3325-2456</li>
                    <li><img src={location_icon} alt="" />Plot no 131 Sector 27A <br />
                        Nigdi MH 
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" required/>
                    <label>Telephone</label>
                    <input type="tel" name="phone" placeholder="Telephone No" required/>
                    <label>Message</label>
                    <textarea name="message"  rows="6" placeholder="Write your message here" required></textarea>
                    <button type="submit" className="btn dark-btn">Submit Now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact