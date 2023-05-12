import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/photos/stm.jpeg";

export default function Nav() {
  return (
    <div className="sticky top-0 w-full h-20 shadow-lg shadow-dark-red z-50 font-semibold">
      <div className="flex justify-between items-center w-full h-full px-2 2-xl:px-16">
        <a href="/">
          <Image
            src={Logo}
            alt="logo"
            width="90"
            height="90"
            className="hover:scale-75 rounded-xl pl-5"
          />
        </a>
        <ul className="flex flex-wrap items-center justify-end text-xl">
          <li className="px-3 text-dark-green hover:text-light-green hover:scale-75">
            <Link href="/">Home</Link>
          </li>
          <li className="px-3 text-dark-green hover:text-light-green hover:scale-75">
            <Link href="/about">Fuel</Link>
          </li>
          <li className="px-3 text-dark-green hover:text-light-green hover:scale-75">
            <Link href="/projects">Products</Link>
          </li>
          <li className="px-3 text-dark-green hover:text-light-green hover:scale-75">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="px-3 text-dark-green hover:text-light-green hover:scale-75">
            <Link href="/contact">Jobs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}