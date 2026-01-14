import type{ FC } from 'react';
import clsx from 'clsx';
import type { ButtonProps } from '@/types/types';



const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon,
  loading = false,
  disabled,
  className,
  ariaLabel,
  ...props
}) => {
  const { error } = props
  return (
    <button
      {...props}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-label={ariaLabel}
      className={clsx(
        'btn-base',
        `btn-${variant}`,
        loading && 'opacity-70 cursor-not-allowed',
        className
      )}
    >
      {loading ? (
        <span className="btn-loader">
          <span className="loader" />
        </span>
      ) : (
        <span className="btn-content">
          {children}
          {icon && <span className="btn-icon">{icon}</span>}
        </span>
      )}
      {error && <span className="btn-error">{error}</span>}
    </button>
  );
};

export default Button;