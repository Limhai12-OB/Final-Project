export default function Interest() {
  return (
    <>
      <section className="flex justify-center items-center py-10">
        <main className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl">
          <div
            data-aos="fade-right"
            data-aos-duration="600"
            className="md:col-span-1"
          >
            <h3 className="text-center text-amber-600 uppercase md:text-left font-bold poppin text-3xl md:text-4xl mb-4">
              Interesting?
            </h3>
            <p className="text-lg poppin">
              Come and visit Cambodia! Ancient wonders, vibrant culture, and
              warm smiles await. Explore majestic Angkor, relax on pristine
              beaches, and discover the magic of Southeast Asia. Come and
              experience Cambodia!
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                data-aos="fade-up"
                data-aos-duration="600"
                className="w-full h-auto object-cover rounded-xl"
                src="https://www.gocambodia.tours/wp-content/uploads/2017/07/Respect-gesture-in-Cambodian-greeting.jpg"
                alt="Cambodia 1"
              />
              <img
                data-aos="fade-up"
                data-aos-duration="600"
                className="w-full h-auto object-cover rounded-xl"
                src="https://as2.ftcdn.net/v2/jpg/03/14/33/15/1000_F_314331556_PXVaBeedY6yXSrnG7ygxlCCyx4SI2EfH.jpg"
                alt="Cambodia 2"
              />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="600"
            className="md:col-span-1"
          >
            <img
              className="max-w-full h-auto rounded-2xl mt-5"
              src="https://cdn.vietlongtravel.com/wp-content/uploads/2024/04/Picture1-3.jpg?strip=all&lossy=1&ssl=1"
              alt="Cambodia"
            />
          </div>
        </main>
      </section>
    </>
  );
}
