import { Outlet } from "react-router-dom";
import { user } from "../../../data/user";

import DesktopFooter from "../footer/DesktopFooter";
import MobileFooter from "../footer/MobileFooter";
import Navbar from "../navbar/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar user={user} />

      <main>
        <Outlet />
      </main>

      <DesktopFooter />
      <MobileFooter />
    </>
  );
}
