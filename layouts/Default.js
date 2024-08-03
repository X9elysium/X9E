import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Banner from "./components/Banner";
import Base from "./Baseof";
import Footer from "../layouts/partials/Footer";
import Header from "../layouts/partials/Header";
import Head from "next/head";
import { useRouter } from "next/router";

// Rest of your code...

const Default = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title } = frontmatter;
  return (
    <section className="section">
      <Banner title={title} />
      <div className="container mt-10">
        <div className="content">
          <MDXRemote {...mdxContent} components={shortcodes} />
        </div>
      </div>
    </section>
  );
};

export default Default;
