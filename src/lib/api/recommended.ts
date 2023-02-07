import { Id } from "./id";

export type Recommended = Partial<{
  id: Id;
  name: string;
  createdAt: string;
  updatedAt: string;
}>;
