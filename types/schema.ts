import * as z from "zod";

export const todoFormSchema = z.object({
  title: z.string().min(1, "タイトルを入力してください").max(80),
  hour: z.coerce.number(),
  minute: z.coerce
    .number({ required_error: "0~59分以内で入力してください" })
    .nonnegative()
    .int()
    .lte(59, "0~59分以内で入力してください"),
  secound: z.coerce
    .number({ required_error: "0~59秒以内で入力してください" })
    .nonnegative()
    .int()
    .lte(59, "0~59秒以内で入力してください"),
});
