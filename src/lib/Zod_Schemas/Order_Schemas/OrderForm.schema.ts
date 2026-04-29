import z from "zod";
// =================
export const OrderFormSchema = z.object({
  fullName: z
    .string()
    .trim() 
    .min(10, { message: "الإسم الكامل مطلوب (ثلاثي على الأقل)" })
    .max(60, { message: "الإسم طويل للغاية" }),

  address: z
    .string()
    .trim()
    .min(10, {
      message: "يرجى كتابة العنوان بالتفصيل (الشارع، رقم المبنى، الدور)",
    })
    .max(150, { message: "العنوان طويل للغاية" }),

  city: z
    .string()
    .trim()
    .min(3, { message: "إسم المدينة غير صحيح" })
    .max(50, { message: "إسم المدينة طويل للغاية" }),

  phone: z
    .string()
    .trim()
    .regex(/^01[0125][0-9]{8}$/, {
      message: "رقم الهاتف يجب أن يكون رقم موبايل مصري صحيح (مثلاً 010...)",
    }),
});
