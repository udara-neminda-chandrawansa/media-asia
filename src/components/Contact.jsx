import React from "react";
import { Mail, Phone, User, Building } from "lucide-react";
import banner from "../assets/images/contact/banner.jpg";
import { Link } from "wouter";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="nunito">
      {/*banner*/}
      <div
        className="relative flex flex-col justify-center items-center px-12 py-6 h-[50dvh] max-md:px-6 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/*backdrop*/}
        <div className="absolute left-0 w-full h-full bg-black opacity-60"></div>
        <h1 className="relative z-10 text-6xl font-bold">
          <span className="text-[#d70e1d]">Contact</span> Us
        </h1>
      </div>
      {/*form*/}
      <div className="w-full p-6 mx-auto my-6 md:max-w-6xl bg-gray-50">
        <div className="mb-8 text-center">
          <p className="flex items-center justify-center gap-2 text-gray-600">
            <span className="text-[#d70e1d]">◆</span>
            Need Contact
            <span className="text-[#d70e1d]">◆</span>
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Contact With <span className="text-[#d70e1d]">Exper</span>
            <span className="text-[#d70e1d]">ties</span>
          </h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <form onSubmit={handleSubmit} className="flex-1 space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative">
                <User className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d70e1d]"
                />
              </div>
              <div className="relative">
                <Phone className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d70e1d]"
                />
              </div>
              <div className="relative">
                <Mail className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d70e1d]"
                />
              </div>
              <div className="relative">
                <Building className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d70e1d]"
                />
              </div>
            </div>

            <textarea
              placeholder="Write Message..."
              rows={6}
              className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d70e1d]"
            />

            <button
              type="submit"
              className="w-full px-6 py-3 font-medium text-white transition-opacity rounded-lg bg-[#d70e1d] hover:opacity-80"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-6 lg:w-72">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Working Hours:</h2>
              <p className="text-gray-600">Mon to Sat : 8am- 9pm</p>
              <p className="text-gray-600">
                Sunday : <span className="text-[#d70e1d]">Closed</span>
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#d70e1d] to-[#d70e1d]">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="px-4 py-1 text-sm text-white rounded-full bg-gradient-to-r from-[#d70e1d] to-[#d70e1d]">
                    Call Now
                  </p>
                  <a href="tel:94701551777" className="text-gray-600">+94 70 155 1777</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#d70e1d] to-[#d70e1d]">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="px-4 py-1 text-sm text-white rounded-full bg-gradient-to-r from-[#d70e1d] to-[#d70e1d]">
                    Email Now
                  </p>
                  <p className="text-gray-600">talk@mediaasia.lk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*extras grid*/}
      <div className="grid grid-cols-4 gap-6 pb-6 mx-auto max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 md:max-w-6xl max-md:px-6">
      <div className="flex items-center justify-center gap-6 p-6 text-white bg-gray-700">
          <input
            type="search"
            name="stext"
            id="stext"
            className="w-4/6 rounded-md"
            placeholder="Search..."
          />
          <button className="flex items-center justify-center px-3 py-2 text-gray-600 bg-white rounded-lg w-fit h-fit">
            Submit
          </button>
        </div>
        <div className="flex flex-col gap-6 p-6 text-white bg-gray-700">
          <p>Recent Comments</p>
        </div>
        <div className="flex flex-col gap-6 p-6 text-white bg-gray-700">
          <p>Archives</p>
        </div>
        <div className="flex flex-col gap-6 p-6 text-white bg-gray-700">
          <p>Categories</p>
        </div>
        <div className="flex flex-col gap-6 p-6 text-white bg-gray-700">
          <p>Meta</p>
          <ul>
            <li><Link>Log in</Link></li>
            <li><Link>Entries feed</Link></li>
            <li><Link>Comments feed</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
