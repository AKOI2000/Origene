import FeatureCard from "../components/FeatureCard";

function SectionFeatures() {

  return (
    <div id="section-features">
      <div className="grid grid-2-by-1 column-gap-8 feature-box">
        <FeatureCard featureHeader={'See all items'} buttonText={'Start shopping'}/>
        <FeatureCard featureHeader={'The Origene Story'} paragraphText={'The story of brothers, Adewale Hassan and Oluwatobi Hassan and how they built Origene fashion as first choice option for fashion-forward African men...'} />
      </div>
    </div>
  );
}

export default SectionFeatures;

