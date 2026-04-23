import { LogIn, UserPlus } from "lucide-react";
import Link from "next/link";
import React from "react";
// ==============================================================
function AuthLinks() {
  const authLinks = [
    {
      id: "login",
      icon: LogIn,
      linkName: "تسجيل الدخول",
      href: "/login",
      style: "ring ring-gray-50/30 bg-white/10 hover:bg-white/20",
    },
    {
      id: "register",
      icon: UserPlus,
      linkName: "انشاء حساب",
      href: "/register",
      style: "bgg-ip sm:flex hidden",
    },
  ];
  return (
    <div className="flex items-center sm:gap-3 gap-1.5">
      {authLinks.map((authLink) => (
        <React.Fragment key={authLink.id}>
          <Link
            title={authLink.linkName}
            href={authLink.href}
            className={`flex items-center gap-1.5 text-center sm:text-[15px] text-xs hover:-rotate-2 flex-row-reverse py-2 px-4 rounded-lg shadow active:scale-95 mytransition 
              ${authLink.style}`}
          >
            {authLink.linkName}
            <authLink.icon className="sm:size-5 size-4"/>
          </Link>
          <span className="h-5 w-[0.5px] bg-white/15 last:hidden rounded-lg sm:block hidden" />
        </React.Fragment>
      ))}
    </div>
  );
}

export default AuthLinks;
