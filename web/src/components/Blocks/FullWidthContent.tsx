import styled from 'styled-components';
import * as PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../utility/serializers';
import { container, margins } from '../../style/partials';

const FullWidthContent = props => {
  return (
    <StyledFullWidthContent>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>
        <PortableText blocks={props.content} serializers={serializers} />
      </div>
    </StyledFullWidthContent>
  );
};

const StyledFullWidthContent = styled.div`
  ${margins}

  div {
    ${container}
  }
`;

export default FullWidthContent;
