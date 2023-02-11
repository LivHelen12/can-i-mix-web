import { DetailsCard } from "../../components/details-card";
import { Footer } from "../../components/specialist/footer";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import * as Posts from "../../lib/api/post";

export const Details = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Posts.Post>({});

  useEffect(() => {
    api
      .get(`/post/${id}`)
      .then((response) => {
        const data = response.data;
        setPost(data);
        console.log(data);
      })
      .catch((error) => console.log("ops, ocorreu algo errado..." + error));
  }, [id]);

  return (
    <>
      <DetailsCard
        firstSubstance={post.firstSubstance?.name}
        secondSubstance={post.secondSubstance?.name}
        recommended={post.recommended?.name}
        content={post.content}
      />

      <Footer
        author={post.specialist?.name}
        education={post?.specialist?.education?.name}
        fieldOfWork={post?.specialist?.fieldOfWork?.name}
      />
    </>
  );
};
