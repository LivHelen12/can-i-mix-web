import { DetailsCard } from "../../components/details-card";
import { Footer } from "../../components/specialist/footer";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import * as Posts from "../../lib/api/post";

export const Details = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Posts.Post>({});

  const getPostById = () => {
    api
      .get(`/post/${id}`)
      .then((response) => {
        const data = response.data;
        setPost(data);
      })
      .catch((error) => console.log("ops, ocorreu algo errado..." + error));
  };

  useEffect(() => {
    getPostById();
  }, [id]);

  return (
    <>
      <DetailsCard post={post} />
      <Footer post={post} />
    </>
  );
};
