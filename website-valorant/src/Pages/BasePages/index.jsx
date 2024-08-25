import { Outlet } from "react-router-dom";

// Components
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";

export function BasePages() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
