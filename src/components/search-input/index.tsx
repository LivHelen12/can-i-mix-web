import { ChangeEvent } from "react";

type Props = {
  name: string;
  id: string;
  placeholder: string;
  className: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const SearchInput = ({
  name,
  id,
  placeholder,
  className,
  onChange,
  value,
}: Props) => {
  return (
    <div className="mb-8">
      <div className="relative">
        <form>
          <input
            onChange={onChange}
            value={value}
            type="search"
            id={id}
            name={name}
            placeholder={placeholder}
            className={className}
            required
          />
        </form>
      </div>
    </div>
  );
};
