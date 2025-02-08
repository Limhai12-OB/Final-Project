import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import HeaderPage from "./Header";

export default function Head() {
  const places = [
    {
      name: "Phnom Penh - ភ្នំពេញ",
      image:
        "https://images.pexels.com/photos/19063336/pexels-photo-19063336/free-photo-of-park-in-a-city-in-cambodia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Siem Reap - សៀមរាប",
      image:
        "https://images.pexels.com/photos/5984848/pexels-photo-5984848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Sihanoukville - ក្រុងសីហនុ",
      image:
        "https://images.pexels.com/photos/18259633/pexels-photo-18259633/free-photo-of-traffic-on-a-street-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Kampot - កំពត់",
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQFp-IXVTpWX-w/feedshare-shrink_800/feedshare-shrink_800/0/1712584004907?e=2147483647&v=beta&t=svsBikORpyMqgzhVcqYlOLWcvyFaUKOrwi8c7dQ9oTo",
    },
    {
      name: "Battambang - បាត់ដំបង",
      image: "https://m.tourismcambodia.com/img/600_battambang.jpg",
    },
    {
      name: "Kratie - ក្រចេះ",
      image:
        "https://lynanthon.wordpress.com/wp-content/uploads/2018/07/web_301421.jpg",
    },
    {
      name: "Kampong Cham - កំពង់ចាម",
      image:
        "https://www.khmerplaces.com/storage/provinces/August2020/SKG2ZykZUT7xz4q6t9kF.jpg",
    },
    {
      name: "Preah Vihear - ព្រះវិហា",
      image:
        "https://cdn.getyourguide.com/img/tour/700ae8b14b438cd6.jpeg/146.jpg",
    },
  ];

  return (
    <>
      <HeaderPage />
      <section className="py-28 bg-[url('https://images.unsplash.com/photo-1623473882999-2f33d6fc1d09?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-screen bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/65 "></div>

        <div className="max-w-screen-xl mx-auto text-white gap-x-12 mt-44 items-center justify-between md:flex relative z-10">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-2xl  text-white font-medium">
              ខេមបូទ្រីប សូមស្វាគមន៍!
            </h1>
            <h2 className="text-4xl text-white font-extrabold md:text-5xl">
              Welcome to CAMBO-TRIP!!
            </h2>
            <p>
              Embark on unforgettable adventures with us and discover the
              world's hidden gems. Whether you're chasing sunsets on pristine
              beaches, exploring ancient ruins, or trekking through lush
              mountains, we’re here to turn your travel dreams into reality.
              Let’s create memories that last a lifetime—your next great
              adventure starts here
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                href="javascript:void(0)"
                className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 rounded-lg shadow-lg hover:bg-indigo-700"
              >
                Let's get started
              </a>
              <a
                href="javascript:void(0)"
                className="flex items-center justify-center gap-x-2 py-2 px-4 text-white border rounded-lg md:inline-flex hover:bg-white hover:text-gray-900 transition-colors"
              >
                Get access
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img
              src="https://cdn.pixabay.com/photo/2019/10/09/14/14/ankor-wat-4537529_960_720.jpg"
              className="md:rounded-tl-[108px] shadow-2xl"
              alt=""
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Best places in Cambodia!
              </h1>
              <div class="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            {places.map((place, idx) => (
              <Link key={idx} class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src={place.image}
                    alt="content"
                  />
                  <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h1 class="text-lg text-gray-900 font-medium title-font mt-3">
                    {place.name}
                  </h1>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <form className="text-center mt-6 bg-blue-900 w-28 m-auto p-3 rounded-md text-white">
            <Link to={"/province"} className="">
              See More
            </Link>
          </form>
        </div>
      </section>
    </>
  );
}
