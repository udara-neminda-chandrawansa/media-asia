import React, { useState } from "react";
import Newsletter from "./Newsletter";

const CommentForm = () => {
  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
    saveInfo: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      <div className="p-12 2xl:px-36 mx-auto text-gray-300 bg-gray-900 border-b max-md:p-6 nunito flex gap-6 max-md:flex-col">
        <div className="md:w-1/2">
          <h2 className="mb-2 text-2xl font-semibold text-white">
            Leave a Reply
          </h2>

          <p className="mb-6 text-sm">
            Your email address will not be published. Required fields are marked{" "}
            <span className="text-red-500">*</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="comment" className="block mb-2">
                Comment <span className="text-red-500">*</span>
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={6}
                required
                value={formData.comment}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="website" className="block mb-2">
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                checked={formData.saveInfo}
                onChange={handleChange}
                className="text-blue-500 rounded focus:ring-blue-500"
              />
              <label htmlFor="saveInfo" className="text-sm">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>

            <button
              type="submit"
              className="px-6 py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              POST COMMENT
            </button>
          </form>
        </div>
        <div className="md:w-1/2">
          {/*map*/}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7915.039588434427!2d80.636253!3d7.295345000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3662b0fc6e0c7%3A0x3f5e7c76ac4ac8eb!2s63%2C%20Level%2C%203%20Raja%20Veediya%2C%20Kandy%2020000%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1736836602781!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full border-0 max-md:h-[500px]"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default CommentForm;
