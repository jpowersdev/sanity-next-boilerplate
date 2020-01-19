import dynamic from 'next/dynamic';

const FullWidthContent = dynamic(() => import('./Blocks/FullWidthContent'));
const ContentWithImage = dynamic(() => import('./Blocks/ContentWithImage'));

const ContentBlock = props => {
  // console.log(props);
  switch (props._type) {
    case 'fullWidthContent':
      return <FullWidthContent {...props} />;
    case 'contentWithImage':
      return <ContentWithImage {...props} />;
    default:
      return <></>;
  }
};

export default ContentBlock;
