import { FaBars } from "react-icons/fa";

import { menus } from "./lib/menu";

export default function DrawerMenu() {
  return (
    <>
      <ul className="menu w-full grow">
        {/* List item */}
        <li>
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right menu-active rounded-full bg-blue-700"
            data-tip="All categories"
          >
            {/* Sidebar toggle icon */}
            <FaBars className="my-1.5 inline-block size-4" />

            {/* Home icon */}

            <span className="is-drawer-close:hidden">All categories</span>
          </label>
        </li>
        {menus.map((menu) => (
          <li key={menu.id}>
            <details
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip={menu.item}
            >
              <summary>
                {menu.icon}
                <span className="is-drawer-close:hidden">{menu.item}</span>
              </summary>
              <ul>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
                <li>
                  <details open>
                    <summary>Parent</summary>
                    <ul>
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
        ))}
      </ul>
    </>
  );
}
