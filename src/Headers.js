import React from "react";
import TypewriterComponent from "typewriter-effect";
import { SaveCV } from "./CV/SaveCV";
export const Headers = () => {


    const scrollToSection2 = () => {
        document.querySelector("#section2").scrollIntoView({
            behavior: "smooth"
        })
        };
        
        const scrollToSection3 = () => {
            document.querySelector("#section3").scrollIntoView({
                behavior: "smooth"
            })
        };
        const scrollToSection4 = () => {
            document.querySelector("#section4").scrollIntoView( {
                behavior: "smooth"
            })
        };
        const scrollToSection5 = () => {
            document.querySelector("#section5").scrollIntoView( {
                behavior: "smooth"
            })
        }

       //Convertir el texto de strings a H1, ya lo tengo maquetado en CSS
       
        return(
            <section className="main" id="section1">
                <div className="typewriter-container">
                <TypewriterComponent
                options={{
                    strings: ["Hello im jose", "Full Stack Developer"],
                    autoStart: true,
                    loop: true,
                }}
                />
                </div>
                <div className="buttons-container">
                <button className="Resume-button" onClick={SaveCV} download>Resume</button>
                <button className="Contact-Button" onClick={scrollToSection5}>Contact Me</button>
                </div>
            </section>
                
                
            
        )

    };

    
    
