import Nav from "../components/Nav.js"
import Footer from "../components/Footer.js"
import Image from "next/image.js";
import alc from "../public/assets/photos/liqour.jpg"
import snack from "../public/assets/photos/snack.jpg"
import dog from "../public/assets/photos/dogtreats.jpg"
import ipa from "../public/assets/photos/ipa.jpg"
import wine from "../public/assets/photos/wine.jpg"



export default function Products() {
  return (
    <section className= "bg-gradient-to-b from-mountain-blue to-white">
   <Nav />
   <section className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-cover">
            <Image src={alc} className="rounded-xl bg-contain" alt="mockup"></Image>
        </div>
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-sedona-orange pl-10">We Have Liqour!</h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white pl-10">Extensive collection of spirits</p>
           
        </div>       
    </section>

    <section className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-sedona-orange">Large Variety of Snacks</h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-cover">
            <Image src={snack} className="rounded-xl bg-contain" alt="mockup"></Image>
        </div>                
    </section>

    <section className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-cover">
            <Image src={ipa} className="rounded-xl bg-contain" alt="mockup"></Image>
        </div>
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-sedona-orange pl-10">Beer Cave and IPA's</h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl pl-10">Large selection of IPA's and Domestic beers</p> 
        </div>       
    </section>

    <section className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-sedona-orange">Wine</h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-cover">
            <Image src={wine} className="rounded-xl bg-contain" alt="mockup"></Image>
        </div>                
    </section>

    <section className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden bg-contain lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={dog} className="rounded-xl bg-contain" alt="mockup"></Image>
        </div>
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-sedona-orange pl-10">We Have Everything You Need</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl pl-10">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
        </div>       
    </section>



  </section>
);
}