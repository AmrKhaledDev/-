"use client";
import { Home } from "lucide-react";
import { Tag } from "lucide-react";
import { ShoppingBag, Menu } from "lucide-react";
import { Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// ======================================================================
function MenuItems() {
  const links = [
    { id: "home", icon: Home, linkName: "الصفحة الرئيسية", href: "/" },
    {
      id: "categories",
      icon: ShoppingBag,
      linkName: "الفئات",
      href: "/categories",
    },
    { id: "offers", icon: Tag, linkName: "الخصومات", href: "/offers" },
    { id: "contact", icon: Mail, linkName: "التواصل", href: "/contact" },
  ];
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        if (!e.target.closest(".buttonShowMenu, .boxMenu")) setShowMenu(false);
      }
    };
    document.addEventListener("click", handle);
    return () => {
      document.removeEventListener("click", handle);
    };
  }, []);
  return (
    <nav>
      <ul
        className={`flex items-center lg:gap-1 lg:left-0 sm:gap-7 gap-4 boxMenu lg:relative fixed top-0 lg:bg-transparent lg:ring-transparent backdrop-blur-xl sm:w-60 w-50 px-5 lg:w-fit lg:px-0 z-30 lg:justify-start mytransition justify-center lg:flex-row flex-col h-screen lg:h-fit bg-white/5 ring ring-gray-50/10 ${showMenu ? "left-0" : "-left-600"}`}
      >
        {links.map((link) => (
          <li key={link.id} className="w-full lg:w-fit">
            <Link
              title={link.linkName}
              href={link.href}
              className={`flex items-center sm:text-[15px] text-sm w-full lg:w-fit r gap-2 hover:shadow cursor-default mytransition py-2 px-4 rounded-lg 
                ${pathname === link.href ? "bgg-ip" : "hover:bg-white/5 hover:ring hover:ring-gray-50/20"}`}
            >
              <link.icon className="sm:size-6 size-5"/>
              {link.linkName}
            </Link>
          </li>
        ))}
      </ul>
      <Menu className="lg:hidden buttonShowMenu sm:size-6 size-4" onClick={() => setShowMenu(true)} />
    </nav>
  );
}

export default MenuItems;
