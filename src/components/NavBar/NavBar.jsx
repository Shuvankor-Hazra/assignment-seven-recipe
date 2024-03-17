// import PropTypes from "prop-types";
import { FaRegUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (
      <div className="navbar py-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-8 font-semibold shadow bg-base-100 rounded-box w-52 border border-[#A5DD9B]"
            >
              <li>
                <a>HOME</a>
              </li>
              <br />
              <li>
                <a>RECIPES</a>
              </li>
              <br />
              <li>
                <a>ABOUT</a>
              </li>
              <br />
              <li>
                <a>SEARCH</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl lg:text-3xl font-extrabold text-[#79a272]">Cal-Recipe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>RECIPES</a>
            </li>
            <li>
              <a>ABOUT</a>
            </li>
            <li>
              <a>SEARCH</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <input type="text" name="search" placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-full" />
          <FaRegUserCircle className=" btn text-5xl bg-[#A5DD9B] p-3 rounded-full"></FaRegUserCircle>
        </div>
      </div>
  );
};

// NavBar.propTypes = {};

export default NavBar;
