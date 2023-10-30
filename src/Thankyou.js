import TypewriterComponent from "typewriter-effect"
 const Thankyou = () => {
    return (
        <div className="typewriter">
            <TypewriterComponent
            options={{
                strings: ["Thank you for", "Visiting my Portfolio"],
                autoStart: true,
                loop: true,
               
            }}
            />
        </div>
    )
}
export default Thankyou;