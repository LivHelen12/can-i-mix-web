import { Id } from "./id";

export type Education = Partial<{
  id: Id;
  name: string;
  createdAt: string;
  updatedAt: string;
}>;
