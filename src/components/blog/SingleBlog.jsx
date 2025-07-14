import { routes } from "@/config/route";
import Image from "next/image";
import Link from "next/link";
import SecondaryButton from "../ui/SecondaryButton";

const SingleBlog = ({ slug, image, title, tags, date, description }) => {
  return (
    <article className="blog-post-item">
      <div className="post-media">
        <Link href={`${routes?.blog}/${slug}`}>
          <Image
            src={image?.thumbnail}
            width={325}
            height={205}
            alt={title}
            className="img-fluid"
          />
        </Link>
      </div>
      <div className="post-details">
        <p className="date">
          {date}
          <span> - </span> 
          <Link href="#" className="tags">
            {tags}
          </Link>
        </p>
        <h2 className="blog-title">
          <Link href={`${routes?.blog}/${slug}`}>{title}</Link>
        </h2>
        <p className="desc">{description}</p>
        <SecondaryButton text="Continue Read" url={`${routes?.blog}/${slug}`} />
      </div>
    </article>
  );
};

export default SingleBlog;
