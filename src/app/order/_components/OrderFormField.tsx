"use client";

import AlertMessage from "@/components/AlertMessage/AlertMessage";
import { div } from "framer-motion/client";
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
        className="border border-gray-50/10 py-2 px-3 w-full rounded-md outline-none focus:border-gray-50/30 cursor-pointer mytransition"
        type={type}
        placeholder={placeholder}
      />
      {error && <AlertMessage type="error" message={error} />}
    </div>
  );
}

export default OrderFormField;
