import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { User2 } from "lucide-react";
import Image from "next/image";
import AuthLinks from "./_components/AuthLinks";
import MenuItems from "./_components/MenuItems";
// ===========================================================
function Header() {
  return (
    <header className="bg-linear-to-r py-2 to-indigo-900 from-pink-900 z-50 text-white sticky top-0 shadow border-b border-b-gray-50/20">
      <div className="mycontainer flex items-center justify-between">
        <Link
          title="لُقطة"
          href={"/"}
          className="flex items-center gap-1 text-xl"
        >
          <Image src={"/store-logo.png"} alt="logo" width={80} height={80} />
        </Link>
        <div className="flex items-center gap-5">
          <MenuItems />
          <div className="flex items-center gap-3">
            {/* <Link href={"/"} className="relative">
              <ShoppingCart />
              <span className="absolute -top-2 -right-2 bg-red-500 shadow rounded-full size-4.5 text-sm font-serif flex items-center justify-center  text-white">
                0
              </span>
            </Link>
            <Link href={""} className="bg-pink-500 rounded-full p-2">
              <User2 />
            </Link> */}
            <AuthLinks />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
