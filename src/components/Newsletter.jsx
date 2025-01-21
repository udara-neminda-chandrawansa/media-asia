import { Mail } from "lucide-react";
function Newsletter() {
  return (
    <>
      {/*newsletter*/}
      <div className="w-full border-b nunito">
        <div className="flex justify-between border-t w-full h-full px-12 max-md:px-6 py-6 bg-[#d70e1d] text-white">
          <div className="flex items-center w-full h-full gap-3 justify-evenly max-lg:flex-col">
            <h1 className="text-3xl font-bold max-lg:text-center">
              Subscribe to our Newsletter
            </h1>
            <div className="flex justify-center gap-3 max-sm:flex-col max-sm:w-full">
              <input
                type="email"
                name="email_newsletter"
                id="email_newsletter"
                placeholder="Enter your email"
                className="text-black rounded-lg"
              />
              <a
                href="mailto:talk@mediaasia.lk"
                className="bg-white text-[#d70e1d] px-6 rounded-lg flex justify-center items-center gap-6 py-2 sm:py-3"
              >
                <Mail /> Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
