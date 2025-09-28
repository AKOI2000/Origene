import { Link } from "react-router-dom"

function Button({direction, children, styles}) {
    return (
        <Link to={direction} className={`btn ${styles}`}>{children}</Link>
    )
}

export default Button
