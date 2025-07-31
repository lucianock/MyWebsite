import Button from "../ui/Button";
import { useRouter } from "next/router";
import { allBlogs } from "@/staticData/blog/blog";
import SingleBlog from "../blog/SingleBlog";
import { useTranslation } from "@/hooks/useTranslation";

const Blog = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleButtonClick = (link) => {
    router.push(link);
  };

  // Filtrar posts destacados para mostrar en la página principal
  const featuredPosts = allBlogs?.filter(blog => blog.featured).slice(0, 2);
  const regularPosts = allBlogs?.filter(blog => !blog.featured).slice(0, 2);

  return (
    <div className="blog-post" data-title="Blog" id="blog">
      <div className="container">
        <div className="section-title">
          <h2 className="title">
            <span className="bottom-border">{t('sections.blogs')} Post</span>
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: '#666', 
            marginTop: '10px',
            fontSize: '0.95rem'
          }}>
            Latest articles about web development, Laravel, and modern technologies
          </p>
        </div>

        <div className="blog-post-group">
          {/* Mostrar posts destacados primero */}
          {featuredPosts?.map((blog) => (
            <SingleBlog key={blog?.id} {...blog} />
          ))}
          
          {/* Mostrar posts regulares */}
          {regularPosts?.map((blog) => (
            <SingleBlog key={blog?.id} {...blog} />
          ))}
        </div>

        <div className="all-blog-button-area text-center">
          <Button
            arrow
            text="VIEW ALL ARTICLES"
            onClick={() => handleButtonClick("/blog")}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
