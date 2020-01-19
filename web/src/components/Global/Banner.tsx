import { urlFor } from '../../utility/assets';

import styled from 'styled-components';

import { container } from '../../style/partials';

const Banner = props => {
  return (
    <StyledBanner>
      <div className='content'>
        <h1>{props.title}</h1>
      </div>
      <div className='overlay' />
      <img
        src={urlFor(props.featuredImage)
          .auto('format')
          .url()}
        alt={props.featuredImage?.alt || ''}
      />
    </StyledBanner>
  );
};

export default Banner;

const StyledBanner = styled.div`
  position: relative;
  padding: 1px;

  h1 {
    margin: 0;
  }

  &,
  img,
  .overlay {
    height: 350px;
  }

  img,
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
  }
  img {
    z-index: 0;
  }
  .overlay {
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .content {
    ${container}
    position: relative;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    color: #fff;
    height: calc(100% - 62px);
    margin-top: 62px;
  }
`;
