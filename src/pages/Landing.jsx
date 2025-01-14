import { useState, useEffect } from "react";
import React from "react";

import MarketingServices from "../components/ExpertiseGrid";

import contact_img from "../assets/images/landing/contact-us.png";

import s1 from "../assets/images/services/1.png";
import s2 from "../assets/images/services/2.png";
import s3 from "../assets/images/services/3.png";
import s4 from "../assets/images/services/4.png";
import s5 from "../assets/images/services/5.png";
import s6 from "../assets/images/services/6.png";

import {
  Phone,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Users,
  Headphones,
  DollarSign,
  Search,
  ClipboardList,
  Target,
  Trophy,
  Award,
  Crown,
  PlusCircle,
  Mail,
  Settings,
  PartyPopper,
  Code,
} from "lucide-react";

function Landing() {
  const blogs = [
    {
      id: 1,
      price: "900,000 LKR Upwards",
      image: s1,
      title: "Hoardings & Billboards",
      content:
        "We provide impactful, local coverage with maximum visibility on key urban streets and main roads, making our outdoor advertising modules ideal for achieving widespread brand recognition.",
    },
    {
      id: 2,
      price: "650,000 LKR upwards",
      image: s2,
      title: "Bus Shelter Advertising",
      content:
        "Our eye-level outdoor advertising modules effectively reach a diverse audience in their daily routines, ensuring optimal visibility. We identify the best locations for your target audience and recommend the ideal sites for your brand campaign.",
    },
    {
      id: 3,
      price: "400,000 LKR Upwards",
      image: s3,
      title: "Store Branding",
      content:
        "We specialize in store and outlet branding in Kandy, Sri Lanka, using acrylic plastic letters, vacuum letters, flex, and digital stickers. Our premium quality indoor branding solutions enhance your business's visibility and appeal.",
    },
    {
      id: 4,
      price: "150,000 LKR Upwards",
      image: s4,
      title: "Events & Activation",
      content:
        "We are a leading brand activation agency in Sri Lanka's Central Province, offering dynamic street promotions, food events, sports events, and music collaborations to engage audiences and elevate brand experiences.",
    },
    {
      id: 5,
      price: "200,000 LKR Upwards",
      image: s5,
      title: "Leading Bus and Train Advertising Agency",
      content:
        "Media Asia is one of the largest providers of bus, train, and highway advertising in the Central Province, offering extensive coverage to engage audiences on the move. Our strategic placements across key transport routes ensure maximum visibility for brands throughout the region.",
    },
    {
      id: 6,
      price: "45,000 LKR Upwards",
      image: s6,
      title: "Brand Experience",
      content:
        "We create impactful brand experiences that resonate with audiences, capturing hearts and minds. Whether building brand awareness, driving consideration, or launching a new product, our carefully crafted moments in key locations ensure your brand objectives are achieved effectively.",
    },
  ];
  const skills = [
    { name: "Business Strategy", percentage: 80 },
    { name: "Management", percentage: 88 },
    { name: "Technology", percentage: 75 },
    { name: "Marketing", percentage: 90 },
  ];

  const awards = [
    {
      icon: Trophy,
      title: "Top Digital Agency",
      year: "2022",
    },
    {
      icon: Award,
      title: "Best Quality Service",
      year: "2021",
    },
    {
      icon: Crown,
      title: "Best Developers",
      year: "2022",
    },
  ];

  const testimonials = [
    {
      dp: Trophy,
      name: "Udara Neminda",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      dp: Award,
      name: "Dasun Chamathka",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      dp: Crown,
      name: "Kasun Sudarshana",
      text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
  ];

  const processes = [
    {
      id: "01",
      icon: Search,
      title: "Research",
    },
    {
      id: "02",
      icon: ClipboardList,
      title: "Note",
    },
    {
      id: "03",
      icon: Target,
      title: "Plan",
    },
    {
      id: "04",
      icon: Users,
      title: "Impliment",
    },
  ];

  const services = [
    { id: 1, title: "Strategic Marketing" },
    { id: 2, title: "Advertising" },
    { id: 3, title: "Outdoor Branding" },
    { id: 4, title: "PR & CSR" },
    { id: 5, title: "TV & Radio Media Buying" },
    { id: 6, title: "Creative Services" },
    { id: 7, title: "SMM & Digital Marketing" },
    { id: 8, title: "OOH" },
    { id: 9, title: "Events & Activations" },
  ];

  const cards = [
    {
      cid: "card-1",
      title: "Understanding",
      description:
        "Understanding your audience through in-depth research and analysis.",
      icon: "🔥",
    },
    {
      cid: "card-2",
      title: "Strategy",
      description:
        "Involves crafting a comprehensive plan that aligns creative ideas with your brand's goals.",
      icon: "🧠",
    },
    {
      cid: "card-3",
      title: "Execution",
      description:
        "Seamless activation of strategies, delivering tailored results that resonate with your brand.",
      icon: "⚙️",
    },
  ];

  const [selectedCard, setSelectedCard] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const lastCard = document.getElementById("card-3");
      if (!lastCard) return;

      if (window.innerWidth <= 1023) {
        lastCard.style.display = "none";
      } else {
        lastCard.style.display = ""; // Reset to default display property
      }
      const middleCard = document.getElementById("card-2");
      if (!middleCard) return;

      if (window.innerWidth <= 767) {
        middleCard.style.display = "none";
      } else {
        middleCard.style.display = ""; // Reset to default display property
      }
    };

    // Attach event listener and invoke once to handle initial state
    window.addEventListener("resize", handleResize);
    handleResize();

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div>
      {/*banner*/}
      <div
        className="relative min-h-[85dvh] bg-cover bg-center nunito"
        style={{
          backgroundImage: `url(${"https://techgen-wp.b-cdn.net/wp-content/uploads/2023/05/image-two-1.jpg"})`,
        }}
      >
        {/* Backdrop */}
        <div className="absolute w-full h-full bg-black opacity-70"></div>
        {/* Hero Content */}
        <div className="px-12 py-16 max-sm:py-6 max-sm:px-6 h-[65dvh] flex items-center">
          <div className="grid gap-12 max-[425px]:gap-6">
            <div className="relative z-10 flex flex-col gap-6">
              <h1 className="text-6xl font-bold leading-tight text-white max-md:text-5xl max-sm:text-4xl">
                <span className="text-[#d70e1d]">Media Asia </span>Networks
              </h1>

              <div className="grid grid-cols-3 gap-4 max-[425px]:gap-2">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="flex items-center max-xl:w-[300px] max-md:w-fit"
                  >
                    <div className="text-[#d70e1d] mr-3">
                      <CircleCheck />
                    </div>
                    <span className="text-white max-sm:text-sm max-[425px]:text-xs">
                      {service.title}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start justify-between gap-3">
                <p className="text-justify text-white">
                  Experts in Digital Reels, Viral Videos, Influencer Marketing,
                  AI Productions, and Social Media Strategies for FB, Instagram,
                  TikTok, and CGI Marketing.
                </p>
                <a
                  href="https://www.instagram.com/mediaasia_lk/"
                  className="px-3 py-1 h-fit text-[#d70e1d] flex justify-center items-center transition-colors bg-transparent border-2 border-[#d70e1d] rounded-md hover:bg-[#d70e1d]"
                >
                  Follow Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="absolute bottom-0 left-0 right-0 bg-transparent cursor-pointer">
          <div className="px-12 pb-6 mx-auto max-sm:px-6 max-w-7xl">
            <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
              {cards.map((card, index) => (
                <div
                  key={card.title}
                  id={card.cid}
                  className={`p-6 flex items-center gap-6 transition-all rounded-lg ${
                    index === selectedCard
                      ? "bg-[#d70e1d] text-white"
                      : "bg-white"
                  }`}
                  onClick={() => setSelectedCard(index)}
                >
                  <div className="text-3xl">{card.icon}</div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{card.title}</h3>
                    <p className="text-sm">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="absolute flex-col hidden gap-3 top-8 right-12 max-md:hidden">
          <a
            href="https://www.linkedin.com"
            className="flex items-center justify-center w-10 h-10 transition-all delay-75 bg-white rounded-full shadow-lg cursor-pointer hover:text-[#d70e1d]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
          <a
            href="https://www.pinterest.com"
            className="flex items-center justify-center w-10 h-10 transition-all delay-75 bg-white rounded-full shadow-lg cursor-pointer hover:text-[#d70e1d]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pinterest"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            className="flex items-center justify-center w-10 h-10 transition-all delay-75 bg-white rounded-full shadow-lg cursor-pointer hover:text-[#d70e1d]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com"
            className="flex items-center justify-center w-10 h-10 transition-all delay-75 bg-white rounded-full shadow-lg cursor-pointer hover:text-[#d70e1d]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
          </a>
        </div>
      </div>
      {/*About*/}
      <div className="flex flex-col gap-6 px-12 py-12 max-md:p-6 nunito">
        {/*about company*/}
        <span className="text-lg text-[#d70e1d] flex gap-3 items-center">
          <span className="flex ">
            <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
            <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
          </span>
          About Media Asia
          <span className="flex ">
            <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
            <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
          </span>
        </span>
        <p className="text-2xl text-justify max-md:text-xl max-sm:text-lg">
          We are an independent full-funnel advertising and marketing agency
          with offices in Kandy and Nuwara Eliya. Our approach breaks away from
          traditional agency-brand barriers and outdated models, fostering
          fluid, collaborative relationships free from knowledge silos. We offer
          seamless, integrated solutions that drive innovation and growth for
          our clients.
        </p>
        <span className="text-lg text-[#d70e1d] flex gap-3 items-center">
          <span className="flex ">
            <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
            <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
          </span>
          Approach
          <span className="flex ">
            <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
            <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
          </span>
        </span>
        <p className="text-2xl text-justify max-md:text-xl max-sm:text-lg">
          We approach every brand by first gaining a deep understanding of its
          audience and their behaviors, using thorough research and leveraging
          your valuable data. With a complete picture in place, we craft a
          strategic plan that spans from creative development to activation,
          ensuring impactful results tailored to your brand’s needs.
        </p>
        <span className="text-lg text-[#d70e1d] flex gap-3 items-center">
          <span className="flex ">
            <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
            <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
          </span>
          Our Stats
          <span className="flex ">
            <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
            <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
          </span>
        </span>
        <div className="flex justify-center">
          <ul className="grid grid-cols-4 gap-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <li className="flex flex-col items-center">
              <div className="rounded-full h-20 max-lg:h-16 max-lg:w-16 w-20 border border-[#d70e1d]/10 flex justify-center items-center text-3xl max-lg:text-2xl p-20 max-lg:p-16">
                <p className="p-16 max-lg:p-12 h-full w-full rounded-full shadow-lg flex justify-center items-center text-[#d70e1d] font-extrabold">
                  11
                </p>
              </div>
              <p className="p-2 text-center">Years in Business</p>
            </li>
            <li className="flex flex-col items-center">
              <div className="rounded-full h-20 max-lg:h-16 max-lg:w-16 w-20 border border-[#d70e1d]/10 flex justify-center items-center text-3xl max-lg:text-2xl p-20 max-lg:p-16">
                <p className="p-16 max-lg:p-12 h-full w-full rounded-full shadow-lg flex justify-center items-center text-[#d70e1d] font-extrabold">
                  2.9K+
                </p>
              </div>
              <p className="p-2 text-center">Projects successfully completed</p>
            </li>
            <li className="flex flex-col items-center">
              <div className="rounded-full h-20 max-lg:h-16 max-lg:w-16 w-20 border border-[#d70e1d]/10 flex justify-center items-center text-3xl max-lg:text-2xl p-20 max-lg:p-16">
                <p className="p-16 max-lg:p-12 h-full w-full rounded-full shadow-lg flex justify-center items-center text-[#d70e1d] font-extrabold">
                  251
                </p>
              </div>
              <p className="p-2 text-center">Client Network</p>
            </li>
            <li className="flex flex-col items-center">
              <div className="rounded-full h-20 max-lg:h-16 max-lg:w-16 w-20 border border-[#d70e1d]/10 flex justify-center items-center text-3xl max-lg:text-2xl p-20 max-lg:p-16">
                <p className="p-16 max-lg:p-12 h-full w-full rounded-full shadow-lg flex justify-center items-center text-[#d70e1d] font-extrabold">
                  6.3K+
                </p>
              </div>
              <p className="p-2 text-center">Campaigns</p>
            </li>
          </ul>
        </div>
      </div>
      {/*Expertise grid*/}
      <MarketingServices />
      {/*case study*/}
      <div className="flex-col hidden gap-6 px-12 pb-20 max-md:p-6 nunito">
        {/*case syudy*/}
        <span className="text-lg text-[#d70e1d] flex gap-3 items-center">
          <span className="flex ">
            <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
            <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
          </span>
          Case Study
          <span className="flex ">
            <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
            <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
          </span>
        </span>
        {/*big title*/}
        <h1 className="text-4xl font-bold md:text-5xl">
          Our <span className="text-[#d70e1d]">Case Study</span>
        </h1>
        {/*card container*/}
        <div className="flex justify-center gap-12 max-lg:flex-col">
          <div className="bg-gray-300 h-[500px] lg:w-1/2 relative">
            <div className="absolute bg-[#d70e1d]/80 text-white rounded-lg h-25 flex justify-center px-6 lg:-bottom-10 max-lg:bottom-10 lg:w-4/5 lg:left-6 flex-col">
              <p className="text-lg">text</p>
              <h1 className="text-2xl font-semibold">
                title title title title title title title title title{" "}
              </h1>
            </div>
          </div>
          <div className="bg-gray-300 h-[500px] lg:w-1/2 relative">
            <div className="absolute bg-[#d70e1d]/80 text-white rounded-lg h-25 flex justify-center px-6 lg:-bottom-10 max-lg:bottom-10 lg:w-4/5 lg:left-6 flex-col">
              <p className="text-lg">text</p>
              <h1 className="text-2xl font-semibold">
                title title title title title title title title title{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/*facilities*/}
      <div className="w-full px-12 pb-12 mx-auto max-md:p-6 max-md:pt-0">
        {/* Header Section */}
        <div className="mb-12 text-center max-md:mb-6 nunito">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-lg text-[#d70e1d] flex gap-3 items-center">
              <span className="flex ">
                <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
                <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
              </span>
              Why Choose Us
              <span className="flex ">
                <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
                <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
              </span>
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            <span>Our </span>
            <span className="text-[#d70e1d]">Facilities</span>
          </h2>
          <p className="max-md:text-justify max-md:text-sm">
            The agency owns the best digital AV production and graphic studio in
            Kandy, offering cutting-edge services in video production,
            animation, and graphic design. Equipped with the latest technology
            and staffed by a team of creative professionals, the studio produces
            high-quality digital content tailored to meet the needs of modern
            advertising campaigns. Whether it's for TV commercials, social media
            content, corporate videos, or graphic design projects, our studio
            complex delivers visually stunning and impactful media that helps
            brands stand out in a competitive market. This in-house capability
            ensures efficient project management and top-tier creative output.
            <br />
            <br />
            “Trusted Sri Lankan Agency Delivering Tailored Multi-Channel Digital
            Marketing Solutions for Businesses of All Sizes”
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid items-start grid-cols-1 gap-8 max-md:gap-6 md:grid-cols-2 nunito">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-6">
              <div className="bg-[#d70e1d] p-3 rounded-lg">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold">
                  Cutting-Edge Digital & AV Studio in Kandy.
                </h3>
                <p className="text-justify text-gray-600">
                  Kandy’s only multi-cultural agency, featuring world-class
                  local and international designers, content creators, and
                  bloggers, delivering diverse and innovative creative
                  solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#d70e1d] p-3 rounded-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold">
                  Local and International Content Creators Powering Our Agency.
                </h3>
                <p className="text-justify text-gray-600">
                  The only advertising agency with a trilingual creative team
                  and partnerships for foreign language content creation,
                  ensuring diverse and multilingual marketing solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#d70e1d] p-3 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold">
                  Utilizing Premium Editing Software and Tools for Top-Notch
                  Results.
                </h3>
                <p className="text-justify text-gray-600">
                  The agency employs the latest software for AV editing and
                  design, leveraging advanced operating systems to deliver
                  cutting-edge creative solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#d70e1d] p-3 rounded-lg">
                <PartyPopper className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold">
                  Your Top Choice for International Standard Events in Sri
                  Lanka.
                </h3>
                <p className="text-justify text-gray-600">
                  Media Asia collaborates with both foreign and local event
                  agencies and production houses, specializing in international
                  events, music, and sports programs to deliver exceptional
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*video*/}
      <div className="h-[40dvh] bg-gray-300 hidden justify-center items-center">
        <p>video here</p>
      </div>
      {/*process*/}
      <div className="hidden w-full px-12 pb-16 mx-auto max-md:p-6 nunito">
        {/* Header */}
        <div className="mb-16 text-center max-md:mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-lg text-[#d70e1d] flex gap-3 items-center">
              <span className="flex ">
                <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
                <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
              </span>
              Working Process
              <span className="flex ">
                <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
                <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
              </span>
            </span>
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            <span>Our Working </span>
            <span className="text-[#d70e1d]">Process</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-4 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1 md:gap-8">
          {processes.map((process, index) => (
            <React.Fragment key={process.id}>
              {/* Process Item */}
              <div className="relative group">
                {/* Background Box */}
                <div className="bg-[#d70e1d]/10 hover:bg-[#d70e1d]/30 transition-all delay-75 hover:text-white cursor-pointer p-8 md:p-12 rounded-lg">
                  {/* Step Number */}
                  <div className="absolute text-2xl font-bold text-gray-300 top-4 left-4">
                    <p>{process.id}</p>
                  </div>

                  {/* Icon Circle */}
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-[#d70e1d] flex items-center justify-center">
                      <process.icon className="w-8 h-8 text-[#d70e1d]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-xl font-bold text-center">
                    {process.title}
                  </h3>
                </div>

                {/* Connector Line
                {index < processes.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-[#d70e1d]/20">
                    <div className="absolute -right-1 -top-1 w-2 h-2 border-t-2 border-r-2 border-[#d70e1d]/20 rotate-45" />
                  </div>
                )}
                   */}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      {/*skills*/}
      <div className="hidden w-full px-12 pb-16 mx-auto max-md:p-6 max-md:pt-0 nunito">
        {/* Header */}
        <div className="mb-12 max-md:mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg text-[#d70e1d] flex gap-3 items-center">
              <span className="flex ">
                <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
                <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
              </span>
              Our Skills
              <span className="flex ">
                <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
                <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
              </span>
            </span>
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Get <span className="text-[#d70e1d]">Professional</span> Services
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 max-md:gap-6 lg:grid-cols-2">
          {/* Left Column - Skills */}
          <div className="space-y-8">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-[#d70e1d]">{skill.percentage}%</span>
                </div>
                <div className="h-3 overflow-hidden bg-gray-100 rounded-full">
                  <div
                    className="h-full bg-[#d70e1d] rounded-full relative"
                    style={{ width: `${skill.percentage}%` }}
                  >
                    <div className="absolute right-0 top-0 w-3 h-3 bg-[#d70e1d] rounded-full border-3 border-gray-100" />
                  </div>
                </div>
              </div>
            ))}

            {/* Awards */}
            <div className="grid grid-cols-1 gap-6 mt-12 max-md:mt-6 md:grid-cols-3">
              {awards.map((award) => (
                <div key={award.title} className="space-y-3 text-center">
                  <div className="w-24 h-24 mx-auto border-2 border-[#d70e1d]/20 rounded-full flex items-center justify-center">
                    <award.icon className="w-10 h-10 text-[#d70e1d]" />
                  </div>
                  <div>
                    <h3 className="font-medium">{award.title}</h3>
                    <p className="text-sm text-gray-500">{award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://techgen-wp.b-cdn.net/wp-content/uploads/2023/05/skill-bg-min.jpg"
                alt="Professional at work"
                className="object-cover w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/*team*/}
      <div className="hidden w-full px-12 pb-16 mx-auto max-md:p-6 max-md:pt-0 nunito">
        {/* Header */}
        <div className="mb-12 max-md:mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg text-[#d70e1d] flex gap-3 items-center">
              <span className="flex ">
                <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
                <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
              </span>
              Media Asia Expertise
              <span className="flex ">
                <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
                <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
              </span>
            </span>
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Expert Team <span className="text-[#d70e1d]">Available</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-4 gap-12 max-md:gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div className="border rounded-md">
            <div className="relative">
              <img
                src="https://techgen-wp.b-cdn.net/wp-content/uploads/2023/05/team-one-4.png"
                alt="crew-image"
                className="object-contain w-full"
              />
              <div className="absolute bottom-0 text-white bg-[#d70e1d]/80 p-2">
                <PlusCircle />
              </div>
            </div>
            <span className="flex flex-col p-6 text-black bg-white rounded-md">
              <h1 className="text-xl font-bold">Name here</h1>
              <p>Title here</p>
            </span>
          </div>
          <div className="border rounded-md">
            <div className="relative">
              <img
                src="https://techgen-wp.b-cdn.net/wp-content/uploads/2023/05/team-one-4.png"
                alt="crew-image"
                className="object-contain w-full"
              />
              <div className="absolute bottom-0 text-white bg-[#d70e1d]/80 p-2">
                <PlusCircle />
              </div>
            </div>
            <span className="flex flex-col p-6 text-black bg-white rounded-md">
              <h1 className="text-xl font-bold">Name here</h1>
              <p>Title here</p>
            </span>
          </div>
          <div className="border rounded-md">
            <div className="relative">
              <img
                src="https://techgen-wp.b-cdn.net/wp-content/uploads/2023/05/team-one-4.png"
                alt="crew-image"
                className="object-contain w-full"
              />
              <div className="absolute bottom-0 text-white bg-[#d70e1d]/80 p-2">
                <PlusCircle />
              </div>
            </div>
            <span className="flex flex-col p-6 text-black bg-white rounded-md">
              <h1 className="text-xl font-bold">Name here</h1>
              <p>Title here</p>
            </span>
          </div>
          <div className="border rounded-md">
            <div className="relative">
              <img
                src="https://techgen-wp.b-cdn.net/wp-content/uploads/2023/05/team-one-4.png"
                alt="crew-image"
                className="object-contain w-full"
              />
              <div className="absolute bottom-0 text-white bg-[#d70e1d]/80 p-2">
                <PlusCircle />
              </div>
            </div>
            <span className="flex flex-col p-6 text-black bg-white rounded-md">
              <h1 className="text-xl font-bold">Name here</h1>
              <p>Title here</p>
            </span>
          </div>
        </div>
      </div>
      {/*testimonials*/}
      <div className="hidden w-full px-12 pb-16 mx-auto max-md:p-6 max-md:pt-0 nunito">
        {/* Header */}
        <div className="mb-16 text-center max-md:mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-lg text-[#d70e1d] flex gap-3 items-center">
              <span className="flex ">
                <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
                <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
              </span>
              Testimonials
              <span className="flex ">
                <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
                <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
              </span>
            </span>
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            <span>What’s The </span>
            <span className="text-[#d70e1d]">Client </span>
            Say
          </h2>
        </div>

        {/* carousel */}
        <div
          className="grid grid-cols-1 gap-12 md:gap-8 carousel slide"
          id="carouselExampleControls"
          data-coreui-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonials.map((process, index) => (
              <React.Fragment key={process.name}>
                {/* testimonial Item */}
                <div
                  className={`relative group carousel-item ${
                    process.name === "Udara Neminda" ? "active" : ""
                  }`}
                >
                  {/* card */}
                  <div className="p-8 md:p-12 max-sm:p-0 max-md:h-[40dvh] h-[30dvh] flex flex-col justify-between">
                    {/* testimonial text*/}
                    <div className="text-lg font-semibold md:text-xl">
                      <p className="text-justify">{process.text}</p>
                    </div>
                    <div>
                      {/* dp Circle */}
                      <div className="relative">
                        <div className="w-10 h-10 mx-auto rounded-full border-1 border-[#d70e1d] flex items-center justify-center">
                          <process.dp className="w-4 h-4 text-[#d70e1d]" />
                        </div>
                      </div>

                      {/* author */}
                      <h3 className="mt-1 text-xl font-bold text-center">
                        {process.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <button
            className="items-end justify-end text-black carousel-control-prev max-md:hidden"
            type="button"
            data-coreui-target="#carouselExampleControls"
            data-coreui-slide="prev"
          >
            <ChevronLeft className="" aria-hidden="true"></ChevronLeft>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="items-end justify-start text-black carousel-control-next max-md:hidden"
            type="button"
            data-coreui-target="#carouselExampleControls"
            data-coreui-slide="next"
          >
            <ChevronRight className="" aria-hidden="true"></ChevronRight>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/*clients*/}
      <div className="hidden w-full px-12 pb-16 mx-auto max-md:pb-6 max-md:px-6 nunito">
        <p className="text-center">Here 10K+ Comapny Have Connceted With Us</p>
        <div className="grid grid-cols-4 gap-6 mt-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div className="flex items-center justify-center bg-gray-300">
            client logo here
          </div>
          <div className="flex items-center justify-center bg-gray-300">
            client logo here
          </div>
          <div className="flex items-center justify-center bg-gray-300">
            client logo here
          </div>
          <div className="flex items-center justify-center bg-gray-300">
            client logo here
          </div>
        </div>
      </div>
      {/*contact form*/}
      <div className="w-full px-12 pb-16 mx-auto max-md:px-6 max-md:pb-6 nunito">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column - Image and Social Icons */}
          <div className="relative max-lg:hidden">
            <img
              src={contact_img}
              alt="Contact representative"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            <div>
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                <span>Contact </span>
                <span className="text-[#d70e1d]">Us Now</span>
              </h2>
              <p className="text-gray-600">
                Certain circumstances and owing to the claims of duty or the
                obligations of business it will frequently occur that pleasures.
              </p>
            </div>

            <form className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 bg-orange-50 rounded-lg pr-[30px]"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 pl-10 rounded-lg bg-orange-50"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-3 pl-10 rounded-lg bg-orange-50"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 pl-10 rounded-lg bg-orange-50"
                  />
                </div>
              </div>

              {/* Service and Budget Fields */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Need Services"
                    className="w-full p-3 pl-10 rounded-lg bg-orange-50"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Budgets"
                    className="w-full p-3 pl-10 rounded-lg bg-orange-50"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  placeholder="Your Message..."
                  rows={4}
                  className="w-full p-3 rounded-lg bg-orange-50"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#d70e1d] to-red-500 text-white py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/*blog posts*/}
      <div className="w-full px-12 pb-16 mx-auto max-md:px-6 max-md:pb-6 nunito">
        {/* Header */}
        <div className="mb-12 text-center max-md:mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="flex ">
              <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
              <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
            </span>
            Recent Updates
            <span className="flex ">
              <span className="w-2 h-2 bg-[#d70e1d] rounded-full z-10"></span>
              <span className="w-2 h-2 -ml-1 bg-black rounded-full"></span>
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            <span className="text-[#d70e1d]">Outdoor </span>Advertising
            Solutions
          </h2>
          <p className="max-md:text-justify max-md:text-sm">
            Premier Full-Service Advertising Agency in Kandy with an Extensive
            and Diverse Portfolio <br />
            <br />
            Media Asia Networks, Sri Lanka's Leading Agency for Comprehensive
            OOH Branding Across Railways, Bus Stands, Roadside Hoardings, Street
            Names, and Premium Billboard Locations.
            <br />
            <br />
            Our reach has expanded to include the railway network and the
            largest bus network across major towns nationwide. By integrating
            outdoor advertising with TV, radio, press, and digital media, our
            expert digital advertising team offers a comprehensive ‘one-stop’
            solution for brands, advertising agencies, and advertisers,
            delivering impactful and cohesive campaigns.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8 max-md:gap-6 md:grid-cols-2">
          {blogs.map((blog) => (
            <div key={blog.id} className="group">
              {/* Image Container */}
              <div className="relative mb-4 overflow-hidden border rounded-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#d70e1d] text-white px-3 py-1 rounded-md">
                  {blog.price}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                {/* Title */}
                <h3 className="text-xl font-bold hover:text-[#d70e1d] transition-colors">
                  {blog.title}
                </h3>

                {/* content */}
                <div className="">
                  <a href="#" className="inline-flex items-center text-justify">
                    <span>{blog.content}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*map*/}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7915.039588434427!2d80.636253!3d7.295345000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3662b0fc6e0c7%3A0x3f5e7c76ac4ac8eb!2s63%2C%20Level%2C%203%20Raja%20Veediya%2C%20Kandy%2020000%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1736836602781!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        className="w-full h-[400px] px-12 max-md:px-6 border-0 mb-16 max-md:mb-6"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Landing;
