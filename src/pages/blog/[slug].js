import SingleBlogDetails from "@/components/blog/SingleBlogDetails";
import BreadcrumbHero from "@/components/shared/BreadcrumbHero";
import Layout from "@/layout/Layout";
import { singleBlogHero, allBlogs } from "@/staticData/blog/blog";
import { useRouter } from "next/router";

const SingleBlog = ({ blog }) => {
  const router = useRouter();

  // Con fallback: false, no necesitamos manejar el estado de carga
  // ya que todas las páginas se generan en build time

  return (
    <Layout>
      <div id="blog">
        <BreadcrumbHero heroData={singleBlogHero} />
        <SingleBlogDetails slug={router.query.slug} />
      </div>
    </Layout>
  );
};

// Generar las rutas estáticas
export async function getStaticPaths() {
  const paths = allBlogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return {
    paths,
    fallback: false, // No compatible con output: export, debe ser false
  };
}

// Obtener los datos del blog
export async function getStaticProps({ params }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog,
    },
  };
}

export default SingleBlog;
