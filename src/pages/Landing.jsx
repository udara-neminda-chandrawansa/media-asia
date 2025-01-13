import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, CircleCheck } from "lucide-react";

function Landing() {
  const services = [
    { id: 1, title: "Technology." },
    { id: 2, title: "Marketing & Sales." },
    { id: 3, title: "Human Resources." },
    { id: 4, title: "Business Strategy." },
    { id: 5, title: "Management." },
    { id: 6, title: "Financial Advisory." },
  ];

  const cards = [
    {
      title: "Management",
      description: "Efficiently leading and guiding for optimal results.",
      icon: "🔥",
    },
    {
      title: "Technology",
      description: "Driving progress with cutting-edge technology.",
      icon: "⚙️",
    },
    {
      title: "Finance",
      description: "Managing money and financial activities effectively.",
      icon: "💰",
    },
    {
      title: "Business Strategy",
      description: "Strategic planning for achieving business objectives.",
      icon: "🧠",
    },
  ];

  const [visibleCards, setVisibleCards] = useState(cards);
  const [selectedCard, setSelectedCard] = useState(0);

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.matchMedia("(max-width: 767px)").matches) {
        setVisibleCards(cards.slice(0, 1));
      } else if (window.matchMedia("(max-width: 1023px)").matches) {
        setVisibleCards(cards.slice(0, 2));
      } else {
        setVisibleCards(cards.slice(0, 3));
      }
    };

    window.addEventListener("resize", checkScreenWidth);

    checkScreenWidth();

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  // in the events of selectedCard becoming 0 or 4 (must trigger carousel movement)
  useEffect(() => {
    if (selectedCard === 3) {
      setVisibleCards(cards.slice(1, 4));
    } else if (selectedCard === 0) {
      setVisibleCards(cards.slice(0, 3));
    }
  }, [selectedCard]);

  return (
    <div
      className="relative min-h-[85dvh] bg-cover bg-center nunito"
      style={{
        backgroundImage: `url(${"https://techgen-wp.b-cdn.net/wp-content/uploads/2023/05/image-two-1.jpg"})`,
      }}
    >
      {/* Backdrop */}
      <div className="absolute w-full h-full bg-black opacity-70"></div>
      {/* Hero Content */}
      <div className="px-12 py-16 max-sm:py-6 max-sm:px-6 h-[60dvh] flex items-center">
        <div className="grid gap-12 xl:grid-cols-2">
          <div className="relative z-10 flex flex-col gap-6">
            <h1 className="text-6xl font-bold leading-tight text-white max-md:text-5xl max-sm:text-4xl">
              Business Growing
              <br />
              With <span className="text-[#d70e1d]">Technology</span>
            </h1>

            <div className="grid grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center max-xl:w-[300px] max-md:w-fit"
                >
                  <div className="text-[#d70e1d] mr-3">
                    <CircleCheck />
                  </div>
                  <span className="text-white max-sm:text-sm">
                    {service.title}
                  </span>
                </div>
              ))}
            </div>

            <button className="px-6 py-3 w-fit text-[#d70e1d] transition-colors bg-transparent border border-[#d70e1d] rounded-md hover:bg-[#d70e1d] hover:text-white">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="absolute bottom-0 left-0 right-0 bg-transparent cursor-pointer">
        <div className="px-12 pb-8 mx-auto max-sm:pb-6 max-sm:px-6 max-w-7xl">
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {visibleCards.map((card, index) => (
              <div
                key={card.title}
                id={card.title}
                className={`p-6 flex items-center gap-6 transition-all rounded-lg ${
                  index === selectedCard
                    ? "bg-[#d70e1d] text-white"
                    : "bg-white"
                }`}
                onClick={() => setSelectedCard(index)}
              >
                <div className="text-3xl">{card.icon}</div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{card.title} - {index}</h3>
                  <p className="text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-0 pl-6 max-sm:pl-1 bottom-[70px] max-md:bottom-[60px] max-sm:hidden">
        <button
          className="p-2 transition-colors bg-gray-200 rounded-full hover:bg-gray-300"
          onClick={() =>
            selectedCard !== 0 ? setSelectedCard(selectedCard - 1) : setSelectedCard(0)
          }
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute right-0 pr-6 max-sm:pr-1 bottom-[70px] max-md:bottom-[60px] max-sm:hidden">
        <button
          className="p-2 transition-colors bg-gray-200 rounded-full hover:bg-gray-300"
          onClick={() =>
            selectedCard !== 3 ? setSelectedCard(selectedCard + 1) : setSelectedCard(2)
          }
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Social Media Links */}
      <div className="fixed flex flex-col gap-3 -translate-y-1/2 right-12 top-1/2 max-md:hidden">
        <a
          href="https://www.linkedin.com"
          className="flex items-center justify-center w-10 h-10 transition-all delay-75 bg-white rounded-full shadow-lg cursor-pointer hover:bg-[#d70e1d] hover:text-white"
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
          className="flex items-center justify-center w-10 h-10 transition-all delay-75 bg-white rounded-full shadow-lg cursor-pointer hover:bg-[#d70e1d] hover:text-white"
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
          className="flex items-center justify-center w-10 h-10 transition-all delay-75 bg-white rounded-full shadow-lg cursor-pointer hover:bg-[#d70e1d] hover:text-white"
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
          className="flex items-center justify-center w-10 h-10 transition-all delay-75 bg-white rounded-full shadow-lg cursor-pointer hover:bg-[#d70e1d] hover:text-white"
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
  );
}

export default Landing;
