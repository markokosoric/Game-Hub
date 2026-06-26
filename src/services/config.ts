import { z } from "zod";

const ENVSchema = z.object({
  RAWG_API_KEY: z.string().min(1),
});

export const config = ENVSchema.parse({
  RAWG_API_KEY: import.meta.env.VITE_RAWG_API_KEY,
});