import { Outlet } from "react-router";

import { Navbar } from "../components/navbar";

export default function RootLayout() {
  return (
    <div className="flex h-full flex-col">
      <Navbar />
      {/* children */}
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}
