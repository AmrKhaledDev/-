import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import {  LayoutDashboard } from "lucide-react";
import Image from "next/image";
import AuthLinks from "./_components/AuthLinks";
import MenuItems from "./_components/MenuItems";
import { GetUserSession } from "@/lib/GetUserSession";
import UserMenu from "./_components/UserMenu";
// ===========================================================
async function Header() {
  const userSession = await GetUserSession();
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
          <div className="flex items-center gap-4">
            {userSession ? (
              <>
                <Link href={"/cart"} className="relative">
                  <ShoppingCart />
                  <span className="absolute -top-2 -right-2 bg-red-500 shadow rounded-full size-4.5 text-sm font-serif flex items-center justify-center  text-white">
                    0
                  </span>
                </Link>
                <UserMenu userSession={userSession} />
                <button className="mr-7 bg-white/15 hover:-rotate-3 ring hover:shadow-xl mytransition cursor-pointer font-bold ring-gray-50/30 py-2 px-6 rounded-md flex items-center gap-2 flex-row-reverse text-sm">
                  لوحة التحكم <LayoutDashboard className="size-5" />
                </button>
              </>
            ) : (
              <AuthLinks />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
