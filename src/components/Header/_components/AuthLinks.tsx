import { LogIn, UserPlus } from "lucide-react";
import Link from "next/link";
import React from "react";
// ==============================================================
function AuthLinks() {
  const authLinks = [
    { id: "login", icon: LogIn, linkName: "تسجيل الدخول", href: "" },
    { id: "register", icon: UserPlus, linkName: "انشاء حساب", href: "" },
  ];
  return (
    <div className="flex items-center gap-3">
      {authLinks.map((authLink) => (
        <React.Fragment key={authLink.id}>
          <Link
            title={authLink.linkName}
            href={authLink.href}
            className={`flex items-center gap-1.5 flex-row-reverse py-2 px-4 rounded-lg shadow bg-white/20 hover:bg-white/25 active:scale-95 mytransition ${authLink.linkName === "انشاء حساب" && "bg-linear-to-r from-indigo-500 to-pink-500"}`}
          >
            {authLink.linkName}
            <authLink.icon size={20} />
          </Link>
          <span className="block h-5 w-[0.5px] bg-white/15 last:hidden rounded-lg" />
        </React.Fragment>
      ))}
    </div>
  );
}

export default AuthLinks;
