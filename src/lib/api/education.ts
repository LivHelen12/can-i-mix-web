import { Id } from "./id";
import { Response, api } from "./index";

export type Education = Partial<{
  id: Id;
  name: string;
  createdAt: string;
  updatedAt: string;
}>;
