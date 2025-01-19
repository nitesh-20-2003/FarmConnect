import { Suspense } from "react";
import Logo from "./Logo";
import LinksDropdown from "./LinksDropdown";
import DarkMode from "./DarkMode";
import NavSearch from "./NavSearch";
import Container from "../global/Container";
function Navbar() {
  return (
    <nav className={`bg-white dark:bg-[#121212] border-b sticky top-0 z-50`}>
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          {/* <CartButton /> */}
         
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
