import { Link } from "react-router-dom";

type Props = {
  firstSubstance?: string;
  secondSubstance?: string;
  recommended?: string;
  content?: string;
};

export const DetailsCard = ({
  firstSubstance,
  secondSubstance,
  recommended,
  content,
}: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-5xl mb-6">
          {firstSubstance} + {secondSubstance}
        </h1>
        <Link
          to="/"
          className="w-15 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Voltar
        </Link>
      </div>

      <div>
        <h2 className="font-bold text-2xl mb-6">{recommended}</h2>
        <p className="text-lg">{content}</p>
      </div>
    </div>
  );
};
