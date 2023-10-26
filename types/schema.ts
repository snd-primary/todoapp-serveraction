import { totalSeconds } from "@/lib/totalSeconds";
import * as z from "zod";

export const todoFormSchema = z
  .object({
    title: z.string().min(1, "タイトルを入力してください").max(80),
    hour: z.coerce.number(),
    minutes: z.coerce
      .number({ required_error: "0~59分以内で入力してください" })
      .nonnegative()
      .int()
      .lte(59, "0~59分以内で入力してください"),
    seconds: z.coerce
      .number({ required_error: "0~59秒以内で入力してください" })
      .nonnegative()
      .int()
      .lte(59, "0~59秒以内で入力してください"),
  })
  .superRefine((val, ctx) => {
    const TOTAL_SECONDS = totalSeconds(val);

    if (TOTAL_SECONDS < 10) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 5,
        type: "number",
        inclusive: true,
        message: "合計が10秒以下のタスクは登録できません",
        path: ["hour"],
      });
    }
  });
