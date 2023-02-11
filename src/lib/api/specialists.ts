import { Id } from "./id";

export type Specialist = Partial<{
  id: Id;
  name: string;
  email: string;
  password: string;
  cpf: string;
  mobile: string;
  fieldOfWorkId: Id;
  fieldOfWork: Partial<{
    id: Id;
    name: string;
    createdAt: string;
    updatedAt: string;
  }>;
  educationId: Id;
  education: Partial<{
    id: Id;
    name: string;
    createdAt: string;
    updatedAt: string;
  }>;
  profession: string;
  createdAt: string;
  updatedAt: string;
}>;
