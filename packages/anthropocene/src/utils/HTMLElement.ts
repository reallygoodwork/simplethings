import { z } from "zod";

export const zElementType = z.union([
  z.literal("div"),
  z.literal("span"),
  z.literal("section"),
  z.literal("header"),
]);