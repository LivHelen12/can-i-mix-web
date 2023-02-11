import { Link } from "react-router-dom";
import { Post } from "../../lib/api/post";

type Props = {
  post: Post;
};

export const DetailsCard = ({ post }: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-5xl mb-6">
          {post?.firstSubstance?.name} + {post?.secondSubstance?.name}
        </h1>
        <Link
          to="/"
          className="w-15 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Voltar
        </Link>
      </div>

      <div>
        <h2 className="font-bold text-2xl mb-6">{post?.recommended?.name}</h2>
        <p className="text-lg">{post?.content}</p>
      </div>
    </div>
  );
};
