import { NavLink } from "react-router";

export function Navbar() {
  return (
    <div className="flex items-center justify-between p-3">
      <div>Logo</div>
      <div className="flex items-center gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/help">Help</NavLink>
      </div>
    </div>
  );
}
