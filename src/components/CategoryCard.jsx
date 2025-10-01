import { Link } from "react-router-dom"

function CategoryCard({src, text, linkDirection}) {
    return (
        <div className="category-card margin-top-md">
           <div className="category-card_img-box">
                <img src={src} className="category-card_img" alt="Origene"/>
                <div className="subtext">
                    <p>{text}</p>
                    <Link to={linkDirection}><img src="image/btn-rounded.png" /></Link>
                </div>
           </div>
           <div className="category-card_text-box  margin-top-xs">
                <p>{text}</p>
           </div>
        </div>
    )
}

export default CategoryCard
