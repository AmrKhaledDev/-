"use client";
import { FormEvent, useState } from "react";
import OrderFormField from "./OrderFormField";
import { OrderFormSchema } from "@/lib/Zod_Schemas/Order_Schemas/OrderForm.schema";
import { CreateOrderAction } from "@/lib/Server_Actions/Create_Actions/CreateOrder.action";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader/Loader";
import AlertMessage from "@/components/AlertMessage/AlertMessage";
import { User } from "@prisma/client";
// ========================================================
type Errors = {
  fullName?: string;
  address?: string;
  city?: string;
  phone?: string;
  serverError?: string;
};
function OrderForm({ userSession }: { userSession: User }) {
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState(userSession.name || "");
  const [address, setAddress] = useState(userSession.address || "");
  const [city, setCity] = useState(userSession.city || "");
  const [phone, setPhone] = useState(userSession.phone || "");
  const inputs = [
    {
      id: "FULL_NAME",
      value: fullName,
      onChange: setFullName,
      placeholder: "الاسم الكامل",
      type: "text",
      error: errors.fullName,
    },
    {
      id: "ADDRESS",
      value: address,
      onChange: setAddress,
      placeholder: "العنوان الكامل",
      type: "text",
      error: errors.address,
    },
    {
      id: "CITY",
      value: city,
      onChange: setCity,
      placeholder: "المدينة",
      type: "text",
      error: errors.city,
    },
    {
      id: "PHONE",
      value: phone,
      onChange: setPhone,
      placeholder: "رقم الهاتف",
      type: "number",
      error: errors.phone,
    },
  ];
  const createOrder = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrors({});
      const validation = OrderFormSchema.safeParse({
        fullName,
        address,
        city,
        phone,
      });
      if (!validation.success) {
        const fieldErrors = validation.error.flatten().fieldErrors;
        setErrors({
          fullName: fieldErrors.fullName?.[0],
          address: fieldErrors.address?.[0],
          city: fieldErrors.city?.[0],
          phone: fieldErrors.phone?.[0],
        });
        return;
      }
      const result = await CreateOrderAction({
        fullName,
        address,
        city,
        phone,
      });
      if (!result.success)
        return setErrors({
          serverError: result.message,
        });
      router.push("/order-success");
      router.refresh();
    } catch (error) {
      console.log(error);
      setErrors({ serverError: "حدث خطأ أثناء انشاء طلبك حاول مرة أخرى" });
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={createOrder}
      className="p-5 rounded-2xl flex-1 shadow-xl flex flex-col gap-5 ring ring-gray-50/20 bg-white/5"
    >
      {errors.serverError && (
        <AlertMessage type="error" message={errors.serverError} />
      )}
      <h2 className="font-semibold text-center text-xl mb-3">بيانات الشحن</h2>
      {inputs.map((input) => (
        <OrderFormField
          key={input.id}
          type={input.type}
          value={input.value}
          placeholder={input.placeholder}
          onChange={input.onChange}
          error={input.error}
        />
      ))}
      <button
        disabled={loading}
        className="not-disabled:bgg-ip flex items-center disabled:bg-gray-500 gap-5 justify-center py-3 active:scale-96 mytransition rounded shadow not-disabled:cursor-pointer"
      >
        {loading ? (
          <>
            جاري تأكيد الطلب . . . <Loader />
          </>
        ) : (
          " تأكيد الطلب"
        )}
      </button>
    </form>
  );
}

export default OrderForm;
