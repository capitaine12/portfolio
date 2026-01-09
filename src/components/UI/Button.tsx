import type {
  ButtonHTMLAttributes,
  FC,
  ReactNode,
} from 'react';
import clsx from 'clsx';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'download';
  icon?: ReactNode;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon,
  loading = false,
  disabled,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={clsx(
        'btn-base',
        `btn-${variant}`,
        loading && 'opacity-70 cursor-not-allowed',
        className
      )}
      
    >
      {loading ? (
        <span className="loader" />
      ) : (
        <span className="btn-content">
          {children}
          {icon && <span className="btn-icon">{icon}</span>}
        </span>
      )}
    </button>
  );
};

export default Button;
