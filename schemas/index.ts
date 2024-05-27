import * as zod from "zod";

export const LoginSchema = zod.object({
  email: zod
    .string({
      invalid_type_error: "Must be a string", // first one does not have message prop
    })
    .email({ message: "Please provide a valid employee number" }),
  password: zod.string().min(1, { message: "Password is required" }),
  code: zod.optional(
    zod.string().min(6, { message: "Code must be 6 characters" })
  ),
});

export const RequestAssetSchema = zod.object({
  name: zod.string().min(1, { message: "Name is required" }),
  email: zod.string().email({ message: "Invalid email address" }),
  assets: zod
    .array(
      zod.enum([
        "laptop",
        "desktop",
        "mobile",
        "monitor",
        "mouse",
        "printer",
        "server",
      ])
    )
    .min(1, { message: "At least one asset must be selected" }),
  urgency: zod.enum(["low", "medium", "high"]),
  gradient: zod.enum([
    "blue-to-purple",
    "green-to-teal",
    "red-to-orange",
    "pink-to-red",
  ]),
  details: zod.string().optional(),
});
