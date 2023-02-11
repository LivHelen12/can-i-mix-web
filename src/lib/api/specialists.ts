import { Id } from "./id";
import * as Educations from "./education";
import * as FieldOfWorks from "./fieldOfWork";

export type Specialist = Partial<{
  id: Id;
  name: string;
  email: string;
  password: string;
  cpf: string;
  mobile: string;
  fieldOfWorkId: Id;
  fieldOfWork: FieldOfWorks.FieldOfWork;
  educationId: Id;
  education: Educations.Education;
  profession: string;
  createdAt: string;
  updatedAt: string;
}>;
