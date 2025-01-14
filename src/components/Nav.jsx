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
                  talk@mediaasia.lk
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="flex items-center gap-3">
                  <MapPin className="text-[#d70e1d]" />
                  63, Level, 3 Raja Veediya, Kandy
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
                    Home
                  </Link>
                </li>
                <li className="hover:text-[#d70e1d] transition-all delay-75">
                  <Link
                    data-dropdown-toggle="pages-dropdown"
                    data-dropdown-trigger="hover"
                    className="flex items-center gap-1"
                    href="/culture"
                  >
                    Our Culture
                  </Link>
                </li>
                <li className="hover:text-[#d70e1d] transition-all delay-75">
                  <Link
                    data-dropdown-toggle="services-dropdown"
                    data-dropdown-trigger="hover"
                    className="flex items-center gap-1"
                    href="/products"
                  >
                    Products <ChevronDown />
                  </Link>
                  {/* Dropdown menu */}
                  <div
                    id="services-dropdown"
                    className="z-20 hidden bg-white divide-y divide-gray-100 shadow w-44 "
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 "
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <Link
                          href="/products/item-1"
                          className="block px-4 py-2 hover:bg-gray-100 "
                        >
                          Item 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/item-2"
                          className="block px-4 py-2 hover:bg-gray-100 "
                        >
                          Item 2
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/item-3"
                          className="block px-4 py-2 hover:bg-gray-100 "
                        >
                          Item 3
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products/item-4"
                          className="block px-4 py-2 hover:bg-gray-100 "
                        >
                          Item 4
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hover:text-[#d70e1d] transition-all delay-75">
                  <Link
                    data-dropdown-toggle="portfolio-dropdown"
                    data-dropdown-trigger="hover"
                    className="flex items-center gap-1"
                    href="/contact"
                  >
                    Contacts
                  </Link>
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
              <span className="">+94 70 155 1777</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
