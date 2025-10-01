import AnimateOnScroll from "../components/AnimateOnScroll";
import Button from "../components/Button";


function Hero() {
    return (
        <div id="hero">
            
            <div className="hero-box">
                <h1 className="hero-text">MASTERS <br></br> OF THE CRAFT</h1>
                {/* <a href="#" className="btn btn-white margin-top-sm">SHOP NOW</a> */}
                <Button direction={`/shop`} styles={`btn-white margin-top-sm`}>Shop now</Button>
            </div>
        </div>
    )
}

export default Hero
