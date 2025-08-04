import SingleBlogDetails from "@/components/blog/SingleBlogDetails";
import BreadcrumbHero from "@/components/shared/BreadcrumbHero";
import Layout from "@/layout/Layout";
import { singleBlogHero, allBlogs } from "@/staticData/blog/blog";
import { useRouter } from "next/router";

const SingleBlog = ({ blog }) => {
  const router = useRouter();

  // Si la página está cargando, mostrar un loading
  if (router.isFallback) {
    return (
      <Layout>
        <div id="blog">
          <BreadcrumbHero heroData={singleBlogHero} />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="text-center py-5">
                  <h3>Cargando...</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

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
    fallback: 'blocking', // Permite generar páginas dinámicamente en desarrollo
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
