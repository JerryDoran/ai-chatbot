import React from 'react';
import { Components } from 'react-markdown';

export const Pre = React.forwardRef<
  HTMLPreElement,
  React.HTMLAttributes<HTMLPreElement>
>((props, ref) => <pre ref={ref} {...props} />);
Pre.displayName = 'Pre';

type CodeProps = Omit<Components['code'], 'node'> & {
  inline?: boolean | undefined;
  className?: string | undefined;
  children: React.ReactNode;
};

export const Code: React.FC<CodeProps> = ({
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)/.exec(className || '');
  if (inline) {
    return (
      <code
        className={`bg-gray-200 px-1 rounded ${className || ''}`}
        {...props}
      >
        {children}
      </code>
    );
  }
  return (
    <Pre className={`bg-gray-200 p-2 rounded ${className || ''}`} {...props}>
      <code className={match ? `language-${match[1]}` : ''}>{children}</code>
    </Pre>
  );
};

export const UnorderedList: Components['ul'] = ({ children, ...props }) => (
  <ul className='list-disc ml-4' {...props}>
    {children}
  </ul>
);

export const ListItem: Components['li'] = ({ children, ...props }) => (
  <li className='ml-4 list-decimal' {...props}>
    {children}
  </li>
);
