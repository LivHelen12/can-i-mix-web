import * as Specialists from "./specialists";
import * as Substances from "./substance";
import * as Recommendeds from "./recommended";

import { Id } from "./id";

export type Post = Partial<{
  id: Id;
  firstSubstanceId: Id;
  secondSubstanceId: Id;
  recommendedId: Id;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  specialistId: Id;
  specialist: Specialists.Specialist;
  firstSubstance: Substances.Substance;
  secondSubstance: Substances.Substance;
  recommended: Recommendeds.Recommended;
}>;
