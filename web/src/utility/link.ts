export function linkBuilder(page) {
  if (!page.parent)
    return page.slug.current === 'index' ? '/' : `/${page.slug.current}`;
  let slugs = [];
  let current = page.parent;
  while (true) {
    slugs.push(current.slug.current);

    if (!current.parent) break;
    current = current.parent;
  }
  slugs.reverse().push(page.slug.current);
  const href = `/${slugs.join('/')}`;
  return href;
}
