import { Link } from "react-router";
import HeaderPage from "./Header";

import Gallery from "./Gallery";

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

  const scrollToPlaces = (event) => {
    event.preventDefault();
    const sectionPlaces = document.getElementById("sectionPlaces");
    if (sectionPlaces) {
      sectionPlaces.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="py-28 relative bg-[url('https://images.unsplash.com/photo-1623473882999-2f33d6fc1d09?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="-mt-28">
          <HeaderPage />
        </div>
        <div className="max-w-screen-xl mt-56 mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8 relative">
          <div
            data-aos="fade-right"
            className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl "
          >
            <h1 className="text-3xl  text-white font-medium">
              ខេមបូទ្រីប សូមស្វាគមន៍!
            </h1>
            <h2 className="text-4xl text-white font-extrabold md:text-5xl">
              Welcome to CAMBO-TRIP!!
            </h2>
            <p className="text-white">
              Embark on unforgettable adventures with us and discover the
              world's hidden gems. Whether you're chasing sunsets on pristine
              beaches, exploring ancient ruins, or trekking through lush
              mountains, we’re here to turn your travel dreams into reality.
              Let’s create memories that last a lifetime—your next great
              adventure starts here
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <Link
                to={"#"}
                onClick={scrollToPlaces}
                className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Let's get started
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="relative mt-10 h-[500px] md:h-[600px] lg:h-[500px] w-full overflow-hidden"
          >
            <img
              src="https://www.monash.edu/__data/assets/image/0004/837841/angkor.gif"
              alt="Angkor Wat"
              className="object-cover object-center w-full h-full md:rounded-tl-[120px] md:rounded-br-[120px]"
            />
            <div className="absolute inset-0 bg-black/50 md:rounded-tl-[120px] md:rounded-br-[120px]  "></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="mt-92 text-amber-50">
                <span className="flex items-center justify-center">
                  ព្រះរាជាណាចក្រកម្ពុជា
                </span>
                <p className="text-lg md:text-xl lg:text-2xl">
                  Cambodia the wonders of Southeast Asia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main id="sectionPlaces">
        <div
          data-aos="zoom-in-up"
          className="items-center justify-center flex mb-6 lg:mb-0 mt-16"
        >
          <h1 className="gallery sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            វប្បធម៏ខ្មែរ
          </h1>
          <p className="font-bold text-xl"> - Khmer culture</p>
          <div className="w-44 h-1 bg-blue-500 mt-12 flex justify-center items-center absolute rounded"></div>{" "}
        </div>
        <div className="flex justify-center items-center p-36">
          <Gallery />
        </div>
      </main>
      <section>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div data-aos="zoom-in-right" class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Best places in Cambodia!
              </h1>
              <div class="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            {places.map((place, idx) => (
              <Link
                data-aos="fade-right"
                key={idx}
                class="xl:w-1/4 md:w-1/2 p-4 transition duration-300 hover:scale-105 dark:hover:scale-105"
              >
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
          <form className="text-center m-auto mt-6">
            <Link
              to={"/province"}
              className="  bg-blue-900 w-28  p-3 rounded-md text-white"
            >
              See More
            </Link>
          </form>
        </div>
      </section>
    </>
  );
}
