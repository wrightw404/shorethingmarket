import Nav from "../components/Nav.js"
import Footer from "../components/Footer.js"
import Image from "next/image.js";
import water from "../public/assets/photos/pumpwater.jpg"



export default function Fuel() {
  return (
    <section className= "bg-gradient-to-b from-mountain-blue to-white">
   <Nav />
   <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <div className="max-w-screen-lg mx-auto py-20 pl-4">
      <Image className="mx-auto rounded-xl" src={water}></Image>
    </div>
      <div className="py-20 text-center">
        <h1 className="text-sedona-orange mb-4 text-4xl font-extrabold tracking-tight leading-none sm:text-3xl md:text-5xl xl:text-6xl">Wacky Wednesday is officially back for the 2023 season!</h1>
        <h2 className="pt-1 text-lg sm:text-sm lg:text-lg xl:text-xl font-semibold">All grades of fuel will be shore price</h2>
        <h4 className="text-sm lg:text-lg xl:text-xl font-semibold py-3">Non ethanol rec fuel shore price every day of the week</h4>
        <h2 className="pt-7 text-2xl sm:text-lg lg:text-2xl xl:text-3xl font-bold">BP fuels with invigorate work to clean your engine and prevent buildup</h2>
        <h2 className="text-xl sm:text-lg lg:text-2xl xl:text-3xl font-bold">BP fuels with invigorate work to clean your engine and prevent buildup</h2>
        <ul className="text-left">
          <li className="text-sm lg:text-lg xl:text-xl py-3">Reg 87</li>
          <li className="text-sm lg:text-lg xl:text-xl py-3">Mid Grade 89</li>
          <li className="text-sm lg:text-lg xl:text-xl py-3">Premium 93</li>
          <li className="text-sm lg:text-lg xl:text-xl py-3">Diesel</li>
          <li className="text-sm lg:text-lg xl:text-xl py-3">Rec Fuel - Non Ethanol 90</li>
        </ul>
        <button className="rounded-full text-sm lg:text-sm xl:text-lg px-2 py-1 bg-sedona-orange hover:bg-mountain-blue hover:scale-75"><a href="https://www.bp.com/en_us/united-states/home/products-and-services/bpme-rewards/bpme-rewards-visa.html" target={"_blank"}>Learn about BPMe Rewards</a></button>
      </div>
    
   </section>
  </section>
);
}