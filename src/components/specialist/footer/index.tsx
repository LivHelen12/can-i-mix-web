type Props = {
  author?: string;
  education?: string;
  fieldOfWork?: string;
};

export const Footer = ({ author, education, fieldOfWork }: Props) => {
  return (
    <div className="fixed bottom-0 left-0 z-20 w-full p-4 shadow md:flex md:items-center md:justify-around md:p-6 dark:bg-slate-100 dark:border-gray-400 text-slate-400">
      <p>Publicado pelo(a) {author}</p>
      <p>
        {education} em {fieldOfWork}
      </p>
    </div>
  );
};
