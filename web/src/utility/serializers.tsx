import Link from 'next/link';
import { linkBuilder } from './link';

export const serializers = {
  marks: {
    internalLink: ({ mark, children }) => {
      const href = linkBuilder({ ...mark.reference, slug: mark.slug });
      return (
        <Link href={'/[...slug]'} as={href}>
          <a>{children}</a>
        </Link>
      );
    }
  }
};
