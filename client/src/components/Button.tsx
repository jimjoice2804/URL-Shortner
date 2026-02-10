import type { ButtonProps } from '@/types/ButtonPropsTypes';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
}: ButtonProps) => {
  const baseStyle =
    'px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed m-[10] w-full';

  const variants = {
    primary: `bg-blue-600  text-white `,
    secondary: `bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500 `,
    danger: `bg-red-500 hover:bg-red-600 text-white focus:ring-red-500`,
  };

  const buttonClass = `${baseStyle} ${variants[variant]}`;
  return (
    <button type={type} onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
