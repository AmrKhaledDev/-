export type LoginErrors = {
  email?: string;
  password?: string;
  serverError?: string;
};
export type RegisterErrors = LoginErrors & {
  name?: string;
  confirmPassword?: string;
};
