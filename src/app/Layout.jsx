import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>nav bar</nav>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}
