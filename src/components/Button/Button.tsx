import React from 'react';
import { TypeAttributes, WithAsProps } from '../../types/common';
import { CN } from '../className';
import styles from './Button.module.scss';

export interface ButtonProps extends WithAsProps, React.HTMLAttributes<HTMLElement> {
  /** A button can have different appearances. */
  type?: TypeAttributes.Type;

  /**
   * What shape to use
   */
  shape?: TypeAttributes.Shape;
  /**
   * A button can show it is currently unable to be interacted with
   */
  disabled?: boolean;
  /**
   * How large should the button be?
   */
  size?: TypeAttributes.Size;

  /**
   * What background color to use
   */
  backgroundColor?: TypeAttributes.Color;

  /**
   * What color to use
   */
  color?: TypeAttributes.Color;

  /** Format button to appear inside a content block */
  block?: boolean;

  /** Providing a `href` will render an `<a>` element, _styled_ as a button */
  href?: string;

  /** Where to display the linked URL */
  target?: string;

  /** A button can show a loading indicator */
  loading?: boolean;

  /**
   * Button contents
   */
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ type = 'default', size = 'md', shape = 'square', label = 'Button', backgroundColor, color, disabled, style, ...props }) => {
  const className = CN(styles.button, [
    [styles.default, type === 'default'],
    [styles.primary, type === 'primary'],
    [styles.link, type === 'link'],
    [styles.text, type === 'text'],
    [styles.dashed, type === 'dashed'],
    [styles.xsmall, size === 'xs'],
    [styles.small, size === 'sm'],
    [styles.medium, size === 'md'],
    [styles.large, size === 'lg'],
    [styles.rounded, shape === 'square'],
    [styles.circle, shape === 'circle'],
    [styles.round, shape === 'round'],
  ]);

  return (
    <button disabled={disabled} type="button" className={className} style={{ ...style, backgroundColor, color }} {...props}>
      {label}
    </button>
  );
};
