import { Navigate, NavLink, Outlet, useLocation } from "react-router";

export default function HelpLayout() {
  const location = useLocation();
  if (location.pathname === "/help") return <Navigate to="/help/contact" />;

  return (
    <div className="size-full">
      <div className="flex items-center justify-center gap-16 border-t-2 p-3">
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="faq">FAQ</NavLink>
      </div>

      <Outlet />
    </div>
  );
}
