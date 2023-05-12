import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/photos/stm.jpeg";

export default function Nav() {
  return (
    <div className="bg-white sticky top-0 w-full h-20 shadow-xl shadow-clay-red z-50 font-semibold">
      <div className="flex justify-between items-center w-full h-full px-2 2-xl:px-16">
        <a href="/">
          <Image
            src={Logo}
            alt="logo"
            width="75"
            height="75"
            className="hover:scale-75 rounded-xl"
          />
        </a>
        <ul className="flex flex-wrap items-center justify-end text-xl">
          <li className="px-3 text-sedona-orange hover:scale-75">
            <Link href="/">Home</Link>
          </li>
          <li className="px-3 text-sedona-orange hover:scale-75">
            <Link href="/fuel">Fuel</Link>
          </li>
          <li className="px-3 text-sedona-orange hover:scale-75">
            <Link href="/products">Products</Link>
          </li>
          <li className="px-3 text-sedona-orange hover:scale-75">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="px-3 text-sedona-orange hover:scale-75">
            <Link href="/jobs">Jobs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}