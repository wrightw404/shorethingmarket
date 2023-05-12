import Nav from "../components/Nav.js"
import Footer from "../components/Footer.js"
import Image from "next/image.js";
import whole from "../public/assets/photos/wholeshot.jpg"



export default function Jobs() {
  return (
    <section className= "bg-gradient-to-b from-mountain-blue to-white">
   <Nav />
   
   <section className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden bg-contain lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={whole} className="rounded-xl bg-contain" alt="mockup"></Image>
        </div>
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-sedona-orange pl-10">We Are Always Looking to Hire!</h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl pl-10">Download a PDF of the application to print at home and bring in, or we are more than happy to give you one to fill out in person.</p>
            <div className="pl-10">
            <button className="rounded-full text-sm lg:text-lg xl:text-xl px-2 py-1 bg-sedona-orange hover:bg-mountain-blue hover:scale-75"><a href="/" target={"_blank"}>Application</a></button>
            </div>
           
        </div>       
    </section>

  </section>
);
}