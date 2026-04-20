"use client";
function OrderFormField({ placeholder }: { placeholder: string }) {
  return (
    <input
      className="border border-gray-50/10 py-2 px-3 rounded-md outline-none focus:border-gray-50/30 cursor-pointer mytransition"
      type="text"
      placeholder={placeholder}
    />
  );
}

export default OrderFormField;
