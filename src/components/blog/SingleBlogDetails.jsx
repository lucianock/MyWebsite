import {
  allBlogs,
  blogComments,
  blogSocialIcons,
} from '@/staticData/blog/blog';
import { useEffect, useState } from 'react';
import CommentBox from './CommentBox';
import Link from 'next/link';
import Image from 'next/image';
import useThemeContext from '@/hooks/useThemeContext';

const SingleBlogDetails = ({ slug }) => {
  const [singlePost, setSinglePost] = useState({});
  const { rtl } = useThemeContext();

  useEffect(() => {
    setSinglePost(allBlogs?.find((blog) => blog?.slug == slug));
  }, [slug]);

  return (
    <div className="blog-details">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="post-media">
              <Image
                src={singlePost?.image?.mainImage}
                width={850}
                height={450}
                alt={singlePost?.title}
                className="img-fluid rounded"
              />
            </div>
            <div className="post-details">
              <div className="blog-post-header">
                <div>
                  <span className="date">{singlePost?.date}</span>
                  &nbsp;-&nbsp;
                  <span className="category">
                    CATEGORY : &nbsp;
                    <Link href="#">{singlePost?.tags}</Link>
                  </span>
                </div>
                <h2 className="blog-post-title">{singlePost?.title}</h2>
              </div>
              <div className="inner-desc">
                <p>{singlePost?.description}</p>
                <ul className="list">
                  <li>Stove is usually all we need</li>
                  <li>Eany desktop publishing</li>
                  <li>Pellentesque congue male</li>
                  <li>Morbi eleifend tellus at ante</li>
                  <li>Emotional sensation of stress</li>
                  <li>Quickly learn to fear</li>
                </ul>
                <p>
                  Proin sed lorem nunc. Vivamus maximus lorem dui, in
                  scelerisque diam semper sit amet. Nunc elementum elit sodales
                  elementum sollicitudin. Aliquam erat volutpat. In erat sapien,
                  condimentum sit amet rhoncus eget, finibus ut ex. Proin
                  fermentum pharetra orci id blandit. Praesent at nulla et
                  sapien pellentesque hendrerit. Phasellus sit amet nisl enim.
                  Vivamus tincidunt, urna non lobortis finibus, lorem nulla
                  iaculis est, a rutrum nunc urna facilisis lorem. Phasellus
                  vehicula augue quis nisi suscipit venenatis. Proin eget orci
                  augue. Cras dignissim augue id magna porttitor, quis semper
                  urna tempus. Cras dignissim libero urna, non porttitor urna
                  imperdiet at. In dictum facilisis felis ac cursus. Nam mattis
                  mauris vitae magna porttitor convallis a vel arcu. Etiam
                  libero orci, rhoncus vitae massa eget, eleifend volutpat
                  metus.
                </p>
                <p>
                  Vestibulum a ex purus. Maecenas nec scelerisque magna. Sed
                  velit elit, rutrum eu diam in, finibus mollis justo. Vivamus
                  facilisis, turpis ac convallis varius, odio ipsum scelerisque
                  est, ut faucibus dui lacus at risus. Morbi faucibus lectus sed
                  enim tincidunt auctor. className aptent taciti sociosqu ad
                  litora torquent per conubia
                </p>
                <figure className="blockquote">
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classNameical Latin
                    literature from
                  </p>
                </figure>
                <p>
                  One touch of a red-hot stove is usually all we need to avoid
                  that kind of discomfort in the future. The same is true as we
                  experience the emotional sensation of stress from our first
                  instances of social rejection ridicule. We quickly learn to
                  fear and thus automatically.magna rhoncus neque, vitae viverra
                  odio est vitae nunc. Mauris odio nisi, tempor non tristique
                  eget, tempus et sem. Suspendisse nec commodo lacus, id congue
                  est. Quisque sed purus at sem blandit porta accumsan vel nibh.
                </p>
                <p>
                  Morbi et est erat. Sed ut elit fringilla, dapibus augue et,
                  tempus lorem. Ut blandit auctor sapien, gravidatristique
                  turpis hendrerit eu. Quisque quis dolor tincidunt Nulla mattis
                  arcu vel arcu faucibus volutpat. Praesent sit amet mauris at
                  turpis dictum porttitor
                </p>
              </div>

              <div className="blog-post-footer">
                <div className="row">
                  <div className="col-md-8">
                    <ul className="post-tags">
                      <li className="list-inline-item">
                        <strong>Tags : </strong>
                      </li>
                      {singlePost?.allTags?.map((tag, i) => (
                        <li className="list-inline-item" key={i}>
                          <Link href="#">
                            {tag}
                            {i < singlePost?.allTags?.length - 1 && ','}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="post-share">
                      <li className="list-inline-item">
                        <strong>Share : </strong>
                      </li>
                      {blogSocialIcons?.map((icon) => (
                        <li className="list-inline-item" key={icon?.id}>
                          <Link href={icon?.url} title={icon?.tooltip}>
                            {icon?.Icon}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="comment-area">
                <div className="comment-list">
                  <div className="comment-title">
                    <h4>02 COMMENT</h4>
                  </div>
                  <ul>
                    {blogComments?.map((comment, i) => (
                      <li key={i}>
                        <div
                          className={`author-img ${
                            rtl ? 'float-start' : 'float-end'
                          }`}
                        >
                          <Image
                            src={comment?.imageSrc}
                            alt="Author"
                            width={40}
                            height={40}
                            className="rounded-circle"
                          />
                        </div>
                        <div className="text overflow-hidden">
                          <h5>
                            {comment?.author}
                            <Link
                              href="#"
                              className={`reply-btn ${
                                rtl ? 'float-end' : 'float-start'
                              }`}
                            >
                              REPLY
                            </Link>
                          </h5>
                          <h6>{comment?.date}</h6>
                          <p>{comment?.content}</p>
                        </div>
                        {comment?.replies?.map((reply, i) => (
                          <ul className="replied-comment" key={i}>
                            <li className="border-top">
                              <div
                                className={`author-img ${
                                  rtl ? 'float-start' : 'float-end'
                                }`}
                              >
                                <Image
                                  src={reply?.imageSrc}
                                  alt="Author"
                                  commentor1ReplyImage
                                  width={40}
                                  height={40}
                                  className="rounded-circle"
                                />
                              </div>
                              <div className="text overflow-hidden">
                                <h5>
                                  {reply?.author}
                                  <Link
                                    href="#"
                                    className={`reply-btn ${
                                      rtl ? 'float-end' : 'float-start'
                                    }`}
                                  >
                                    REPLY
                                  </Link>
                                </h5>
                                <h6>{reply?.date}</h6>
                                <p>{reply?.content}</p>
                              </div>
                            </li>
                          </ul>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="comment-box">
                  <div className="comment-title">
                    <h4>LEAVE A COMMENT</h4>
                  </div>
                  <CommentBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogDetails;
