// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import page from './page';
import global from './global';
import seo from './seo';
import navigation from './objects/navigation';
import navItem from './objects/navItem';
import theme from './objects/theme';
import fullWidthContent from './sections/fullWidthContent';
import contentWithImage from './sections/contentWithImage';
import content from './objects/content';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    global,
    seo,
    navigation,
    navItem,
    theme,

    page,
    content,

    fullWidthContent,
    contentWithImage
  ])
});
