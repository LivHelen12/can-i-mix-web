import { Id } from "./id";

export type Specialist = Partial<{
  id: Id;
  name: string;
  email: string;
  password: string;
  cpf: string;
  mobile: string;
  fieldOfWorkId: Id;
  educationId: Id;
  profession: string;
  createdAt: string;
  updatedAt: string;
}>;
