function Overflowspread({ children }) {
  return (
    <>
      <div className="quality-spread">
        <div className="white-gradient"></div>
        <div class="marquee" aria-hidden="false">
          <div class="marquee__inner">
            <div class="marquee__item">{children}</div>
            <div class="marquee__item">{children}</div>
            <div class="marquee__item">{children}</div>
            <div class="marquee__item">{children}</div>

            <div class="marquee__item">{children}</div>
            <div class="marquee__item">{children}</div>
            <div class="marquee__item">{children}</div>
            <div class="marquee__item">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overflowspread;
