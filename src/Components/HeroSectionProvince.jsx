import HeaderPage from "./Header";

export default function HeroSectionProvince() {
  return (
    <>
      <div className="relative bg-[url('/image/temple.jpg')] bg-cover h-screen bg-center">
        <div className="absolute inset-0 bg-black/40 "></div>
        <HeaderPage />
      </div>
    </>
  );
}
