export default {
  name: 'navItem',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'link',
      type: 'reference',
      to: [{ type: 'page' }]
    },
    {
      name: 'children',
      type: 'array',
      of: [{ type: 'navItem' }]
    }
  ]
};
