export default {
  name: 'contentWithImage',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'content',
      type: 'content'
    },
    {
      name: 'image',
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
    }
  ]
};
