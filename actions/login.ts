"use server";

import { LoginSchema } from "@/schemas";

import * as z from "zod";
export const login = async (
  value: z.infer<typeof LoginSchema>,
  callBackUrl?: string | null
) => {
  const validatedFields = LoginSchema.safeParse(value);
  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }
  const { email, password, code } = validatedFields.data;
  //const existingUser = await getUserByEmail(email);
  // if (!existingUser || !existingUser.password || !existingUser.email) {
  //   return {
  //     error: "Invalid credentials",
  //   };
  // }

  // check if password exists compare before sending 2FA token
  // if (existingUser.password) {
  //   const passwordMatch = await bcrypt.compare(password, existingUser.password);
  //   if (!passwordMatch) {
  //     return {
  //       error: "Invalid credentials",
  //     };
  //   }
  // }

  // try {
  //   await signIn("credentials", {
  //     email,
  //     password,
  //     redirectTo: callBackUrl || DEFAULT_LOGIN_REDIRECT,
  //   });
  // } catch (error) {
  //   if (error instanceof AuthError) {
  //     switch (error.type) {
  //       case "CredentialsSignin":
  //         return {
  //           error: "Invalid credentials",
  //         };

  //       default:
  //         return {
  //           error: "Something went wrong",
  //         };
  //     }
  //   }
  //   throw error;
  // }
};
