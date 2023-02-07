import { Link } from "react-router-dom";
import { Id } from "../../lib/api/id";

type Props = {
  firstSubstance?: string;
  secondSubstance?: string;
  recommended?: string;
  description?: string;
  cardId?: Id;
};

export const Card = ({
  firstSubstance,
  secondSubstance,
  cardId,
  recommended,
  description,
}: Props) => {
  return (
    <>
      <div className="w-full h-full p-4  border border-gray-200 rounded-lg bg-blue-600/90 shadow-2xl">
        <div className="w-80 h-52">
          <div className="flex justify-between items-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {firstSubstance} + {secondSubstance}
            </h5>
            <Link
              to={`/details/${cardId}`}
              className="text-slate-800/70 font-semibold"
            >
              Ver mais
            </Link>
          </div>

          <h5 className="mt-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {recommended}
          </h5>

          <p className="mt-6 font-normal text-gray-700 dark:text-gray-200">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
