import { object, string } from "zod";

const createUserSchema = object({
  body: object({
    name: string().min(1).optional(),
    email: string().email(),
  }),
});

export { createUserSchema };
