async function importBlog(slug: string) {
  const { meta, default: component } = await import(
    `../src/app/blog/${slug}/content.mdx`
  );
  return {
    slug,
    ...meta,
    component,
  };
}

export async function getAllBlogs() {
  const slugs = [
    "clean-code",
    "dark-mode-with-nextjs",
    "how-to-win-clients",
    "tailwindcss-tips-and-tricks",
  ];

  const blogs = await Promise.all(slugs.map(importBlog));

  return blogs.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}
