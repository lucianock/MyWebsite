import BlogPosts from "@/components/blog/BlogPosts";
import BreadcrumbHero from "@/components/shared/BreadcrumbHero";
import Layout from "@/layout/Layout";
import { blogHero } from "@/staticData/blog/blog";

const Blog = () => {
  return (
    <Layout>
      <div id="blog">
        <BreadcrumbHero heroData={blogHero} />
        <BlogPosts />
      </div>
    </Layout>
  );
};

export default Blog;
