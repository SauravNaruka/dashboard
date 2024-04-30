export function CardDropDown({ label, children }) {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn rounded-btn">
        {label}
      </div>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] card card-compact w-64 p-2 shadow"
      >
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}
