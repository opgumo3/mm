import React from 'react';

/**
 * Button 컴포넌트의 속성 타입.
 * - label: 버튼에 표시될 텍스트
 * - onClick: 버튼 클릭 시 실행될 함수
 * - variant: 버튼의 색상 테마
 * - size: 버튼의 크기 ('small', 'medium', 'large')
 * - className: 외부에서 추가 CSS 클래스를 적용할 때 사용
 */
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', size = 'medium', className }) => {
  const baseClasses = 'px-6 py-3 rounded-full font-bold text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50';
  
  const variantClasses = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
    secondary: 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-400',
    success: 'bg-green-500 hover:bg-green-600 focus:ring-green-400',
    danger: 'bg-red-500 hover:bg-red-600 focus:ring-red-400',
  };
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={finalClasses}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;