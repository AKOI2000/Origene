import { Link } from "react-router-dom";

function FeatureCard({featureHeader, buttonText, paragraphText}) {
  return (
    <>
     {!paragraphText ? 
      (
      <div className="features features-1">
        <div className="text-box">
          <h5 className="heading-5 margin-bottom-sm">{featureHeader}</h5>
          <a href="#" className="btn-md btn-white">
            {buttonText}
          </a>
        </div>
      </div>
      ) : 
      (
        <div className="features features-2">
          <div className="text-box">
              <h5 className="heading-5 margin-bottom-xsl">{featureHeader}</h5>
              <div className="subtext">
              <p>{paragraphText}</p>
              <Link to="/Origene/about-us" className="margin-left-sm"><img src="./image/btn-rounded.png" /></Link>
              {/* btn-rounded btn-white  */}
              </div>
          </div>
        </div>
      )
     
    
    
    }
    </>
  );
}

export default FeatureCard;
