import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className='font-bold text-6xl mb-4'>{children}</h1>,
    h2: ({ children }) => <h2 className='font-semibold text-5xl mb-4'>{children}</h2>,
    h3: ({ children }) => <h3 className='font-semibold text-4xl mb-4'>{children}</h3>,
    h4: ({ children }) => <h4 className='font-medium text-3xl mb-4'>{children}</h4>,
    h5: ({ children }) => <h5 className='font-medium text-2xl mb-4'>{children}</h5>,
    h6: ({ children }) => <h6 className='text-xl mb-4'>{children}</h6>,
    a: ({ children, ...props }) => (
      <a className='text-[#0078FF] hover:underline cursor-none' {...props}>
        {children}
      </a>
    ),
    p: ({ children }) => <p className='text-muted-foreground my-4'>{children}</p>,
    ul: ({ children, ...props }) => (
      <ul className='list-disc ml-6 my-4 text-muted-foreground' {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className='list-decimal ml-6 my-4 text-muted-foreground' {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className='mb-2' {...props}>
        {children}
      </li>
    ),
    code: ({ children, ...props }) => (
      <code className='bg-muted text-gray-100 p-1.5 rounded text-sm' {...props}>
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => (
      <pre className='bg-gray-900 text-gray-100 p-4 rounded overflow-auto my-4' {...props}>
        {children}
      </pre>
    ),
    ...components,
  };
}
