import React from "react";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => {
  const { title, date, description } = data.markdownRemark.frontmatter;
  const html = data.markdownRemark.html;

  return (
    <>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{description}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        description
      }
      html
    }
  }
`;

export default BlogPost;
