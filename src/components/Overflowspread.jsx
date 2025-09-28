function Overflowspread({children}) {
  return (
    <div className="quality-spread">
      <div className="white-gradient"></div>
      <div className="flex-container">
        <div className="flex-items">{children}</div>
        <div className="flex-items">{children}</div>
        <div className="flex-items">{children}</div>
        <div className="flex-items">{children}</div>
        <div className="flex-items">{children}</div>
      </div>
    </div>
  );
}

export default Overflowspread;
