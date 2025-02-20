export default function Gallery() {
  return (
    <>
      {/* <section>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2 ">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://www.thoughtco.com/thmb/d3tc6F4dGL_klx1xS7zc-stJUSU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/east_gate_angkor-thom-56b3b77b5f9b5829f82c1e6e.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="https://cdnuploads.aa.com.tr/uploads/Contents/2016/06/13/thumbs_b_c_cf84bab611c84d0ffe6069c19bbe6119.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="/image/khmer.jpg"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="/image/wall.jpeg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="/image/apsara.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="/image/apsaraii.jpg"
              />
            </div>
          </div>
        </div>
      </section> */}
      <section className="gallery">
        <div className="flex flex-wrap ">
          <div className="flex flex-wrap  sm:w-1/2 ">
            <div
              data-aos="fade-right"
              data-aos-duration="1300"
              className="md:p-2 p-1 w-full sm:w-1/2 aspect-square"
            >
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://www.khmertimeskh.com/wp-content/uploads/2018/10/P12-13-pix-2.jpg"
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1300"
              className="md:p-2 p-1 w-full sm:w-1/2 aspect-square"
            >
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://cdnuploads.aa.com.tr/uploads/Contents/2016/06/13/thumbs_b_c_cf84bab611c84d0ffe6069c19bbe6119.jpg"
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1300"
              className="md:p-2 p-1 w-full aspect-square"
            >
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYpapsy6XaIShnrVHlQcFyOWnoIJrhcTGkpmAfaEmDVN-BTTYcZcjvMxLihUwVTFrBa2W46rGXRhhawY1aCf5uGK9uvKr8yFq3YkPfHHQ4XxrwVqHNCD7hFF5ZR3U8TOqLGwJKZT1Jf6M/s1600/430680_259346267472862_383078239_n.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-full sm:w-1/2">
            <div
              data-aos="fade-left"
              data-aos-duration="1300"
              className="md:p-2 p-1 w-full aspect-square"
            >
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://www.khmertimeskh.com/wp-content/uploads/2017/11/7_TOP_Side.jpg"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1300"
              className="md:p-2 p-1 w-full sm:w-1/2 aspect-square"
            >
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://www.boreiangkor.com/wp-content/uploads/2023/12/trandictional-khmer-band.jpg"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1300"
              className="md:p-2 p-1 w-full sm:w-1/2  aspect-square"
            >
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://pppenglish.sgp1.digitaloceanspaces.com/image/main/20245/10_5_2024_grandma_apsara.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
