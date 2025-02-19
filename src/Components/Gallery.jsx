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
          <div className="flex flex-wrap  md:w-1/2">
            <div
              data-aos="fade-right"
              data-aos-duration="1300"
              className="md:p-2 p-1 w-full md:w-1/2 aspect-square"
            >
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="/image/martial.jpg"
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1300"
              className="md:p-2 p-1 w-full md:w-1/2 aspect-square"
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
                src="/image/khmer.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-full md:w-1/2">
            <div
              data-aos="fade-left"
              data-aos-duration="1300"
              className="md:p-2 p-1 w-full aspect-square"
            >
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="/image/wall.jpeg"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1300"
              className="md:p-2 p-1 w-full md:w-1/2 aspect-square"
            >
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="/image/apsara.jpg"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1300"
              className="md:p-2 p-1 w-full md:w-1/2 aspect-square"
            >
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="/image/apsaraii.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
