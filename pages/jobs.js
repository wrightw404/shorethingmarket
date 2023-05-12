import Nav from "../components/Nav.js"
import Footer from "../components/Footer.js"
import Image from "next/image.js";
import whole from "../public/assets/photos/allinside.jpg"



export default function Jobs() {
  return (
    <section className= "bg-gradient-to-b from-mountain-blue to-white">
   <Nav />
   <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <div className="max-w-screen-lg mx-auto py-20 pl-4">
      <Image className="mx-auto rounded-xl" src={whole}></Image>
    </div>
      <div className="py-20 text-center">
        <h1 className="text-sedona-orange text-2xl font-extrabold">Welcome to Shore Thing Market</h1>
        <h2></h2>
      </div>
    <div>

    </div>
   </section>
  </section>
);
}