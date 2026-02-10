import type { InputProps } from '@/types/InputBoxPropsTypes';

const InputBox = ({
  onChange,
  type = 'submit',
  variant = 'primary',
  placeholder,
}: InputProps) => {
  const baseStyle = `w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
    disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200`;

  const variants = {
    primary: 'border-blue-300 focus:ring-blue-500 bg-white',
    secondary: 'border-gray-400 focus:ring-gray-500 bg-gray-50',
  };
  return (
    <>
      <input
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className={`${baseStyle}+${variants[variant]}`}
      />
    </>
  );
};

export default InputBox;
