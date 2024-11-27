import { Outlet } from "react-router";

import { Navbar } from "../components/navbar";

export default function RootLayout() {
  return (
    <div className="h-screen">
      <Navbar />
      {/* children */}
      <Outlet />
    </div>
  );
}
