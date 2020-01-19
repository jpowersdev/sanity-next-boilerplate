# CMS.js

_Built using [NextJS](https://nextjs.org/) and [Sanity.io](https://sanity.io/)_

## Usage

1. Spin up your sanity project
2. Add your projectID and dataset to the @sanity/client
3. Create pages
4. Add them to navigation
5. Do whatever else you'd like

## Customizing

1. Create a schema for your new "content block" type.
   _For example, a quicklinks section with an array of page references_
2. Create a react component to display the data in that schema
3. Add it as an option in the body array in `page` schema
4. Add it to the switch statement in `src/components/ContentBlock`
5. Update the query in `src/pages/[..slug]` if the schema has page references

## TODO

- EZ sitemaps
- I don't know, pull requests / issues are welcome
