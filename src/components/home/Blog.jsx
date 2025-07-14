import Button from "../ui/Button";
import { useRouter } from "next/router";
import { allBlogs } from "@/staticData/blog/blog";
import SingleBlog from "../blog/SingleBlog";

const Blog = () => {
  const router = useRouter();

  const handleButtonClick = (link) => {
    router.push(link);
  };

  return (
    <div className="blog-post" data-title="Blog" id="blog">
      <div className="container">
        <div className="section-title">
          <h2 className="title">
            <span>Blog</span> Post
          </h2>
        </div>

        <div className="blog-post-group">
          {allBlogs
            ?.map((blog) => <SingleBlog key={blog?.id} {...blog} />)
            .reverse()
            .splice(0, 2)}
        </div>

        <div className="all-blog-button-area text-center">
          <Button
            arrow
            text="MORE BLOGS"
            onClick={() => handleButtonClick("/blog")}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
