import ExperienceCard from "../components/ExperienceCard"
import SectionHeading from "../components/SectionHeading"
import { faBars, faBagShopping, faMagnifyingGlass, faUser, faMoneyBills, faTruck, faCircleQuestion, faX } from '@fortawesome/free-solid-svg-icons';


function SectionExperience() {
    

    return (
        <div id="section-experience">
            <SectionHeading sectionHeadingMain={'A SEAMLESS EXPERIENCE'} sectionHeadingSub={'From checkout to delivery, every detail is handled with care.'}/>

            <div className="container-grid">
                <div className="grid grid-3-by-1 column-gap-3">
                    <ExperienceCard headingText={'Secure Payments'} paragraphText={'Your payments are always protected so you can check-out with confidence'} iconType={'./image/icons/money.svg'} className={true}/>
                    <ExperienceCard headingText={'Worldwide Shipping'} paragraphText={'No borders, we deliver anywhere you are in the world'} iconType={'./image/icons/truck.svg'} className={true}/>
                    <ExperienceCard paragraphText={'Get round the clock support from our dedicated team'} headingText={'24/7 Support'} iconType={'./image/icons/question.svg'} className={false}/>
                </div>
            </div>
        </div>
    )
}

export default SectionExperience
