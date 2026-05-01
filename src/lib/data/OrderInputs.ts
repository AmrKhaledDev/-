import { Dispatch, SetStateAction } from "react";
import { OrderErrors } from "../types";
// ======================================================
export const orderInputs = (
  fullName: string,
  setFullName: Dispatch<SetStateAction<string>>,
  errors: OrderErrors,
  phone: string,
  setPhone: Dispatch<SetStateAction<string>>,
  address: string,
  setAddress: Dispatch<SetStateAction<string>>,
) => {
  return [
    {
      id: "FULL_NAME",
      value: fullName,
      onChange: setFullName,
      placeholder: "الاسم الكامل",
      type: "text",
      error: errors.fullName,
    },
    {
      id: "PHONE",
      value: phone,
      onChange: setPhone,
      placeholder: "رقم الهاتف",
      type: "number",
      error: errors.phone,
    },
    {
      id: "ADDRESS",
      value: address,
      onChange: setAddress,
      placeholder: "العنوان الكامل",
      type: "text",
      error: errors.address,
    },
  ];
};
