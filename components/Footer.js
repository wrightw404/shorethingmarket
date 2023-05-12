import Nav from "../components/Nav.js"
import Footer from "../components/Footer.js"
import Image from "next/image.js";
import whole from "../public/assets/photos/allinside.jpg"
import fb from "../public/assets/logo/fb.svg"



export default function Contact() {
  return (
    <section className= "bg-gradient-to-b from-mountain-blue to-white">
   <Nav />
   <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <div className="max-w-screen-lg mx-auto py-20 pl-4">
      <Image className="mx-auto rounded-xl" src={whole}></Image>
    </div>
      <div className="py-20 text-center">
        <h1 className="text-sedona-orange mb-4 text-4xl font-extrabold tracking-tight leading-none sm:text-3xl md:text-5xl xl:text-6xl ">Different Ways to Reach Us</h1>
        <h2 className="py-11 text-lg sm:text-sm xl:text-xl font-bold">BPMe Visa Limited Time Offer!</h2>
        <ul className="text-center">
          <li>Address: 8751 Dixie Hwy Fair Haven, MI 48023</li>
          <li>Phone: 586 273-7922</li>
         


          <li><Image className="hover:text-sedona-orange hover:scale-125 content-center" target={"_blank"} href="https://www.facebook.com/shorethingmarket/" src={fb} width={25} height={25}></Image></li>
<li><Image src={fb} width='25' height='25' className="py-2"></Image>Facebook</li>
        </ul>
      </div>
    
   </section>
  </section>
);
}