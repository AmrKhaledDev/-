import z from "zod";
// =====================
export const LoginSchema = z.object({
  email: z
    .string({ message: "البريد الإلكتروني يجب أن يكون نصًا" })
    .nonempty({ message: "البريد الإلكتروني يجب ألا يكون فارغ" })
    .email({ message: "برجاء كتابة صيغة صحيحة للبريد الإلكتروني" }),
  password: z
    .string({ message: "صيغة كلمة السر غير صحيحة" })
    .nonempty({ message: "كلمة السر يجب ألا تكون فارغة " })
    .min(8, { message: "كلمة السر صغيرة يجب ألا تقل عن 8 أحرف / أرقام" })
    .max(50, {
      message: "كلمة السر طويلة للغاية يجب ألا تزيد عن 50 حرف / رقم",
    }),
});