import Head from "next/head.js";
import Nav from "../components/Nav.js"
import Footer from "../components/Footer.js"
import Image from "next/image.js";
import whole from "../public/assets/photos/wholeshot.jpg"



export default function Home() {
  return (
    <section className="bg-white">
   <Nav />
   <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <div className="max-w-screen-lg mx-auto py-20">
      <Image className="mx-auto drop-shadow-lg" src={whole}></Image>
    </div>
      <div className="py-20 text-center">
        <h1 className="text-dark-green text-2xl font-extrabold">Welcome to Shore Thing Market</h1>
        <h2></h2>
      </div>
    <div>

    </div>
   </section>
  </section>
);
}