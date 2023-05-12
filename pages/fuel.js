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
        <h1 className="text-sedona-orange text-2xl font-extrabold">Welcome to Shore Thing Market</h1>
        <h2 className="py-11 text-lg font-semibold">BPMe Visa Limited Time Offer!</h2>
        <h3 className="px-10"> Receive 50 cents off per gallon for fiat 60 days of having the card. No limit combine with great cash back offers 5% cash back on inside purchases in any BP or Amoco store. Plus 3% cash back on grocery and dining purchases and 1 % cash back on all other purchases.</h3>
        <h4 className="text-sm py-3">After the 60 days period .15 off per gallon</h4>
        <button className="rounded-full text-sm px-2 py-1 bg-sedona-orange hover:bg-mountain-blue hover:scale-75"><a href="https://www.bp.com/en_us/united-states/home/products-and-services/bpme-rewards/bpme-rewards-visa.html" target={"_blank"}>Find Out More</a></button>
      </div>
    
   </section>
  </section>
);
}