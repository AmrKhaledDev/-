"use client";

import { useEffect, useState } from "react";
import ProfileFormField from "./ProfileFormField";
import { GetUserSession } from "@/lib/GetUserSession";
import { User } from "@prisma/client";
// ===================================================================================
function Settings() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const FETCH_USER_SESSION = async () => {
      const userSession = await GetUserSession();
      setUser(userSession);
    };
    FETCH_USER_SESSION();
  }, []);
  return (
    <form className="flex flex-col gap-2">
      <ProfileFormField
        type="text"
        placeholder="الاسم"
        value={user && user.name}
      />
      <ProfileFormField
        type="email"
        placeholder="البريد الالكتروني"
        value={user && user.email}
      />
      <div className="text-white flex items-center gap-5 py-3">
        <h2>كلمة السر : ********</h2>
        <button className="text-white mytransition hover:bg-white/15 ring ring-gray-50/20 bg-white/5 py-2 px-6 text-xs cursor-pointer rounded-md">
          تغيير كلمة السر
        </button>
      </div>
      <ProfileFormField
        type="number"
        placeholder="رقم الهاتف"
        value={user && Number(user.phone)}
      />
      <ProfileFormField
        type="text"
        placeholder="العنوان"
        value={user && user.address && user.address}
      />
      <ProfileFormField
        type="text"
        placeholder="المدينة"
        value={user && user.city && user.city}
      />
      <ProfileFormField
        type="text"
        placeholder="البلد"
        value={user && user.country && user.country}
      />
      <button className="text-white bg-cyan-600 py-2 rounded-md cursor-pointer mt-5 mytransition hover:bg-cyan-700 shadow">
        حفظ
      </button>
    </form>
  );
}

export default Settings;
