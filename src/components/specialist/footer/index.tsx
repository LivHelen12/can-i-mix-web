import { Post } from "../../../lib/api/post";

type Props = {
  post: Post;
};

export const Footer = ({ post }: Props) => {
  return (
    <div className="fixed bottom-0 left-0 z-20 w-full p-4 shadow md:flex md:items-center md:justify-around md:p-6 dark:bg-slate-100 dark:border-gray-400 text-slate-400">
      <p>Publicado pelo(a) {post?.specialist?.name}</p>
      <p>
        {post?.specialist?.education?.name} em
        {post?.specialist?.fieldOfWork?.name}
      </p>
    </div>
  );
};
