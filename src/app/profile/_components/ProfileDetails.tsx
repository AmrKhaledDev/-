/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { CameraIcon } from "lucide-react";
import PurchasedProductsList from "./PurchasedProductsList";
import Tabs from "./Tabs";
import { useState } from "react";
import Settings from "./Settings";
// ==========================================================
function ProfileDetails({ products }: { products: any[] }) {
  const [activeTab, setActiveTab] = useState("purchased");
  return (
    <div className="flex items-center flex-col gap-30">
      <div className="relative">
        <div className="w-200 h-90 bg-white/10 ring ring-gray-50/20 rounded-2xl flex items-center justify-center text-white"/>
        <div className="ring cursor-pointer hover:bg-white/20 mytransition ring-gray-50/40 backdrop-blur-2xl bg-white/10 rounded-full size-40 absolute left-1/2 flex items-center justify-center text-white -bottom-20 -translate-x-1/2">
          <CameraIcon className="size-7" />
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "purchased" && (
          <PurchasedProductsList products={products} />
        )}
        {activeTab === "settings" && <Settings />}
      </div>
    </div>
  );
}

export default ProfileDetails;
