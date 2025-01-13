import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">
                <span className="text-[#d70e1d]">Media </span>
                <span className="text-white">Asia</span>
              </h2>
              <p className="text-sm">Kandy</p>
            </div>
            <p className="text-gray-400 text-sm">
              Nor again is there anyone who loves or pursues or desires to obtain pain.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-gray-700 rounded-full hover:border-[#d70e1d] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-gray-700 rounded-full hover:border-[#d70e1d] transition-colors">
                <div className="w-4 h-4 bg-gray-300" />
              </a>
              <a href="#" className="p-2 border border-gray-700 rounded-full hover:border-[#d70e1d] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-gray-700 rounded-full hover:border-[#d70e1d] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {['Branding', 'Development', 'SEO Marketing', 'Digital Marketing', 'Marketing Strategy'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
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
                  <p className="text-gray-400">info@example1.com</p>
                  <p className="text-gray-400">info@example1.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <div className="text-gray-400">
                  <p>(828) 453-0319</p>
                  <p>302 Raleigh Ledbetter Rd</p>
                  <p>Ellenboro, North Carolina(NC).</p>
                </div>
              </div>
            </div>
          </div>

          {/* More Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">More Info</h3>
            <ul className="space-y-3">
              {['About Us', 'Contact', 'Faq', 'Gallery', 'Pricing'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Achievements */}
        <div className="my-16 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold mb-6">Achievements:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="w-24 h-24 bg-gray-400 object-contain" />
            <div className="w-24 h-24 bg-gray-400 object-contain" />
            <div className="w-24 h-24 bg-gray-400 object-contain" />
            <div className="w-24 h-24 bg-gray-400 object-contain" />
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>Working Progress by Silicon Radon Networks (Pvt) Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;