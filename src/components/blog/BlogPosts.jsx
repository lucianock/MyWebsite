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

  // Ordenar estrictamente por fecha (más reciente primero) usando isoDate si existe
  const sortedBlogs = allBlogs
    ?.slice()
    .sort((a, b) => {
      const aTime = a.isoDate ? Date.parse(a.isoDate) : Date.parse(a.date);
      const bTime = b.isoDate ? Date.parse(b.isoDate) : Date.parse(b.date);
      return (bTime || 0) - (aTime || 0);
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
