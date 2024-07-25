import { getSinglePage, getListPage } from '@lib/contentParser';

// Regular pages
const RegularPages = ({ data }) => {
  const { title, meta_title, description, image, noindex, canonical, layout } = data.frontmatter;
  const { content } = data;

  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
      meta_title={meta_title}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      {layout === '404' ? (
        <NotFound data={data} />
      ) : layout === 'about' ? (
        <About data={data} />
      ) : layout === 'contact' ? (
        <Contact data={data} />
      ) : (
        <Default data={data} />
      )}
    </Base>
  );
};

export default RegularPages;

// for regular page routes
export const getStaticPaths = async () => {
  const slugs = getSinglePage('content');
  const paths = slugs.map((item) => ({
    params: {
      regular: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// for regular page data
export const getStaticProps = async ({ params }) => {
  const { regular } = params;
  const data = getSinglePage('content').find((page) => page.slug === regular);

  return {
    props: {
      data,
    },
  };
};
