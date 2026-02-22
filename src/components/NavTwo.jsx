import { CiHeart } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlBasket } from "react-icons/sl";

export default function NavTwo() {
  return (
    <div className="navbar bg-base-100 max-w-360 mx-auto px-5">
      <div className="flex-1">
        <ul className="menu menu-horizontal px-1">
          <button className="flex gap-3 items-center bg-base-100 rounded-full">
            <li>
              <a>
                <GiHamburgerMenu />
              </a>
            </li>
            <p>All Categories</p>
          </button>
          <li>
            <a>Promotions</a>
          </li>
          <li>
            <a>Stores</a>
          </li>
          <li>
            <a>Our Contacts</a>
          </li>
          <li>
            <a>Delivery & Return</a>
          </li>
          <li>
            <a>Outlet</a>
          </li>
        </ul>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>USA</a>
          </li>
          <li>
            <a>USD</a>
          </li>
          <li>
            <button>
              <FaUser />
            </button>
          </li>
          <li>
            <button>
              <FaUser />
            </button>
          </li>
          <li>
            <button>
              <FaArrowRightArrowLeft />
            </button>
          </li>
          <li>
            <button>
              <SlBasket />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
