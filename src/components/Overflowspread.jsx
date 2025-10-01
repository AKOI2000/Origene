function Overflowspread({ children }) {
  return (
    <>
      <div className="quality-spread">
        <div className="white-gradient"></div>
        <div className="marquee" aria-hidden="false">
          <div className="marquee__inner">
            <div className="marquee__item">{children}</div>
            <div className="marquee__item">{children}</div>
            <div className="marquee__item">{children}</div>
            <div className="marquee__item">{children}</div>

            <div className="marquee__item">{children}</div>
            <div className="marquee__item">{children}</div>
            <div className="marquee__item">{children}</div>
            <div className="marquee__item">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overflowspread;
