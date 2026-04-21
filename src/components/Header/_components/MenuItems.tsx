"use client";
import { Home } from "lucide-react";
import { Tag } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// ======================================================================
function MenuItems() {
    const links = [
    { id: "home", icon: Home, linkName: "الصفحة الرئيسية", href: "/" },
    { id: "categories", icon: ShoppingBag, linkName: "الفئات", href: "/categories" },
    { id: "offers", icon: Tag, linkName: "الخصومات", href: "/offers" },
    { id: "contact", icon: Mail, linkName: "التواصل", href: "/contact" },
  ];
  const pathname = usePathname()
  return (
    <nav>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              title={link.linkName}
              href={link.href}
              className={`flex items-center gap-2 hover:shadow cursor-default mytransition py-2 px-4 rounded-lg 
                ${pathname === link.href ? "bg-linear-to-r to-indigo-500 from-pink-500":"hover:bg-white/5 hover:ring hover:ring-gray-50/20"}`}
            >
              <link.icon />
              {link.linkName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuItems;
