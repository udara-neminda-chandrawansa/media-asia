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
                  <a href="mailto:talk@mediaasia.lk">talk@mediaasia.lk</a>
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
                  <Link className="flex items-center gap-1" href="/">
                    Home
                  </Link>
                </li>
                <li className="hover:text-[#d70e1d] transition-all delay-75">
                  <Link className="flex items-center gap-1" href="/culture">
                    Our Culture
                  </Link>
                </li>
                <li className="hover:text-[#d70e1d] transition-all delay-75">
                  <Link className="flex items-center gap-1" href="/products">
                    Products
                  </Link>
                </li>
                <li className="hover:text-[#d70e1d] transition-all delay-75">
                  <Link className="flex items-center gap-1" href="/contact">
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/*burgor button for max-md*/}
          <div className="flex items-center justify-center h-full px-6 md:hidden">
            <button
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasExample"
            >
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
              <a href="tel:94701551777">+94 70 155 1777</a>
            </div>
          </div>
        </div>
      </nav>
      {/*offcanvas nav*/}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="justify-end border-b offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-coreui-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="flex flex-col gap-6 text-lg">
            <li className="hover:text-[#d70e1d] transition-all delay-75">
              <Link className="flex items-center gap-1" href="/">
                Home
              </Link>
            </li>
            <li className="hover:text-[#d70e1d] transition-all delay-75">
              <Link className="flex items-center gap-1" href="/culture">
                Our Culture
              </Link>
            </li>
            <li className="hover:text-[#d70e1d] transition-all delay-75">
              <Link className="flex items-center gap-1" href="/products">
                Products
              </Link>
            </li>
            <li className="hover:text-[#d70e1d] transition-all delay-75">
              <Link className="flex items-center gap-1" href="/contact">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Nav;
