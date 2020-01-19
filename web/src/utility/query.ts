import groq from 'groq';

export const parents = groq`
  parent->{
    slug,
    parent->{
      slug,
      parent->{
        slug,
        parent->{
          slug,
          parent->{
            slug
          }
        }
      }
    }
  }
`.replace(/\s/g, '');

export const blocks = groq`
  ...,
  markDefs[]{
    ...,
    _type == "internalLink" => {
      "slug": @.reference->slug,
      "reference": @.reference->{
        ${parents}
      }
    }
  }
`.replace(/\s/g, '');

export const pageQuery = slug =>
  groq`
    *[slug.current == '${slug}'][0]{
      ...,
      ${parents},
      body[]{
        ...,
        content[]{
          ${blocks}
        },
        hidden[]{
          ${blocks}
        },
        visible[]{
          ${blocks}
        },
      }
    }
  `.replace(/\s/g, '');
