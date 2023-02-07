import { Id } from "./id";
import { Response, api } from "./index";

export type Education = Partial<{
  id: Id;
  name: string;
  createdAt: string;
  updatedAt: string;
}>;

/**
 * Get parameters
 */
type GetByIdParams = { id: Id };
type GetBySlugParams = { slug: string };

/**
 * List parameters
 */
export type ListParams = {
  id?: Id;
  name?: string;
};

/**
 * Get education list
 * @returns A promise of the response
 */
export const list = async (params: ListParams) => {
  return (await api.get<Response<Education[]>>("/education", { params })).data;
};

/**
 * Get education by id
 * @param id Id of the job
 * @param slug Slug of the job
 * @returns A promise of the response
 */
export const get = async (params: GetByIdParams | GetBySlugParams) => {
  const ref = "id" in params ? params.id : params.slug;
  return (await api.get<Response<Education>>(`/education/${ref}`)).data;
};

/**
 * Create education
 * @param data New education data
 * @returns A promise of the response
 */
export const create = async (data: Education) => {
  return (await api.post<Response<Education>>(`/education`, data)).data;
};
