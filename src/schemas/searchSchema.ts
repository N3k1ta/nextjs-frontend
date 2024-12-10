import { title } from "process";
import { z } from "zod";

export const documentSchema = z.object({
  link: z.string(),
  semantic_identifier: z.string(),
});

export const searchResultSchema = z.object({
  documents: z.array(documentSchema),
});