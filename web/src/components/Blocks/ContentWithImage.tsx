import styled from 'styled-components';
import * as PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../utility/serializers';
import { container, margins } from '../../style/partials';
import { urlFor } from '../../utility/assets';

const ContentWithImage = props => {
  return (
    <StyledContentWithImage>
      <div className='container'>
        <div>
          <img
            src={urlFor(props.image)
              .auto('format')
              .url()}
          />
        </div>
        <div>
          <PortableText blocks={props.content} serializers={serializers} />
        </div>
      </div>
    </StyledContentWithImage>
  );
};

const StyledContentWithImage = styled.div`
  ${margins}

  .container {
    ${container}

    display: grid;
    align-items: center;
    justify-content: space-between;

    grid-template-columns: 1fr auto;
    grid-gap: 40px;
  }
`;

export default ContentWithImage;
