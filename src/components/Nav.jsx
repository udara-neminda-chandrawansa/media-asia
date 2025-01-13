import logo from "/logo-media-asia-wide.png";
import { Phone, Mail, MapPin, Menu } from "lucide-react";
import trapezoid_l from "../assets/images/nav/trapezoid.png";
import trapezoid_r from "../assets/images/nav/trapezoid-2.png";

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
            <div className="flex items-center justify-center w-full max-md:justify-end h-5/6 max-xl:h-full max-md:pr-6 max-sm:hidden">
              <ul className="flex gap-6 text-lg max-md:text-sm">
                <li>Home</li>
                <li>Pages</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          {/*burgor button for max-sm*/}
          <div className="flex items-center justify-center h-full px-6 sm:hidden">
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
