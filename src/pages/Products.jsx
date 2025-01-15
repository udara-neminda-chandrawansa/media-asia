import banner from "../assets/images/products/banner.jpg";
import ProductCard from "../components/ProductCard";

import btl_1 from "../assets/images/products/btl_1.jpg";
import btl_2 from "../assets/images/products/btl_2.jpg";
import btl_3 from "../assets/images/products/btl_3.jpg";
import btl_4 from "../assets/images/products/btl_4.jpg";
import btl_5 from "../assets/images/products/btl_5.jpg";
import btl_6 from "../assets/images/products/btl_6.jpg";

import out_1 from "../assets/images/products/out_1.jpg";
import out_2 from "../assets/images/products/out_2.jpg";
import out_3 from "../assets/images/products/out_3.jpg";

import city_dev from "../assets/images/products/city-dev.jpeg";

function Products() {
  return (
    <div className="nunito">
      {/*banner*/}
      <div
        className="relative flex flex-col justify-center items-center px-12 py-6 h-[50dvh] max-md:px-6 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/*backdrop*/}
        <div className="absolute left-0 w-full h-full bg-black opacity-50"></div>
        <h1 className="relative z-10 text-6xl font-bold">
          Our <span className="text-[#d70e1d]">Products</span>
        </h1>
      </div>
      {/*btl section*/}
      <div id="btl" className="px-12 py-6 max-md:px-6">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Products <span className="text-[#d70e1d]">BTL</span>
        </h2>
        {/*btl products grid*/}
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <ProductCard
            title={"Street Name Boards"}
            content={
              "Kundasale, Digana, Katugasthota, Dodamwala, Kandy, Hanthana, Nittawela & Aniwattha. Nuwara Eliya, Matale, Dambulla & Sigiriya."
            }
            image={btl_1}
            locations={"Kandy, Matale & Nuwaraeliya"}
          />
          <ProductCard
            title={"Direction boards"}
            content={
              "Grid City of Kandy & Nuwara Eliya, Bus stand, Post office, Telecom, Religious locations, Tourist locations, Govenent institutes."
            }
            image={btl_2}
            locations={"Kandy & Nuwara Eliya Districts"}
          />
          <ProductCard
            title={"Police Check Points"}
            content={
              "Branding & advertising at Nuwara Eliya entrance points, Kandy City entrance locations."
            }
            image={btl_3}
            locations={"Kandy, Kurunegala, Matale, Dambulla & Nuwara Eliya"}
          />
          <ProductCard
            title={"Hospitals & Schools"}
            content={
              "Branding Kandy Hospital ward number plate association, regional hospital ward numbers and way points, Schools notice boards, sports activities, parents waiting area branding."
            }
            image={btl_4}
            locations={"Entire Central region"}
          />
          <ProductCard
            title={"Roadside warnings & signs"}
            content={
              "Brand associations on No Parking boards, Motorists warnings, Road crossing notifications."
            }
            image={btl_5}
            locations={"Nuwara Eliya & Matale"}
          />
          <ProductCard
            title={"Hotels & Public area"}
            content={"Hotel signages, warnings public awareness messages"}
            image={btl_6}
            locations={"Islandwide"}
          />
        </div>
      </div>
      {/*outdoor events section*/}
      <div id="outdoor-events" className="px-12 pb-6 max-md:px-6">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          <span className="text-[#d70e1d]">Outdoor</span> Events
        </h2>
        <p className="mb-6 text-justify">
          Media Asia Networks Agency is a global experiential marketing company,
          delivering impact driven brand experiences. With a legacy of over
          three decades, we integrate strategy, creativity and technology to
          deliver solutions that inspire.
        </p>
        {/*outdoor products grid*/}
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <ProductCard
            title={"LED Screens"}
            content={"Latest HD LED screens for corporate events."}
            image={out_1}
            locations={""}
          />
          <ProductCard
            title={"Digital Sounds"}
            content={
              "Latest array of Digital Sound systems for your next coroprate event."
            }
            image={out_2}
            locations={""}
          />
          <ProductCard
            title={"Live Streaming"}
            content={
              "One stop agency for all Live Streaming for social media and main stream media stations."
            }
            image={out_3}
            locations={""}
          />
        </div>
      </div>
      {/*csr section*/}
      <div id="outdoor-events" className="px-12 pb-6 max-md:px-6">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          <span className="text-[#d70e1d]">CSR</span> Projects for clients
        </h2>
        <p className="mb-6 text-justify">Rural Area development projects</p>
        <p className="mb-6 text-justify">
          Call us for your next CSR marketing engagement programme with us, We
          do deep digging and research based and most relevant CSR campaign that
          fits your budget
        </p>
        <a
          href="https://api.whatsapp.com/message/O4SUSP57R5LEE1?autoload=1&app_absent=0"
          className="bg-[#d70e1d] text-white px-3 py-1"
        >
          WhatsApp
        </a>
      </div>
      {/*city dev section*/}
      <div
        id="outdoor-events"
        className="flex gap-12 px-12 pb-6 max-md:flex-col max-md:px-6 max-md:gap-6"
      >
        <div className="justify-center max-md:flex">
          <img
            src={city_dev}
            alt="city-dev img"
            className="h-[500px] object-cover"
          />
        </div>
        <div className="">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            <span className="text-[#d70e1d]">City</span> Development Projects
          </h2>
          <p className="mb-6 text-2xl text-justify md:text-3xl">
            Strategic Planning - Smart City
          </p>
          <ul className="flex flex-col gap-3 list-disc list-inside">
            <li>Free WiFi Zones</li>
            <li>Developing the Pedestrian crossings</li>
            <li>Plastic Recycling projects</li>
            <li>Smart Bus Shelters</li>
            <li>Tourism destination development</li>
            <li>Public Transport Developments</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;
