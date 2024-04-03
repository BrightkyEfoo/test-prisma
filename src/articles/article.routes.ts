import { number, object, string } from "zod";

const createArticleSchema = object({
  body: object({
    title: string().min(1),
    content: string(),
    authorId: number(),
  }),
});

export { createArticleSchema };
