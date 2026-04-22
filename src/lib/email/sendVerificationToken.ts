import nodemailer from "nodemailer";
// ======================================================
export const sendVerificationToken = async (
  email: string,
  verificationToken: string,
) => {
    const transporter = nodemailer.createTransport({
      secure: true,
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS,
      },
    });
    const link = `${process.env.DOMAIN}/verify/${verificationToken}`;
    await transporter.sendMail({
      from: '"لُقطة" <maro.vip53@gmail.com>',
      to: email,
      subject: "أهلا بك في لُفطة - التحقق من بريدك",
      html: `
  <div style="font-family: Arial; background:#f4f4f4; padding:20px;">
    <div style="max-width:600px; margin:auto; background:#fff; padding:20px; border-radius:10px; text-align:center;">

      <h2 style="color:#111;">أهلاً بك في لُفطة 👋</h2>

      <p style="font-size:16px; color:#555;">
        شكراً لتسجيلك معنا، لتفعيل حسابك اضغط على الزر بالأسفل.
      </p>

      <a href="${link}"
         style="display:inline-block; padding:12px 25px; margin-top:15px;
         background:#000; color:#fff; text-decoration:none; border-radius:8px;">
        تأكيد الحساب
      </a>

      <p style="margin-top:20px; font-size:12px; color:#888;">
        لو لم تطلب هذا البريد يمكنك تجاهله.
      </p>

    </div>
  </div>
`,
    });
 
};
