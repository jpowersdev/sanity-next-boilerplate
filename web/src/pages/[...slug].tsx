import { client } from '../utility/client';
import styled, { css } from 'styled-components';
import { pageQuery } from '../utility/query';
import ContentBlock from '../components/ContentBlock';
import { container } from '../style/partials';
import Banner from '../components/Global/Banner';
import Navigation from '../components/Global/Navigation';
import Footer from '../components/Global/Footer';

const Page = props => {
  // console.log(props);
  return (
    <StyledPage>
      <Banner title={props.title} featuredImage={props.featuredImage} />
      {props.body?.map(block => (
        <ContentBlock {...block} key={block._key} />
      ))}
    </StyledPage>
  );
};

const StyledPage = styled.main`
  padding: 1px 0;
  position: relative;
  background: rgba(100, 100, 100, 0.2);
  min-height: calc(100vh - 450px);
`;

Page.getInitialProps = async ({ query, res }) => {
  try {
    const { slug } = query;
    const list = slug.reverse();
    const current = list[0];

    const data = await client.fetch(pageQuery(current));

    if (!data._id) throw new Error(`Slug not found - '${list[0]}'`);

    let currentPage = data;
    for (let i = 1; i < list.length; i++) {
      currentPage = currentPage.parent;

      if (list[i] !== currentPage.slug.current)
        throw new Error(`Invalid url - /${slug.reverse().join('/')}`);
    }
    return data;
  } catch (e) {
    console.log(e.message);
    if (typeof res !== 'undefined') {
      res.statusCode = 404;
    }
    return {
      title: 'Error'
    };
  }
};

export default Page;
