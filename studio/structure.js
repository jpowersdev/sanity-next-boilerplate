import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Global')
        .child(
          S.document()
            .id('global')
            .schemaType('global')
            .documentId('global')
        ),
      S.documentTypeListItem('page')
    ]);
