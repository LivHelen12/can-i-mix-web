import { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { SearchInput } from "../../components/search-input";

import { api } from "../../lib/api/index";
import * as Posts from "../../lib/api/post";

export const Home = () => {
  const [posts, setPosts] = useState<Array<Posts.Post>>([]);

  useEffect(() => {
    api
      .get("/post")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log("ops, ocorreu algo errado..." + error));
  }, []);

  return (
    <>
      <form>
        <div className="flex justify-center">
          <div className="w-11/12">
            <SearchInput
              id="search"
              name="search"
              placeholder="Insira um produto para buscar..."
              className="block p-3.5 w-full z-20 text-sm bg-gray-200 text-gray-900 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </form>

      <div className="flex flex-wrap justify-evenly">
        {posts &&
          posts.map((post) => (
            <div key={post.id} className="m-4">
              <Card
                cardId={post.id}
                firstSubstance={post.firstSubstance?.name}
                secondSubstance={post.secondSubstance?.name}
                recommended={post.recommended?.name}
                description={post.description}
              />
            </div>
          ))}
      </div>
    </>
  );
};
