import { Outlet } from "react-router";
import AppNavBar from "../Components/AppNavBar";
import FooterPage from "../pages/Footer";

export default function MainLayout() {
  return (
    <>
      <AppNavBar />
      <Outlet />
      <FooterPage />
    </>
  );
}
