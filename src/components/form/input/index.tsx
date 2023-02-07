interface Props {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  className: string;
}

export const Input = ({
  name,
  label,
  type,
  placeholder,
  className,
  ...rest
}: Props) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        className={className}
        type={type}
        id={name}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};
