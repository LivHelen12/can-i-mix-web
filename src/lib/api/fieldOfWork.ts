import { Id } from "./id";

export type FieldOfWork = Partial<{
  id: Id;
  name: string;
  createdAt: string;
  updatedAt: string;
}>;
