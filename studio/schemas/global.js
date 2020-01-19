export default {
  name: 'global',
  type: 'document',
  fields: [
    {
      name: 'logo',
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
      name: 'navigation',
      type: 'navigation'
    },
    {
      name: 'theme',
      type: 'theme'
    }
  ]
};
