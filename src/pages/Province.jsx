// import { Link } from "react-router";
// import HeaderPage from "../Components/Header";
// import FooterPage from "./Footer";

// export default function AllProvince() {
//   const places = [
//     {
//       name: "Phnom Penh - ភ្នំពេញ",
//       image:
//         "https://images.pexels.com/photos/19063336/pexels-photo-19063336/free-photo-of-park-in-a-city-in-cambodia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     },
//     {
//       name: "Siem Reap - សៀមរាប",
//       image:
//         "https://images.pexels.com/photos/5984848/pexels-photo-5984848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     },
//     {
//       name: "Sihanoukville - ក្រុងសីហនុ",
//       image:
//         "https://images.pexels.com/photos/18259633/pexels-photo-18259633/free-photo-of-traffic-on-a-street-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     },
//     {
//       name: "Kampot - កំពត់",
//       image:
//         "https://media.licdn.com/dms/image/v2/D5622AQFp-IXVTpWX-w/feedshare-shrink_800/feedshare-shrink_800/0/1712584004907?e=2147483647&v=beta&t=svsBikORpyMqgzhVcqYlOLWcvyFaUKOrwi8c7dQ9oTo",
//     },
//     {
//       name: "Battambang - បាត់ដំបង",
//       image: "https://m.tourismcambodia.com/img/600_battambang.jpg",
//     },
//     {
//       name: "Kratie - ក្រចេះ",
//       image:
//         "https://lynanthon.wordpress.com/wp-content/uploads/2018/07/web_301421.jpg",
//     },
//     {
//       name: "Kampong Cham - កំពង់ចាម",
//       image:
//         "https://www.khmerplaces.com/storage/provinces/August2020/SKG2ZykZUT7xz4q6t9kF.jpg",
//     },
//     {
//       name: "Preah Vihear - ព្រះវិហា",
//       image:
//         "https://cdn.getyourguide.com/img/tour/700ae8b14b438cd6.jpeg/146.jpg",
//     },
//     {
//       name: "Ratanakiri - រតនគីរី",
//       image:
//         "https://visitlocaltravel.com/wp-content/uploads/2024/01/Ratanakiri-Tavel-Attractions.png",
//     },
//     {
//       name: "Kompong Speu - កំពង់ស្ពឺ",
//       image:
//         "https://www.asiakingtravel.com/cuploads/files/Kampong-Speu-2(1).jpg",
//     },
//     {
//       name: "Kompong Thom - កំពង់ធំ",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/2/2d/05-Kampong_Thom-nX-6.jpg",
//     },
//     {
//       name: "Kep - កែប",
//       image:
//         "https://pppenglish.sgp1.digitaloceanspaces.com/image/main/field/image/a_birds-eye_view_of_kep_beach_last_april._kep_provincial_administration.jpg",
//     },
//     {
//       name: "Tboung Khmum - ត្បូងឃ្មុំ",
//       image:
//         "https://construction-property.com/wp-content/uploads/2019/07/japan-provides-jpy100-million-for-home-restoration-in-tbong-khmum.jpg",
//     },
//     {
//       name: "Pailin - បៃលិន",
//       image:
//         "https://i0.wp.com/www.cambodialifestyle.com/wp-content/uploads/2024/04/pailin-2.jpg",
//     },
//     {
//       name: "Takeo - តាកែវ",
//       image:
//         "https://www.asiakingtravel.com/cuploads/images/Cambodia/takeo-1.jpg",
//     },
//     {
//       name: "Kompong Chhnang - កំពង់ឆ្នាំង",
//       image:
//         "https://tourismcambodia.org/storage/uploads/category_banner/ministry-of-tourism-cambodia-2020-05-02-09-06-44am.jpg",
//     },
//     {
//       name: "Koh Kong - កេះកុង",
//       image:
//         "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a9/73/f1/song-saa-private-island.jpg?w=600&h=400&s=1",
//     },
//     {
//       name: "PurSat - ពោធិ៍សាត់",
//       image:
//         "https://visitlocaltravel.com/blog/wp-content/uploads/2024/03/Pursat-Province-2.png",
//     },
//     {
//       name: "Banteay Meanchey - បន្ទាយមានជ័យ",
//       image:
//         "https://www.asiakingtravel.com/images/thumbs/2024/08/14943/banteay-meanchey-2_600x315xcrop.webp",
//     },
//     {
//       name: "Stung Treng - ស្ទឹងត្រែង",
//       image:
//         "https://i0.wp.com/www.cambodialifestyle.com/wp-content/uploads/2024/04/Stueng-Treng-3.jpg?fit=1024%2C536&ssl=1",
//     },
//     {
//       name: "Kandal - កណ្ដាល",
//       image:
//         "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/0e/26/e4/t-meditation-centre-of.jpg?w=800&h=800&s=1",
//     },
//     {
//       name: "Prey Veng - ព្រៃវែង",
//       image:
//         "https://pppenglish.sgp1.digitaloceanspaces.com/image/main/field/image/1-preyveng.jpg",
//     },
//     {
//       name: "Oddar Meanchey - ឧត្តរមានជ័យ",
//       image:
//         "https://angkorfocus.com/userfiles/thumbs/new-What%20to%20see%20in%20Oddor%20Meanchey.jpg",
//     },
//     {
//       name: "Mondulkiri - មណ្ឌលគិរី",
//       image:
//         "https://imagecambodia.com/storage/app/uploads/Posts/fd9bd2310780db4126553a34715e2788621e9899/photo_2023-12-11_15-37-27.jpg",
//     },
//   ];
//   return (
//     <>
//       <HeaderPage />
//       <section className="container m-auto">
//         <div class="lg:w-1/2 w-full mb-6 lg:mb-0 mt-10">
//           <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
//             Provinces of Cambodia
//           </h1>
//           <div class="h-1 w-20 bg-blue-500 rounded"></div>
//         </div>
//         <div class="flex flex-wrap -m-4 mt-10">
//           {places.map((place, idx) => (
//             <Link key={idx} class="xl:w-1/4 md:w-1/2 p-4">
//               <div class="bg-gray-100 p-6 rounded-lg">
//                 <img
//                   class="h-40 rounded w-full object-cover object-center mb-6"
//                   src={place.image}
//                   alt="content"
//                 />
//                 <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
//                   SUBTITLE
//                 </h3>
//                 <h1 class="text-lg text-gray-900 font-medium title-font mt-3">
//                   {place.name}
//                 </h1>
//                 <p class="leading-relaxed text-base">
//                   Fingerstache flexitarian street art 8-bit waistcoat.
//                   Distillery hexagon disrupt edison bulbche.
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>
//       <FooterPage />
//     </>
//   );
// }

import { Link } from "react-router";
import HeaderPage from "../Components/Header";
import FooterPage from "./Footer";
// import { useState, useEffect } from "react";

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
    {
      name: "Ratanakiri - រតនគីរី",
      image:
        "https://visitlocaltravel.com/wp-content/uploads/2024/01/Ratanakiri-Tavel-Attractions.png",
    },
    {
      name: "Kompong Speu - កំពង់ស្ពឺ",
      image:
        "https://www.asiakingtravel.com/cuploads/files/Kampong-Speu-2(1).jpg",
    },
    {
      name: "Kompong Thom - កំពង់ធំ",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2d/05-Kampong_Thom-nX-6.jpg",
    },
    {
      name: "Kep - កែប",
      image:
        "https://pppenglish.sgp1.digitaloceanspaces.com/image/main/field/image/a_birds-eye_view_of_kep_beach_last_april._kep_provincial_administration.jpg",
    },
    {
      name: "Tboung Khmum - ត្បូងឃ្មុំ",
      image:
        "https://construction-property.com/wp-content/uploads/2019/07/japan-provides-jpy100-million-for-home-restoration-in-tbong-khmum.jpg",
    },
    {
      name: "Pailin - បៃលិន",
      image:
        "https://i0.wp.com/www.cambodialifestyle.com/wp-content/uploads/2024/04/pailin-2.jpg",
    },
    {
      name: "Takeo - តាកែវ",
      image:
        "https://www.asiakingtravel.com/cuploads/images/Cambodia/takeo-1.jpg",
    },
    {
      name: "Kompong Chhnang - កំពង់ឆ្នាំង",
      image:
        "https://tourismcambodia.org/storage/uploads/category_banner/ministry-of-tourism-cambodia-2020-05-02-09-06-44am.jpg",
    },
    {
      name: "Koh Kong - កេះកុង",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a9/73/f1/song-saa-private-island.jpg?w=600&h=400&s=1",
    },
    {
      name: "PurSat - ពោធិ៍សាត់",
      image:
        "https://visitlocaltravel.com/blog/wp-content/uploads/2024/03/Pursat-Province-2.png",
    },
    {
      name: "Banteay Meanchey - បន្ទាយមានជ័យ",
      image:
        "https://www.asiakingtravel.com/images/thumbs/2024/08/14943/banteay-meanchey-2_600x315xcrop.webp",
    },
    {
      name: "Stung Treng - ស្ទឹងត្រែង",
      image:
        "https://i0.wp.com/www.cambodialifestyle.com/wp-content/uploads/2024/04/Stueng-Treng-3.jpg?fit=1024%2C536&ssl=1",
    },
    {
      name: "Kandal - កណ្ដាល",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/0e/26/e4/t-meditation-centre-of.jpg?w=800&h=800&s=1",
    },
    {
      name: "Prey Veng - ព្រៃវែង",
      image:
        "https://pppenglish.sgp1.digitaloceanspaces.com/image/main/field/image/1-preyveng.jpg",
    },
    {
      name: "Oddar Meanchey - ឧត្តរមានជ័យ",
      image:
        "https://angkorfocus.com/userfiles/thumbs/new-What%20to%20see%20in%20Oddor%20Meanchey.jpg",
    },
    {
      name: "Mondulkiri - មណ្ឌលគិរី",
      image:
        "https://imagecambodia.com/storage/app/uploads/Posts/fd9bd2310780db4126553a34715e2788621e9899/photo_2023-12-11_15-37-27.jpg",
    },
  ];

  return (
    <>
      <div className="">
        <HeaderPage />
      </div>
      <section className="container m-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 mt-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            Provinces of Cambodia
          </h1>
          <div className="h-1 w-20 bg-blue-500 dark:bg-blue-300 rounded"></div>{" "}
        </div>
        <div className="flex flex-wrap -m-4 mt-10">
          {places.map((place, idx) => (
            <Link
              data-aos="fade-right"
              key={idx}
              className="xl:w-1/4 md:w-1/2 p-4 transition duration-300 hover:scale-105 dark:hover:scale-105"
            >
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={place.image}
                  alt="content"
                />
                <h3 className="tracking-widest text-blue-500 dark:text-blue-300 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h1 className="text-lg text-gray-900 dark:text-white font-medium title-font mt-3">
                  {place.name}
                </h1>
                <p className="leading-relaxed text-base text-gray-900 dark:text-gray-400">
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
