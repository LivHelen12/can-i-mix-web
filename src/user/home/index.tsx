import { useEffect, useState } from "react";
import unorm from "unorm";

import { Card } from "../../components/card";
import { NotFound } from "../../components/not-found";
import { SearchInput } from "../../components/search-input";

import { api } from "../../lib/api/index";
import * as Posts from "../../lib/api/post";

export const Home = () => {
  const [posts, setPosts] = useState<Array<Posts.Post>>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get("/post")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log("ops, ocorreu algo errado..." + error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const isMatch = (name: string) =>
    unorm
      .nfkd(name.toLocaleLowerCase())
      .includes(unorm.nfkd(search.toLocaleLowerCase()));

  const filteredPosts = posts.filter((post) => {
    const firstSubstance = post.firstSubstance?.name;
    const secondSubstance = post.secondSubstance?.name;

    return (
      (firstSubstance && isMatch(firstSubstance)) ||
      (secondSubstance && isMatch(secondSubstance))
    );
  });

  return (
    <>
      <div className="flex justify-center">
        <div className="w-11/12">
          <SearchInput
            onChange={handleChange}
            value={search}
            id="search"
            name="search"
            placeholder="Insira um produto para buscar..."
            className="block p-3.5 w-full z-20 text-sm bg-gray-200 text-gray-900 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="m-4">
              <Card
                cardId={post.id}
                firstSubstance={post.firstSubstance?.name}
                secondSubstance={post.secondSubstance?.name}
                recommended={post.recommended?.name}
                description={post.description}
              />
            </div>
          ))
        ) : (
          <>
            <NotFound>Não há posts</NotFound>
          </>
        )}
      </div>
    </>
  );
};
