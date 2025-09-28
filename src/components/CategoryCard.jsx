function CategoryCard({src, text}) {
    return (
        <div className="category-card margin-top-md">
           <div className="category-card_img-box">
                <img src={src} className="category-card_img" alt="Origene"/>
                <div className="subtext">
                    <p>{text}</p>
                    <a href="#"><img src="image/btn-rounded.png" /></a>
                </div>
           </div>
           <div className="category-card_text-box  margin-top-xs">
                <p>{text}</p>
           </div>
        </div>
    )
}

export default CategoryCard
