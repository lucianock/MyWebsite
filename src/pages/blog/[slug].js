import SingleBlogDetails from "@/components/blog/SingleBlogDetails";
import BreadcrumbHero from "@/components/shared/BreadcrumbHero";
import Layout from "@/layout/Layout";
import { singleBlogHero } from "@/staticData/blog/blog";
import { useRouter } from "next/router";

const SingleBlog = () => {
  const router = useRouter();

  return (
    <Layout>
      <div id="blog">
        <BreadcrumbHero heroData={singleBlogHero} />
        <SingleBlogDetails slug={router.query.slug} />
      </div>
    </Layout>
  );
};

export default SingleBlog;
