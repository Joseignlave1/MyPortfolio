import { useRef } from "react"
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_7jo2dna", "template_x68spj5", form.current, "hn2rxd0LB3lCddGdy")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  };
    return (
        <section id="section5">
        <div className="contact-form">
            <h2 className="contact-text">
            Contact ME
            <span className="blue-line">
            </span> 
            </h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form">
                <label for="email">Your Email</label>
                <span className="span-email">
                    <input  id="email"autoComplete="off" required type="email" name="user_email"></input>
                </span>
                <label for="name">Your Name</label>
                <span className="span-name">
                    <input id="name" autoComplete="off" required type="text" name="user_name"></input>
                </span>
                <label for="message">Message</label>
                <span className="span-message">
                    <textarea  id="message" autoComplete="off" required name="message"></textarea> 
                </span> 
                <button className="send-button">
                <i class="fa fa-send-o" ></i>
                <span>Send Message </span>
                </button>          
            </div>
            </form>
        </div>  
        </section>
        
    )
}