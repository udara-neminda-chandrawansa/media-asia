import React from "react";
import { Link } from "wouter";
import CommentForm from "../components/CommentsForm";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <CommentForm />
      <footer className="py-6 text-white bg-gray-900 nunito">
        <div className="w-full px-12 mx-auto 2xl:px-36 max-md:px-6">
          <div className="grid grid-cols-1 gap-12 max-lg:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">
                  <span className="text-[#d70e1d]">Media </span>
                  <span className="text-white">Asia </span>
                  <span className="text-white">Networks</span>
                </h2>
                <p className="text-sm">We are Everywhere</p>
              </div>
              <p className="text-sm text-justify text-gray-400">
                Together, we’re here to make  everyone’s day brighter. Our
                people, our audiences, our partners, our communities and our
                country. We touch hearts, change lives and drive deeper
                connections. And, as we create the best work of our
                careers, we’ll add a dash of Global Approach along the way.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/media-asia-integrated/?viewAsMember=true"
                  className="p-2 border border-gray-700 rounded-full hover:border-[#d70e1d] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/MediaAsia_lk"
                  className="p-2 border border-gray-700 rounded-full hover:border-[#d70e1d] transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/mediaasia_lk/"
                  className="p-2 border border-gray-700 rounded-full hover:border-[#d70e1d] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/mediaasia.lk/"
                  className="p-2 border border-gray-700 rounded-full hover:border-[#d70e1d] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Our Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Our Services</h3>
              <ul className="space-y-3">
                {[
                  "Strategic Marketing",
                  "Advertising",
                  "Outdoor Branding",
                  "PR & CSR",
                  "TV & Radio Media Buying",
                  "Creative Services",
                ].map((service) => (
                  <li key={service}>
                    <p className="text-gray-400 transition-colors cursor-pointer hover:text-white">
                      {service}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Address */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Office Address</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1" />
                  <div>
                    <a
                      href="mailto:talk@mediaasia.lk"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      talk@mediaasia.lk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1" />
                  <div className="text-gray-400">
                    <p>No 63,</p>
                    <p>Level-3, </p>
                    <p>Raja Veediya, </p>
                    <p>Kandy,</p>
                    <p>Studio Complex at Hanthana Estate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* More Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">More Info</h3>
              <ul className="space-y-3">
                {["Home", "Our Culture", "Products", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={
                        item === "Home"
                          ? "/"
                          : item === "Our Culture"
                          ? "/culture"
                          : item === "Products"
                          ? "/products"
                          : item === "Contact"
                          ? "/contact"
                          : ""
                      }
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold">Business Hours</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">Weekdays - 9AM to 5PM</li>
                <li className="text-gray-400">Saturday - 9 AM to 2 PM</li>
                <li className="p-2"></li>
              </ul>
            </div>
          </div>

          {/* Achievements */}
          <div className="hidden pt-8 my-16 border-t border-gray-800">
            <h3 className="mb-6 text-xl font-semibold">Achievements:</h3>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="object-contain w-24 h-24 bg-gray-400" />
              <div className="object-contain w-24 h-24 bg-gray-400" />
              <div className="object-contain w-24 h-24 bg-gray-400" />
              <div className="object-contain w-24 h-24 bg-gray-400" />
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
            <p>
              2025 © All Rights Reserved | New Media Asia Holdings Pvt Ltd. | Designed & Developed by
              Silicon Radon Networks (Pvt) Ltd.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
