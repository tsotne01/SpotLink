import z from "zod";

export const registrationSchema = z
  .object({
    username: z.string().min(3),
    email: z.string().email().min(1),
    password: z.string().min(8),
    confirmpassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
  });

export const singinSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(8),
});
