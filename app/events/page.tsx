import React from "react";

type Props = {};

const Events = (props: Props) => {
  const events = [
    {
      date: "15",
      month: "March",
      heading: "FEATURED",
      title: "Webinar on Career Development",
      location: "Virtual",
      image: "/image1.png",
      description:
        "An insightful webinar with industry experts discussing career growth and skill development.",
    },
    {
      date: "20",
      month: "July",
      heading: "FEATURED",
      title: "Annual Alumni Meet 2024",
      location: "JNV Campus, New Delhi",
      image: "/image2.png",
      description:
        "Reconnect with old friends, network with fellow alumni, and participate in engaging sessions and activities.",
    },
    {
      date: "25",
      month: "July",
      heading: "FEATURED",
      title: "Monthly Networking Meet-Up",
      location: "JNV Campus",
      image: "/image3.png",
      description:
        "An informal gathering for local alumni to network and socialize.",
    },
    {
      date: "17",
      month: "Aug",
      heading: "FEATURED",
      title: "Scholarship Fundraising Drive",
      location: "Virtual",
      image: "/image4.png",
      description:
        "Help us raise funds for scholarships for deserving JNV students. Your contributions can change lives.",
    },
    {
      date: "10",
      month: "Sept",
      heading: "FEATURED",
      title: "Alumni Sports Meet",
      location: "Sports Ground",
      image: "/image5.png",
      description:
        "Events included football, basketball, and athletics, fostering team spirit and camaraderie.",
    },
    {
      date: "04",
      month: "Oct",
      heading: "FEATURED",
      title: "Community Service Day",
      location: "Various Locations",
      image: "/image6.png",
      description:
        "Activities include environmental clean-ups, educational workshops, and health camps.",
    },
  ];

  return (
    <div className="eventcontainer">
      <div
        className="relative w-full  bg-cover bg-center h-80 sm:bg-cover sm:bg-center  sm:h-96 xs:bg-cover xs:bg-center xs:h-90"
        style={{
          backgroundImage: "url(/event.png)",
          backgroundPosition: "center 80%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1
            className="text-5xl font-bold sm:mb-14 sm:text-6xl xs:text-xl text-[#000AA0]"
          >
            Alumni Events
          </h1>
          <div className=" flex flex-col sm:flex-row sm:justify-center">
            <button className="bg-yellow-500 rounded-md text-white px-4 py-2 mb-2 sm:mr-2 sm:mb-0 hidden sm:block">
              Host Event
            </button>

            <button className="bg-yellow-500 rounded-md text-white px-4 py-2 mb-2 sm:mr-2 sm:mb-0 hidden sm:block">
              Check Upcoming Events
            </button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-4 py-8 min-h-screen items-center justify-center">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-[#e7edfd] shadow-md border-l-8 border-yellow-400 overflow-hidden mb-6"
          >
            {/* Date Section (Desktop View) */}
            <div
              className="hidden md:flex flex-col items-center justify-center w-1/5 p-4"
              style={{ backgroundColor: "#e7edfd", color: "#7a0019" }}
            >
              <div className="text-5xl font-bold">{event.date}</div>
              <div className="text-sm text-gray-500">{event.month}</div>
              <div className="w-11 h-1 bg-yellow-500 mt-1"></div>
            </div>

            {/* Content Section */}
            <div className="p-4 w-full md:w-2/3">
              <div
                className="font-bold text-base mb-2 md:mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {event.heading}
              </div>
              <div
                className="text-lg md:text-3xl mb-2 md:mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {event.title}
              </div>
              <div
                className="flex items-center mb-2"
                style={{ color: "#7a0019", fontFamily: "Poppins, sans-serif" }}
              >
                <img
                  src="/location.svg"
                  alt="Location"
                  className="w-4 h-4 mr-2"
                />
                <div className="text-sm md:text-base font-semibold">
                  {event.location}
                </div>
              </div>
              <p
                className="text-base md:text-lg mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {event.description}
              </p>
              <button className="text-base" style={{ color: "#7a0019" }}>
                Read more
              </button>
            </div>

            {/* Image Section (Desktop View) */}
            <div className="hidden md:block w-1/3 p-4">
              <img
                src={event.image}
                alt="Event"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Mobile View adjustments */}
            <div className="md:hidden flex w-full justify-end p-4">
              <div className="text-xl font-bold mr-2">{event.date}</div>
              <div className="text-sm text-gray-500">{event.month}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
