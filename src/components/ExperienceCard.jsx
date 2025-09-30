import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ExperienceCard({headingText, paragraphText, iconType, className}) {
    return (
        <div className="experience-card margin-top-md">
            <div className={`img-box ${className ? "icon-box" : ""}`}>
                <img src={iconType} />
            </div>
            <div className='experience-text margin-top-xs'>
                <h4 className='margin-bottom-xs'>{headingText}</h4>
                <p>{paragraphText}</p>
            </div>
        </div>
    )
}

export default ExperienceCard
