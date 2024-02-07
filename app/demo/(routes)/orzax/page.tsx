import { Search, ShoppingCart, User } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Orzax | Product Details",
  description: "Orzax product details page example",
};

export default function Orzax() {
  return (
    <div className="w-full flex flex-col">
      <Accountment />
      <Header />
    </div>
  );
}

const Accountment = () => {
  return (
    <div className="w-full bg-[#74BB1F] text-white h-[35px] flex items-center justify-center">
      <div className="max-w-[1200px] w-full grid grid-cols-3 text-center px-2">
        <span>Worldwide shipping</span>
        <span>Money-back guarantee</span>
        <span>Free shipping over 29$</span>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="w-full sticky top-0 shadow-lg bg-white text-black h-[62px] flex items-center justify-center">
      <div className="max-w-[1200px] w-full flex items-center px-2">
        <div className="mr-[90px]">
          <Image
            src="https://orzax.com/wp-content/uploads/2023/11/Orzax_Logo_2Coloured-1024x311.png.webp"
            alt="orzax logo"
            width={140}
            height={42}
          />
        </div>
        <div className="pl-5">
          <ul className="flex gap-2 text-sm">
            <li className="px-4 py-2">Home</li>
            <li className="px-4 py-2">Products</li>
            <li className="px-4 py-2">Learn</li>
            <li className="px-4 py-2">About</li>
          </ul>
        </div>
        <div className="ml-auto mr-2">
          <ul className="flex gap-5">
            <li>
              <Search />
            </li>
            <li>
              <User />
            </li>
            <li>
              <ShoppingCart />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
