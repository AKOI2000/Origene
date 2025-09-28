function Button({direction, children, styles}) {
    return (
        <a href={direction} className={`btn ${styles}`}>{children}</a>
    )
}

export default Button
