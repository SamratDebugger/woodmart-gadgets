import { CiGlobe } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { Link } from "react-router";

export default function Nav() {
  return (
    <div className="navbar max-w-6xl mx-auto px-5 gap-5 ">
      <div className="navbar-start w-auto">
        <Link to="/" className="">
          <img src="/assets/images/logo.svg" alt="woodmart-logo" />
        </Link>
      </div>
      <div className="navbar-center grow ">
        <label className="input w-full rounded-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="navbar-end w-auto gap-5">
        <div className="flex items-center gap-2">
          <div>
            <IoChatboxEllipsesOutline className="size-8" />
          </div>
          <div>
            <h5 className="text-sm font-bold">24 support</h5>
            <h3 className="text-blue-700">+880 1869-966275</h3>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <CiGlobe className="size-8" />
          </div>
          <div>
            <h5 className="text-sm font-bold">WorldWide</h5>
            <h3 className="text-blue-700">Free Shipping</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
