import albert from "../assets/images/culture/albert.jpg";
import banner from "../assets/images/culture/banner.jpg";
import { Info } from "lucide-react";

function Culture() {
  return (
    <div className="text-justify nunito">
      {/*banner*/}
      <div
        className="relative flex flex-col justify-center items-center px-12 py-6 h-[50dvh] max-md:px-6 text-white bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/*backdrop*/}
        <div className="absolute left-0 w-full h-full bg-black opacity-60"></div>
        <h1 className="relative z-10 text-6xl font-bold">
          Our <span className="text-[#d70e1d]">Culture</span>
        </h1>
      </div>
      {/*section 1*/}
      <div className="flex flex-col gap-6 px-12 py-6 max-md:px-6">
        <p className="font-semibold">
          We think big, work hard and never stand still. It’s our talented and
          passionate team that make us leaders in creativity and innovation and
          the proud home to the best media and entertainment in the region.
        </p>

        <h1 className="text-3xl max-md:text-xl">
          Whether we’re in the studio or a building, our world-class Concepts
          are producing along with fast-moving digital contents, we’re at our
          best when we’re working together.
        </h1>

        <p>
          We’re here to make everyone’s day brighter. It’s why we show up, work
          hard and above all, it’s the reason we all love to work here. The
          social media link sets out what we’ve been up to so far, and our plans
          for the future. Click our links below to take a look.
        </p>
        <div className="flex max-lg:flex-col">
          <ul className="flex flex-col lg:gap-3 lg:w-1/2 max-lg:pb-6">
            <li>Offices : Kandy & Nuwara Eliya</li>
            <li>Digital broadcasting, artwork studio at</li>
            <li>Blackpool Nuwara Eliya.</li>
          </ul>
          <p className="flex items-center gap-3">
            <Info className="w-10 h-10 text-[#d70e1d]"/>
            The agency is a fully independent agency and works with multiple
            creative agencies around the globe.
          </p>
        </div>
      </div>
      {/*section 2*/}
      <div
        className="relative flex flex-col justify-center gap-6 h-[50dvh] px-12 py-6 border-t max-md:px-6 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${albert})` }}
      >
        {/*backdrop*/}
        <div className="absolute left-0 w-full h-full bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col gap-6 md:w-2/3">
          <p className="text-3xl italic">
            “If you can’t explain it to a six year old, you don’t understand it
            well enough yourself” –
          </p>

          <h1 className="w-full pt-6 border-t text-end">Albert Einsteen</h1>
        </div>
      </div>
    </div>
  );
}

export default Culture;
