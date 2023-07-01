import { Outlet } from "react-router";
import { Header } from "../../components/Header/Header";

export function ScreenDefault() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
