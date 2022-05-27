import { ReplaceProps } from './utils';

export interface StandardProps {
  /** The prefix of the component CSS class */
  classPrefix?: string;

  /** Additional classes */
  className?: string;

  /** Primary content */
  children?: React.ReactNode;

  /** Additional style */
  style?: React.CSSProperties;
}

export interface WithAsProps<As extends React.ElementType | string = React.ElementType> extends StandardProps {
  /** You can use a custom element for this component */
  as?: As;
}

export declare namespace TypeAttributes {
  type Size = 'lg' | 'md' | 'sm' | 'xs';
  type Status = 'success' | 'warning' | 'error' | 'info';
  type Color = 'red' | 'orange' | 'yellow' | 'green' | 'cyan' | 'blue' | 'violet' | '';
  type Type = 'default' | 'primary' | 'link' | 'text' | 'dashed';
  type Shape = 'circle' | 'round' | 'square';
}

export interface RsRefForwardingComponent<T extends React.ElementType, P = unknown> {
  <As extends React.ElementType = T>(props: React.PropsWithChildren<ReplaceProps<As, WithAsProps<As> & P>>, context?: any): React.ReactElement | null;
  propTypes?: any;
  contextTypes?: any;
  displayName?: string;
}
