import React from "react";
import Link from "gatsby-link";
import PostTags from "../PostTags/PostTags";
import PostFormatting from "../../layouts/PostFormatting/PostFormatting";
import PostHeader from "../../layouts/PostHeader/PostHeader";
import PostDate from "../PostDate/PostDate";
import "./PostListing.css";

const getPostList = (postEdges) =>
  postEdges.map(postEdge => ({
    path: postEdge.node.fields.slug,
    tags: postEdge.node.frontmatter.tags,
    cover: postEdge.node.frontmatter.cover,
    title: postEdge.node.frontmatter.title,
    date: postEdge.node.frontmatter.date,
    excerpt: postEdge.node.excerpt,
    timeToRead: postEdge.node.timeToRead
  }));

class PostListing extends React.Component {
  render() {
    const postList = getPostList(this.props.postEdges);

    return (
      <div>
        {/* This is the post loop - each post will be output using this markup */}
        {postList.map(post => {
          const { title, path, excerpt, tags, date } = post;
          const className = post.post_class ? post.post_class : "post";

          return (
            <PostFormatting className={className} key={title}>
              <PostHeader>
                <h2 className="post-title">
                  <Link to={path}>{title}</Link>
                </h2>
              </PostHeader>
              <section className="post-excerpt">
                {/* TODO limit excerpt to 26 words */}
                <p>
                  {excerpt}{" "}
                  <Link className="read-more" to={path}>
                    &raquo;
                  </Link>
                </p>
              </section>
              <footer className="post-meta">
                <PostTags prefix=" on " tags={tags} />
                <PostDate date={date} />
              </footer>
            </PostFormatting>
          );
        })}
      </div>
    );
  }
}

export default PostListing;
