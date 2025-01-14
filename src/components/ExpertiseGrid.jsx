import React from "react";

const MarketingServices = () => {
  const services = [
    {
      title:
        "The best strategic locations to create optimised brand visibility.",
      description:
        "The largest network for hoardings, billboards, and bus shelter ads in the region is also the sole authorized agency for Kandy City's beautification in partnership with the Municipal Council. This unique positioning allows the agency to offer prime advertising spaces in Kandy, helping brands achieve significant visibility through strategically placed outdoor ads. Our comprehensive network covers key locations, including major roads, public transport hubs, and high-traffic areas, ensuring maximum exposure for advertisers. The partnership with the Municipal Council further enhances their credibility, allowing them to contribute to both advertising and urban beautification efforts in the city.",
    },
    {
      title: "Indoor and Outdoor branding, sign boards and dealer boards",
      description:
        "The agency operates its very own workshop complex in Pallekele & Galaha, Kandy, we are fully equipped with the latest state-of-the-art printing machines. This facility enables us to handle large-scale printing projects with efficiency and precision, ensuring high-quality output for hoardings, billboards, bus shelter ads, and other promotional materials. The advanced technology in the workshop ensures quick turnaround times and top-notch results, allowing us to meet the growing demands of advertisers while maintaining strict quality standards.",
    },
    {
      title: "Strategic Marketing, TV, Radio and Digital advertising.",
      description:
        "The agency is the only electronic media buying agency in Kandy, offering exclusive services for purchasing airtime on TV, radio, and digital platforms. In addition to electronic media, the agency specializes in press advertising, providing strategic ad placements in leading newspapers and popular magazines. With strong relationships in the media industry, we help businesses effectively reach our client's target audiences through both print and electronic media, ensuring comprehensive coverage across multiple channels for maximum impact.",
    },
    {
      title: "Events, Conventions, product launches and exhibitions.",
      description:
        "The agency boasts the largest brand activation force in Sri Lanka, delivering impactful on-ground marketing campaigns that engage consumers directly. Our extensive network and resources enable the agency to execute brand activations on a national scale, creating immersive experiences that drive brand awareness and customer engagement. Additionally, the agency is competent of the most robust research-based outreach teams in the country, ensuring that our strategies are data-driven and tailored to effectively reach target audiences. This combination of research expertise and a powerful activation team makes us a leader in creating memorable and effective brand interactions.",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 pb-12 max-md:p-6 max-md:pt-0 md:px-8 nunito">
      <span className="text-lg text-[#d70e1d] flex gap-3 items-center mb-6 intersect:motion-preset-slide-right motion-duration-1000">
        <span className="flex ">
          <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
          <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
        </span>
        Our Expertise
        <span className="flex ">
          <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
          <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
        </span>
      </span>
      <h1 className="mb-6 text-4xl font-bold text-center md:text-5xl intersect:motion-preset-slide-left motion-duration-1000 motion-delay-75">
        <span>Dominating the Region with </span>
        <span className="text-[#d70e1d]">Unmatched</span> Expertise
      </h1>

      <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 max-w-7xl">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col p-6 space-y-4 transition-colors duration-300 border rounded-lg cursor-pointer  intersect:motion-preset-slide-up motion-duration-1000 motion-delay-${index}00`}
          >
            <h2 className="text-xl font-medium md:text-2xl">{service.title}</h2>
            <p className="text-sm leading-relaxed text-justify md:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingServices;
