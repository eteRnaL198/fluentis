type Props = {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({ children, className, disabled, onClick }: Props) => {
  return (
    <button
      className={` bg-orange-300 shadow-lg rounded-full px-8 py-2  hover:bg-orange-400 hover:shadow-none disabled:bg-orange-100 disabled:shadow-none disabled:text-gray-200 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
