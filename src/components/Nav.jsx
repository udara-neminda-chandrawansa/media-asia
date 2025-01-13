import logo from "/logo-media-asia-wide.png";
import { Phone, Mail, MapPin, Menu, ChevronDown } from "lucide-react";
import trapezoid_l from "../assets/images/nav/trapezoid.png";
import trapezoid_r from "../assets/images/nav/trapezoid-2.png";
import { Link } from "wouter";

function Nav() {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className=" h-[15dvh] flex flex-col w-full justify-center dm-sans">
        <div className="flex items-center justify-between w-full h-full">
          {/*logo trapezoid*/}
          <div
            className="z-10 flex items-center w-1/5 h-full bg-no-repeat max-sm:w-3/5 md:bg-cover"
            style={{ backgroundImage: `url(${trapezoid_l})` }}
          >
            <img src={logo} alt="logo" className="object-contain h-full" />
          </div>
          {/*middle-section*/}
          <div className="flex flex-col items-center w-4/5 h-full">
            {/*email & location*/}
            <div className="flex w-full py-4 text-sm text-gray-600 bg-gray-100 justify-evenly h-1/6 max-xl:hidden">
              <div className="flex items-center space-x-1">
                <span className="flex items-center gap-3">
                  <Mail className="text-[#d70e1d]" />
                  info@example.com
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="flex items-center gap-3">
                  <MapPin className="text-[#d70e1d]" />
                  185 Front St, Brooklyn, New York
                </span>
              </div>
            </div>
            {/*ul container*/}
            <div className="flex items-center justify-center w-full max-md:justify-end h-5/6 max-xl:h-full max-md:pr-6 max-md:hidden">
              <ul className="flex gap-6 text-lg">
                <li className="hover:text-[#d70e1d] transition-all delay-75">
                  <Link
                    data-dropdown-toggle="home-dropdown"
                    data-dropdown-trigger="hover"
                    className="flex items-center gap-1"
                    href="/"
                  >
                    Home <ChevronDown />
                  </Link>
                  {/* Dropdown menu */}
                  <div
                    id="home-dropdown"
                    className="z-20 hidden bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-800"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 4
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hover:text-[#d70e1d] transition-all delay-75">
                  <Link
                    data-dropdown-toggle="pages-dropdown"
                    data-dropdown-trigger="hover"
                    className="flex items-center gap-1"
                    href="/"
                  >
                    Pages <ChevronDown />
                  </Link>
                  {/* Dropdown menu */}
                  <div
                    id="pages-dropdown"
                    className="z-20 hidden bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-800"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 4
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hover:text-[#d70e1d] transition-all delay-75">
                  <Link
                    data-dropdown-toggle="services-dropdown"
                    data-dropdown-trigger="hover"
                    className="flex items-center gap-1"
                    href="/"
                  >
                    Services <ChevronDown />
                  </Link>
                  {/* Dropdown menu */}
                  <div
                    id="services-dropdown"
                    className="z-20 hidden bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-800"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 4
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hover:text-[#d70e1d] transition-all delay-75">
                  <Link
                    data-dropdown-toggle="portfolio-dropdown"
                    data-dropdown-trigger="hover"
                    className="flex items-center gap-1"
                    href="/"
                  >
                    Portfolio <ChevronDown />
                  </Link>
                  {/* Dropdown menu */}
                  <div
                    id="portfolio-dropdown"
                    className="z-20 hidden bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-800"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 4
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hover:text-[#d70e1d] transition-all delay-75">
                  <Link
                    data-dropdown-toggle="blog-dropdown"
                    data-dropdown-trigger="hover"
                    className="flex items-center gap-1"
                    href="/"
                  >
                    Blog <ChevronDown />
                  </Link>
                  {/* Dropdown menu */}
                  <div
                    id="blog-dropdown"
                    className="z-20 hidden bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-800"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Item 4
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hover:text-[#d70e1d] transition-all delay-75">
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          {/*burgor button for max-md*/}
          <div className="flex items-center justify-center h-full px-6 md:hidden">
            <button>
              <Menu></Menu>
            </button>
          </div>
          {/*tel no trapezoid*/}
          <div
            className="flex items-center justify-center w-1/5 h-full gap-6 text-white bg-no-repeat bg-cover max-xl:hidden"
            style={{ backgroundImage: `url(${trapezoid_r})` }}
          >
            <Phone className="w-6 h-6" />
            <div className="flex flex-col items-start">
              <span className="">Call Now</span>
              <span className="">+998-8776345</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
