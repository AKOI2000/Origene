import AnimateOnScroll from "../components/AnimateOnScroll";
import Button from "../components/Button";


function Hero() {
    return (
        <div id="hero">
            
            <div className="hero-box">
                <AnimateOnScroll animation="zoomIn"><h1 className="hero-text">MASTERS OF THE CRAFT</h1></AnimateOnScroll>
                {/* <a href="#" className="btn btn-white margin-top-sm">SHOP NOW</a> */}
                <Button direction={`#`} styles={`btn-white margin-top-sm`}>Shop now</Button>
            </div>
        </div>
    )
}

export default Hero
