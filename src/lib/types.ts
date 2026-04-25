import { Prisma } from "@prisma/client";

export type LoginErrors = {
  email?: string;
  password?: string;
  serverError?: string;
};
export type RegisterErrors = LoginErrors & {
  name?: string;
  confirmPassword?: string;
};
export type ProductDbType = Prisma.ProductGetPayload<{
  include: {
    productImages: true;
    category: true;
  };
}>;
export type UserSessionWithRelations = Prisma.UserGetPayload<{
  include: {
    userProducts: true;
  };
}>;
