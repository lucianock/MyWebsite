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
import { useTranslation } from '@/hooks/useTranslation';

const SingleBlogDetails = ({ slug }) => {
  const [singlePost, setSinglePost] = useState({});
  const { rtl } = useThemeContext();
  const { t } = useTranslation();

  useEffect(() => {
    setSinglePost(allBlogs?.find((blog) => blog?.slug == slug));
  }, [slug]);

  // Función para generar colores de fondo basados en las tags
  const getTagColors = (tag) => {
    const colors = {
      'blog.technology': {
        primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        icon: '💻'
      },
      'blog.development': {
        primary: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        icon: '⚡'
      }
    };
    return colors[tag] || colors['blog.technology'];
  };

  const colors = getTagColors(singlePost?.tags);

  // If no singlePost is found, show a loading or error state
  if (!singlePost || Object.keys(singlePost).length === 0) {
    return (
      <div className="blog-details">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center py-5">
                <h3>Blog post not found</h3>
                <p>The requested blog post could not be found.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-details">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="post-media">
              <div style={{
                width: '850px',
                height: '450px',
                background: colors?.primary || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '10px',
                marginBottom: '30px'
              }}>
                {/* Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(215, 157, 75, 0.1), rgba(215, 157, 75, 0.05))',
                  zIndex: 1
                }}></div>
                
                {/* Blog Icon */}
                <div style={{
                  fontSize: '5rem',
                  color: 'rgba(255,255,255,0.9)',
                  textAlign: 'center',
                  zIndex: 2,
                  position: 'relative'
                }}>
                  {colors?.icon || '📝'}
                </div>

                {/* Tag Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(215, 157, 75, 0.9)',
                  color: '#fff',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  zIndex: 3,
                  backdropFilter: 'blur(10px)'
                }}>
                  {singlePost?.tags ? t(singlePost.tags) : 'Technology'}
                </div>
              </div>
            </div>
            <div className="post-details">
              <div className="blog-post-header">
                <div>
                  <span className="date">{singlePost?.date}</span>
                  &nbsp;-&nbsp;
                  <span className="category">
                    {t('blog.category')} : &nbsp;
                    <Link href="#">{singlePost?.tags ? t(singlePost.tags) : 'Technology'}</Link>
                  </span>
                </div>
                <h2 className="blog-post-title">{singlePost?.title ? t(singlePost.title) : 'Blog Post'}</h2>
              </div>
              <div className="inner-desc">
                <p>{singlePost?.description ? t(singlePost.description) : 'Blog post description'}</p>
                <ul className="list">
                  <li>{t('blog.listItem1')}</li>
                  <li>{t('blog.listItem2')}</li>
                  <li>{t('blog.listItem3')}</li>
                  <li>{t('blog.listItem4')}</li>
                  <li>{t('blog.listItem5')}</li>
                  <li>{t('blog.listItem6')}</li>
                </ul>
                <p>{t('blog.paragraph1')}</p>
                <p>{t('blog.paragraph2')}</p>
                <figure className="blockquote">
                  <p>{t('blog.quote')}</p>
                </figure>
                <p>{t('blog.paragraph3')}</p>
                <p>{t('blog.paragraph4')}</p>
              </div>

              <div className="blog-post-footer">
                <div className="row">
                  <div className="col-md-8">
                    <ul className="post-tags">
                      <li className="list-inline-item">
                        <strong>{t('blog.tags')} : </strong>
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
                        <strong>{t('blog.share')} : </strong>
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
                    <h4>{t('blog.comments')}</h4>
                  </div>
                  <ul>
                    {blogComments?.map((comment, i) => (
                      <li key={i}>
                        <div
                          className={`author-img ${
                            rtl ? 'float-start' : 'float-end'
                          }`}
                        >
                          <div style={{
                            width: '40px',
                            height: '40px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            fontSize: '1.2rem'
                          }}>
                            {comment?.author?.charAt(0)}
                          </div>
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
                              {t('blog.reply')}
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
                                <div style={{
                                  width: '40px',
                                  height: '40px',
                                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: '#fff',
                                  fontSize: '1.2rem'
                                }}>
                                  {reply?.author?.charAt(0)}
                                </div>
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
                                    {t('blog.reply')}
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
                    <h4>{t('blog.leaveComment')}</h4>
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
