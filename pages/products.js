import Nav from "../components/Nav.js"
import Footer from "../components/Footer.js"
import Image from "next/image.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import alc from "../public/assets/photos/liqour.jpg"
import snack from "../public/assets/photos/snack.jpg"
import dog from "../public/assets/photos/dogtreats.jpg"
import ipa from "../public/assets/photos/ipa.jpg"
import wine from "../public/assets/photos/wine.jpg"
import beercave from "../public/assets/photos/beercave.jpg"
import beercave2 from "../public/assets/photos/beercave2.jpg"
import c4 from "../public/assets/photos/c4.jpg"
import cap from "../public/assets/photos/cap.jpg"
import coffee from "../public/assets/photos/coffee.jpg"
import freal from "../public/assets/photos/freal.jpg"
import ice from "../public/assets/photos/ice.jpg"
import hat from "../public/assets/photos/hat.jpg"
import otherbeer from "../public/assets/photos/otherbeer.jpg"
import otherbeer2 from "../public/assets/photos/otherbeer2.jpg"
import pastry from "../public/assets/photos/pastry.jpg"
import stackbeer from "../public/assets/photos/stackbeer.jpg"
import topo from "../public/assets/photos/topo.jpg"
import wine2 from "../public/assets/photos/wine2.jpg"






export default function Products() {
  return (
    <section className= "bg-gradient-to-b from-mountain-blue to-white">
   <Nav />
   <div className="py-11 text-center">
   <h1 className="text-sedona-orange mb-4 text-4xl font-extrabold tracking-tight leading-none sm:text-3xl md:text-5xl xl:text-6xl ">We Gurantee We Have What You're Looking For</h1>
   <h3 className="px-10 sm:text-sm xl:text-xl"> From groceries to motor oil, we have it all!</h3>
  </div>
  <div className="slider-container">
   <Carousel className="py-5 m-auto pl-11 content-center justify-center flex rounded-xl" width='50%' centerMode={true} showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true} showArrows={true} swipeable={true} dynamicHeight={true}>
                <div>
                    <Image src={alc} height='200' width='400'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <Image src={snack}  height='200' width='400' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <Image src={coffee}  height='200' width='400'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <Image src={freal}  height='200' width='400' />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <Image src={ice}  height='200' width='400'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <Image src={beercave}  height='200' width='400'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <Image src={beercave2}  height='200' width='400'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <Image src={stackbeer}  height='200' width='400'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <Image src={otherbeer}  height='200' width='400'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <Image src={otherbeer2}  height='200' width='400'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <Image src={topo}  height='200' width='400'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <Image src={ipa}  height='200' width='400'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <Image src={wine2}  height='200' width='400'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <Image src={wine}  height='200' width='400'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <Image src={c4}  height='200' width='400'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <Image src={cap}  height='200' width='400'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <Image src={pastry} height='200' width='400' />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <Image src={dog}  height='200' width='400'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <Image src={hat}  height='200' width='400'/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
            

           

    


  </section>
);
}
