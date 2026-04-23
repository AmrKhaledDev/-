"use client";

import { Dispatch, SetStateAction } from "react";

// ========================================================
function ProfileFormField({
  type,
  placeholder,
  value,
  onChange,
}: {
  type: "number" | "text" | "password" | "email";
  placeholder: string;
  value: string | number | null;
  onChange?: Dispatch<SetStateAction<string>>;
}) {
  return (
    <input
      value={value || ""}
      disabled={type === "email"}
      className={`border border-gray-50/20 outline-none py-2 px-4 rounded-md text-white mytransition focus:border-gray-50/40 w-125 disabled:text-gray-500 disabled:border-gray-50/10`}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default ProfileFormField;
