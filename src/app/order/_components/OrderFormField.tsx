"use client";

import AlertMessage from "@/components/AlertMessage/AlertMessage";
import { Dispatch, SetStateAction } from "react";
// ===========================================================
function OrderFormField({
  placeholder,
  value,
  onChange,
  type,
  error,
}: {
  placeholder: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  type: string;
  error: undefined | string | null;
}) {
  return (
    <div className="w-full flex flex-col gap-1">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border placeholder:text-gray-300 hover:border-gray-50/30 bg-white/5 hover:bg-white/25 border-gray-50/20 py-2 px-3 w-full focus:bg-white/25 rounded-md outline-none focus:border-gray-50/30 cursor-pointer mytransition"
        type={type}
        placeholder={placeholder}
      />
      {error && <AlertMessage type="error" message={error} />}
    </div>
  );
}

export default OrderFormField;
