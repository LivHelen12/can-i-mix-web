import { Id } from "./id";

export type Substance = Partial<{
  id: Id;
  name: string;
  createdAt: string;
  updatedAt: string;
}>;
