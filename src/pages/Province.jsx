import { Link } from "react-router";
import HeaderPage from "../Components/Header";
import FooterPage from "./Footer";

export default function AllProvince() {
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
      <section className="container m-auto">
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
      </section>
      <FooterPage />
    </>
  );
}
