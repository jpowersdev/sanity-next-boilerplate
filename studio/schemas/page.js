import { FaHome } from 'react-icons/fa';

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'seo',
      type: 'seo'
    },
    {
      name: 'parent',
      type: 'reference',
      to: [
        {
          type: 'page'
        }
      ]
    },
    {
      name: 'featuredImage',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          options: {
            isHighlighted: true
          }
        }
      ]
    },
    {
      name: 'body',
      type: 'array',
      of: [{ type: 'fullWidthContent' }, { type: 'contentWithImage' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      subtitle: 'parent.title'
    },
    prepare(selection) {
      const { title, subtitle, slug } = selection;
      if (slug.current === 'index') {
        return {
          title,
          media: FaHome,
          subtitle: 'Current Homepage'
        };
      } else {
        return {
          title,
          subtitle
        };
      }
    }
  }
};
