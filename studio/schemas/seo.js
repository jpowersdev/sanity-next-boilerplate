export default {
  name: 'seo',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      name: 'metaTitle',
      type: 'string'
    },
    {
      name: 'metaDescription',
      type: 'string'
    },
    {
      name: 'ogTitle',
      type: 'string'
    },
    {
      name: 'ogDescription',
      type: 'string'
    },
    {
      name: 'ogUrl',
      type: 'string'
    },
    {
      name: 'ogImage',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'noindex',
      type: 'boolean'
    }
  ]
};
