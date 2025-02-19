export default function VisitUs() {
  return (
    <>
      <section className="grid  2xl:grid-cols-2 xl:grid-cols-1  w-full  place-items-center md:h-[1300px] sm:h-[1500px] relative bg-cover bg-center bg-[url('https://plus.unsplash.com/premium_photo-1734629912367-9085a30f3512?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative ">
          {/* reason (left side) */}
          <h1
            data-aos="fade-right"
            data-aos-duration="1300"
            className="md:text-4xl sm:text-3xl  mt-8 -ml-32
             text-xl sm:mt-16 sm:ml-10   font-bold text-white"
          >
            <p className="md:text-5xl md:-ml-27 sm:-ml-7 ml-45 ">ហេតុអ្វី</p>
            <h3 className="md:mt-3 md:text-4xl sm:text-2xl sm:-ml-7 md:-ml-28 ml-40   flex">
              Why Visit{" "}
            </h3>
            <h3 className="text-blue-600 md:text-9xl md:ml-3 sm:ml-16  md:-mt-28 sm:-mt-17 sm:text-7xl ml-60 -mt-13 text-5xl absolute">
              Ca<m className="text-red-500 uppercase">mbod</m>ia
            </h3>{" "}
          </h1>
          <main
            data-aos="fade-up-right"
            data-aos-duration="1300"
            className="md:ml-20 cursor-pointer md:w-[330px] mt-4 "
          >
            <div
              className="bg-slate-200 w-[330px] hover:bg-blue-600 hover:text-white duration-500 transition 
            ease-in-out  md:p-4 p-2 rounded-tr-3xl rounded-md mt-4 shadow-lg"
            >
              <h2 className="font-bold p md:text-2xl material-symbols-outlined">
                The Culture - វប្បធម៏
              </h2>
            </div>
            <div
              className="bg-slate-200 md:p-4 p-2 hover:bg-blue-600 hover:text-white duration-500 transition 
            ease-in-out rounded-tr-3xl rounded-md mt-4 shadow-lg"
            >
              <h2 className="font-bold p md:text-2xl">
                The Nature​ - ធម្មជាតិ
              </h2>
            </div>
            <div
              className="bg-slate-200 md:p-4 p-2 hover:bg-blue-600 hover:text-white duration-500 transition 
            ease-in-out rounded-tr-3xl rounded-md mt-4 shadow-lg"
            >
              <h2 className="font-bold p md:text-2xl">
                Friendly People - ប្រជាជន
              </h2>
            </div>
            <div
              className="bg-slate-200 md:p-4 p-2 hover:bg-blue-600 hover:text-white duration-500 transition 
            ease-in-out rounded-tr-3xl rounded-md mt-4 shadow-lg"
            >
              <h2 className="font-bold md:text-2xl p">Khmer Foods - ម្ហូប</h2>
            </div>
          </main>
        </div>
        <div>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 sm:mt-5 gap-3 p-10 relative">
            {/* Add some image to support the idea (right side) */}
            <img
              data-aos="fade-right"
              data-aos-duration="1300"
              className="object-cover  md:h-[200px] sm:h-[250px] rounded-[10px] md:rounded-tl-[30px] md:rounded-tr-[20px] col-span-2 w-full"
              src="https://ic.pics.livejournal.com/pushpitha/50334853/1020595/1020595_original.jpg"
              alt=""
            />

            <img
              data-aos="fade-left"
              data-aos-duration="1300"
              className="bg-center w-full object-cover bg-cover md:h-[200px] sm:h-[250px] h-[250px] md:rounded-tr-[30px]  rounded-[10px]  "
              src="https://media.istockphoto.com/id/907232242/photo/group-of-happy-cambodian-children-riding-ox-cart-cambodia.jpg?s=612x612&w=0&k=20&c=IM6iqLSbIhKTTnuMgHiuvwl21FcIsC9aPkqbX6MsDvc="
              alt=""
            />
            <img
              data-aos="fade-right"
              data-aos-duration="1300"
              className="bg-center w-full object-cover bg-cover h-[250px] rounded-[10px] "
              src="https://www.gocambodia.tours/wp-content/uploads/2018/11/Cambodian-People-are-Shy-and-honest-characteristics-of-cambodian-people.jpg"
              alt=""
            />
            <img
              data-aos="fade-left"
              data-aos-duration="1300"
              className="object-cover col-span-2 h-[250px] w-full rounded-[10px] "
              src="https://asiantrails.b-cdn.net/wp-content/uploads/2023/10/cambodia-bon-om-touk-water-festival-dragon-boat-race-pixabay-7189354-e1696904789797.jpg"
              alt=""
            />
            <img
              data-aos="fade-right"
              data-aos-duration="1300"
              className="object-cover object-top md:col-span-2 sm:col-span-3 h-[200px] md:rounded-bl-[30px] md:rounded-br-[10px] w-full rounded-[10px] "
              src="https://pppenglish.sgp1.digitaloceanspaces.com/image/main/20247/9_7_2024_9_7_2024_angkor_wat_phnom_penh_post.jpg"
              alt=""
            />
            <img
              data-aos="fade-left"
              data-aos-duration="1300"
              className="object-cover   md:col-span-1 sm:col-span-3 h-[200px] md:rounded-bl-[10px] md:rounded-br-[30px] w-full rounded-[10px]"
              src="https://nowboarding.changiairport.com/content/dam/canowboarding/homepage-carousel/travel-guide-cambodia-phnom-penh/aerial-view-royal-palace-of-phnom-penh-cambodia-1920x1080.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
