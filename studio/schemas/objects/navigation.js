export default {
  name: 'navigation',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'navItem'
        }
      ]
    }
  ]
};
