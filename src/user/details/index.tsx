import { DetailsCard } from "../../components/details-card";
import { Footer } from "../../components/specialist/footer";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import * as Posts from "../../lib/api/post";

export const Details = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Posts.Post>({});

  console.log(post);

  useEffect(() => {
    api
      .get(`/post/${id}`)
      .then((response) => {
        const data = response.data;
        setPost(data);
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
        author="Livia Helen"
        education="Graduado(a)"
        fieldOfWork="Química"
      />
    </>
  );
};
