function ContactCard({span, header, img, workHours, workDays, linkAction, linkText}) {
    return (
        <>
          {!span ? 
          (
            <div className="contact-card">
                <div className="contact-card_icon-box">
                    <img src={img} />
                </div>
                <h3 className="contact-card_header">{header}</h3>
                <div className="contact-card-body">
                    <a href={linkAction} className="contact-card-link" target="_blank">{linkText}</a>
                    <p className="contact-card_work-days">{workDays}</p>
                    <p className="contact-card_work-hours">{workHours}</p>
                </div>
            </div>  
          ) : (
            <div className="contact-card">
                <div className="contact-card_icon-box">
                    <img src={img}/>
                </div>
                <h3 className="contact-card_header">{header}</h3>
                <div className="contact-card-body">
                    <span>{span} <a href={linkAction} className="contact-card-link" target="_blank">{linkText}</a></span>
                    <p className="contact-card_work-days">{workDays}</p>
                    <p className="contact-card_work-hours">{workHours}</p>
                </div>
            </div>  
          )}


        </>
    )
}

export default ContactCard
