import NotFound from "../layouts/404";
import Base from "../layouts/Baseof";
import Head from "next/head";
import { useRouter } from "next/router";

// Rest of your code...


import { getRegularPage } from "../lib/server/contentParser";
 
const notFound = ({ data }) => {
  return (
    <Base>
      <NotFound data={data} />
    </Base>
  );
};

// get 404 page data
export const getStaticProps = async () => {
  const notFoundData = await getRegularPage("404");
  return {
    props: {
      data: notFoundData,
    },
  };
};

export default notFound;
