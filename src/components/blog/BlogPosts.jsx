import { allBlogs } from "@/staticData/blog/blog";
import Button from "../ui/Button";
import SingleBlog from "./SingleBlog";
import { useState } from "react";

const BlogPosts = () => {
  const [blogCount, setBlogCount] = useState(4);

  const handleButtonClick = () => {
    setBlogCount((prev) => prev + 2);
  };

  return (
    <div className="blog-post all-blogs">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="blog-post-group">
              {allBlogs
                ?.map((blog) => <SingleBlog key={blog?.id} {...blog} />)
                .splice(0, blogCount)}
            </div>

            {allBlogs?.length !== blogCount && (
              <div className="load-more-btn text-center">
                <Button text="LOAD MORE" onClick={() => handleButtonClick()} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
