import { Link } from "react-router-dom";

function FeatureCard({ featureHeader, buttonText, paragraphText, substringText }) {
  return (
    <>
      {!paragraphText ? (
        <div className="features features-1">
          <div className="text-box">
            <h5 className="heading-5 margin-bottom-sm">{featureHeader}</h5>
            <Link to="/Origene/shop" className="btn-md btn-white">
              {buttonText}
            </Link>
          </div>
        </div>
      ) : (
        <Link to="/Origene/about-us" className="features features-2">
          <div className="black-box"></div>
            <div className="text-box">
              <h5 className="heading-5 margin-bottom-xsl">{featureHeader}</h5>
              <div className="subtext">
                <p className="paragraph">{paragraphText}</p>
                <p className="substringText">{substringText}</p>
                <Link to="/Origene/about-us" className="margin-left-sm">
                  <img src="./image/btn-rounded.png" />
                </Link>
                {/* btn-rounded btn-white  */}
              </div>
            </div>
        </Link>
      )}
    </>
  );
}

export default FeatureCard;
