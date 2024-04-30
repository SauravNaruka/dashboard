export function DropDown({ label, options }) {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn rounded-btn">
        {label}
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
      >
        {options.map((option) => {
          return (
            <li key={option}>
              <a>{option}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
