import * as Specialists from "./specialists";
import * as Substances from "./substance";
import * as Recommendeds from "./recommended";
import { CommonListParams, Response, api } from "./index";

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

/**
 * Get parameters
 */
type GetByIdParams = { id: Id };
type GetBySlugParams = { slug: string };

/**
 * List parameters
 */
export type ListParams = CommonListParams & {
  id: Id;
  specialistId?: string;
};

/**
 * Get post list
 * @returns A promise of the response
 */
export const list = async (params: ListParams) => {
  return console.log(
    (await api.get<Response<Post[]>>("/post", { params })).data
  );
};

/**
 * Get post by id
 * @param id Id of the job
 * @param slug Slug of the job
 * @returns A promise of the response
 */
export const get = async (params: GetByIdParams | GetBySlugParams) => {
  const ref = "id" in params ? params.id : params.slug;
  return (await api.get<Response<Post>>(`/post/${ref}`)).data;
};

/**
 * Create post
 * @param data New post data
 * @returns A promise of the response
 */
export const create = async (data: Post) => {
  return (await api.post<Response<Post>>(`/post`, data)).data;
};

/**
 * Update post
 * @param data Existing post data with id
 * @returns A promise of the response
 */
export const update = async ({ id, ...data }: Post) => {
  return (await api.patch<Response<Post>>(`/post/${id}`, data)).data;
};

/**
 * Delete post
 * @param data Get parameters
 */
export const remove = async ({ id }: Post) => {
  await api.delete(`/post/${id}`);
};
