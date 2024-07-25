import Base from "@layouts/Baseof";
import NotFound from "@layouts/404";
import About from "@layouts/About";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import { getSinglePage, getRegularPage } from '@lib/server/contentParser';

const RegularPages = ({ data }) => {
  const { title, meta_title, description, image, noindex, canonical, layout } = data.frontmatter;
  const { content } = data;

  return (
    <Base title={title} description={description ? description : content.slice(0, 120)} meta_title={meta_title} image={image} noindex={noindex} canonical={canonical}>
      {layout === "404" ? (
        <NotFound data={data} />
      ) : layout === "about" ? (
        <About data={data} />
      ) : layout === "contact" ? (
        <Contact data={data} />
      ) : (
        <Default data={data} />
      )}
    </Base>
  );
};

export default RegularPages;

export const getStaticPaths = async () => {
  const slugs = getSinglePage('content');
  const paths = slugs.map((item) => ({
    params: { regular: item.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { regular } = params;
  const data = getRegularPage(regular);

  return {
    props: { data },
  };
};
