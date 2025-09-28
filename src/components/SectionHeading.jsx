function SectionHeading({sectionHeadingMain, sectionHeadingSub}) {
    return (
        <div className="section-heading">
            <h3 className="section-heading-main">
                {sectionHeadingMain}
            </h3>

            <p className="section-heading-sub margin-top-xxs">{sectionHeadingSub}</p>
        </div>
    )
}

export default SectionHeading
