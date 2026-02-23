import DrawerMenu from "./DrawerMenu";
import Footer from "./Footer";
import Nav from "./Nav";
import NavTwo from "./NavTwo";

export default function Drawer({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <Nav />
        <NavTwo />
        {/* Page content here */}
        <main>{children}</main>
        <Footer />
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <DrawerMenu />
        </div>
      </div>
    </div>
  );
}
