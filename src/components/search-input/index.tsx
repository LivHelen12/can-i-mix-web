type Props = {
  name: string;
  id: string;
  placeholder: string;
  className: string;
};

export const SearchInput = ({ name, id, placeholder, className }: Props) => {
  return (
    <div className="mb-8">
      <div className="relative">
        <input
          type="search"
          id={id}
          name={name}
          placeholder={placeholder}
          className={className}
          required
        />
        <button
          type="submit"
          className="absolute top-0 right-0 p-3 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Buscar</span>
        </button>
      </div>
    </div>
  );
};
