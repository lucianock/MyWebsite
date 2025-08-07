import { allBlogs } from "@/staticData/blog/blog";
import Button from "../ui/Button";
import SingleBlog from "./SingleBlog";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const BlogPosts = () => {
  const [blogCount, setBlogCount] = useState(4);
  const { t } = useTranslation();

  const handleButtonClick = () => {
    setBlogCount((prev) => prev + 2);
  };

  // Ordenar blogs por fecha (más reciente primero)
  const sortedBlogs = allBlogs?.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // Orden descendente (más reciente primero)
  });

  return (
    <div className="blog-post all-blogs">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="blog-post-group">
              {sortedBlogs
                ?.map((blog) => <SingleBlog key={blog?.id} {...blog} />)
                .splice(0, blogCount)}
            </div>

            {sortedBlogs?.length !== blogCount && (
              <div className="load-more-btn text-center">
                <Button text={t('blog.loadMore')} onClick={() => handleButtonClick()} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
