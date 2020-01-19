import { serializers } from '../utility/serializers';
import * as PortableText from '@sanity/block-content-to-react';

const Content = props => {
  return <PortableText blocks={props.blocks} serializers={serializers} />;
};

export default Content;
